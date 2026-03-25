import React from 'react';
import { ChevronLeft, ChevronRight, Zap, Wand2, Shield, BrainCircuit, Sparkles } from 'lucide-react';

export default function Reading() {
  return (
    <main className="py-8 max-w-3xl mx-auto px-6 md:px-12 relative">
      {/* Chapter Header */}
      <section className="mb-16 text-center">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant mb-4 block">
          Chapter XIV
        </span>
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-8 tracking-tight">
          The Obsidian Gate
        </h1>
        <div className="w-12 h-[1px] bg-outline-variant/30 mx-auto"></div>
      </section>

      {/* Reading Canvas */}
      <article className="font-body text-xl md:text-2xl leading-relaxed text-on-surface space-y-10 selection:bg-primary-container selection:text-on-primary-container">
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
      </article>

      {/* Page Turn Indicator (Visual Only) */}
      <div className="flex justify-between items-center mt-20 opacity-20 group cursor-default select-none">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest">Previous Page</span>
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-on-surface"></div>
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Next Page</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

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
          <button className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10">
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
          <button className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10">
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
          <button className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10">
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
          <button className="group text-left p-6 rounded-xl bg-surface-container-low hover:bg-secondary-container transition-all duration-300 ease-out-expo border border-outline-variant/10">
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

        {/* Generate Button Area */}
        <div className="mt-20 flex flex-col items-center">
          <div className="mb-8 w-px h-16 bg-gradient-to-b from-outline-variant/30 to-transparent"></div>
          <button className="group relative px-10 py-5 bg-primary text-on-primary rounded-full font-label font-semibold tracking-wide shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out-expo overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-5 h-5 fill-current" />
              Generate Next Chapter
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <p className="mt-6 font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] opacity-60">
            Estimated Generation Time: 4 Seconds
          </p>
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
