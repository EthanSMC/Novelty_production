import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "dummy" });

app.post("/api/generate-chapter", async (req, res) => {
  try {
    const { currentChapter, selectedOption } = req.body;

    const prompt = `
You are an interactive fiction writer. 
The user is currently at this part of the story:
"${currentChapter}"

They chose the following action:
"${selectedOption}"

Write the next chapter of the story based on this choice. 
Also, provide 2 to 4 new choices for the user to take next.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            chapterTitle: { type: Type.STRING, description: "Title of the new chapter" },
            content: { type: Type.STRING, description: "The story text for the new chapter (2-3 paragraphs)" },
            options: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING, description: "A short uppercase letter like A, B, C, D" },
                  title: { type: Type.STRING, description: "Short action title" },
                  description: { type: Type.STRING, description: "Longer description of the action" },
                  iconType: { type: Type.STRING, description: "One of: Zap, Wand2, Shield, BrainCircuit, Sparkles, Sword, Compass" }
                },
                required: ["id", "title", "description", "iconType"]
              }
            }
          },
          required: ["chapterTitle", "content", "options"]
        }
      }
    });

    if (!response.text) {
      throw new Error("No response text from Gemini");
    }

    const result = JSON.parse(response.text);
    res.json(result);
  } catch (error) {
    console.error("Error generating chapter:", error);
    res.status(500).json({ error: "Failed to generate chapter" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
  });
}

startServer();
