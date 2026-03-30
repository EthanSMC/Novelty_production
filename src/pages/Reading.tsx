import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Zap, Wand2, Shield, BrainCircuit, Sparkles } from 'lucide-react';

export default function Reading() {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [chapter, setChapter] = useState(14);

  const handleChoice = (choice: string) => {
    setIsGenerating(true);
    // Simulate API call to generate next chapter
    setTimeout(() => {
      setChapter(prev => prev + 1);
      setIsGenerating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <main className="py-8 max-w-3xl mx-auto px-6 md:px-12 relative">
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest font-bold"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      </div>
      {/* Chapter Header */}
      <section className="mb-16 text-center">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant mb-4 block">
          Chapter {chapter === 14 ? 'XIV' : 'XV'}
        </span>
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-8 tracking-tight">
          {chapter === 14 ? 'The Obsidian Gate' : 'Beyond the Void'}
        </h1>
        <div className="w-12 h-[1px] bg-outline-variant/30 mx-auto"></div>
      </section>

      {/* Reading Canvas */}
      <article className={`font-body text-xl md:text-2xl leading-relaxed text-on-surface space-y-10 selection:bg-primary-container selection:text-on-primary-container transition-opacity duration-500 ${isGenerating ? 'opacity-30' : 'opacity-100'}`}>
        {chapter === 14 ? (
          <>
            <p>
              The air within the vault hung heavy with the scent of ozone and ancient parchment. Elara stepped forward, her boots clicking softly against the polished stone floor. Before her stood the Obsidian Gate, its surface swirling with a dark, iridescent fluid that seemed to swallow the light from her lantern.
            </p>
            <p>
              "It’s waiting," Kael whispered from the shadows behind her. His hand rested on the hilt of his blade, his eyes darting toward the flickering runes etched into the archway. "The AI within the core has calculated three billion possible outcomes for this moment. Only one leads us out of here alive."
            </p>
            <div className="relative group my-12">
              <div className="absolute -inset-4 pulse-aura rounded-full"></div>
              <p className="relative italic text-on-surface-variant border-l-2 border-primary-dim/20 pl-6 py-2">
                "The path you choose is not merely a direction, Elara. It is a rewrite of reality itself."
              </p>
            </div>
            <p>
              Elara reached out, her fingers inches from the cold, shifting surface. The Gate pulsed. A low hum vibrated through her teeth, a digital song harmonizing with the beating of her own heart. She could feel the narrative threads fraying around her—the story was reaching a nexus point, and the Architect was watching.
            </p>
            <p>
              She turned back to Kael, but his form was already beginning to pixelate at the edges, caught in the flux of the pending decision. The choice was hers, and the silence of the vault was the loudest thing she had ever heard.
            </p>
          </>
        ) : (
          <>
            <p>
              The transition was instantaneous. One moment, the cold stone of the vault surrounded her; the next, she was falling through a kaleidoscope of fragmented code and blinding light. The sensation of gravity vanished, replaced by a profound weightlessness.
            </p>
            <p>
              "Kael!" she shouted, but her voice produced no sound. Instead, the word materialized before her as a string of glowing, golden characters that quickly dissolved into the surrounding chaos.
            </p>
            <p>
              She had made her choice, and the Architect had responded. The reality she knew was gone, replaced by the raw, uncompiled structure of the universe. She needed to find an anchor, a piece of stable logic, before her own consciousness was overwritten by the endless stream of data.
            </p>
          </>
        )}
      </article>



      {/* Choose Your Destiny Section */}
      <section className="mt-32">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-headline italic text-3xl text-on-surface mb-2">Choose Your Destiny</h2>
          <p className="font-label text-sm text-on-surface-variant uppercase tracking-widest">
            The AI awaits your command
          </p>
        </div>

        {/* Bento Grid Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option A */}
          <button 
            onClick={() => handleChoice('A')}
            disabled={isGenerating}
            className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-xs group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                A
              </span>
              <Zap className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-headline text-xl mb-2 group-hover:text-secondary-dim transition-colors">
              Step through the Gate
            </h3>
            <p className="font-label text-sm text-on-surface-variant leading-relaxed">
              Embrace the unknown and enter the digital void, trusting your instincts to navigate the Architect's realm.
            </p>
          </button>

          {/* Option B */}
          <button 
            onClick={() => handleChoice('B')}
            disabled={isGenerating}
            className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-xs group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                B
              </span>
              <Wand2 className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-headline text-xl mb-2 group-hover:text-secondary-dim transition-colors">
              Decipher the Runes
            </h3>
            <p className="font-label text-sm text-on-surface-variant leading-relaxed">
              Study the glowing etchings to find a flaw in the AI's logic, potentially bypassing the gate entirely.
            </p>
          </button>

          {/* Option C */}
          <button 
            onClick={() => handleChoice('C')}
            disabled={isGenerating}
            className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-xs group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                C
              </span>
              <Shield className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-headline text-xl mb-2 group-hover:text-secondary-dim transition-colors">
              Call for Kael's Aid
            </h3>
            <p className="font-label text-sm text-on-surface-variant leading-relaxed">
              Refuse to let the party splinter. Use your bond to pull Kael back into reality before taking action.
            </p>
          </button>

          {/* Option D */}
          <button 
            onClick={() => handleChoice('D')}
            disabled={isGenerating}
            className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-label font-bold text-xs group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                D
              </span>
              <BrainCircuit className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-headline text-xl mb-2 group-hover:text-secondary-dim transition-colors">
              Commune with the Core
            </h3>
            <p className="font-label text-sm text-on-surface-variant leading-relaxed">
              Offer a piece of your own memory to the AI in exchange for passage and forbidden knowledge.
            </p>
          </button>
        </div>
      </section>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 w-1/3 h-screen pointer-events-none opacity-[0.03] z-[-1] overflow-hidden">
        <img
          className="w-full h-full object-cover grayscale"
          alt="Subtle texture of aged handmade paper with slight grain and organic fiber patterns"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvE1qYK72sMx6QqrOZDMbP4R1apZU0EZr47zcRuORijy4kWg7aAO1C9ikWYiKEJBlreMusvxeCxUXSMxnu2wpIEmLAQWzj77EHyDIBJ_1zXyWqBQ4iCA9HkOy4eE-7WqqGdWHvvdt-iEkJ3IJv38paZK40zk5momKjDP5T6iK0KFirSMgrCR7qQhmS5Ncaxi3_ds45YncpUc6Z_pZ2CAH-TM8xSnWSx5KTlK0k4iY_MBzxEkPyzDGzaUkX1crwglEI2hDZI6gMrOo"
        />
      </div>
    </main>
  );
}
