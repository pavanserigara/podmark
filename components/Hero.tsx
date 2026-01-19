
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-transparent">
      {/* Subtle overlays to ensure text pop */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-podDark/60 via-transparent to-podDark/60 pointer-events-none"></div>

      {/* Grid Overlay Pattern - refined */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-10"></div>

      {/* Film strip bands */}
      <div className="absolute top-[15%] left-0 w-full h-12 film-strip opacity-10 z-0"></div>
      <div className="absolute bottom-[15%] left-0 w-full h-12 film-strip opacity-10 z-0"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in flex-grow flex flex-col justify-center items-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-podPurple/30 bg-podPurple/5 backdrop-blur-sm">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-podPurple uppercase">
            WE DON'T JUST MARKET
          </h3>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] text-white flex flex-col items-center select-none">
          <span>WE CREATE</span>
          <span className="impact-gradient drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">IMPACT.</span>
        </h1>

        <p className="mt-6 md:mt-10 text-white/70 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium px-4">
          Founded in March 2025, <span className="text-white font-bold text-podPurple">PODMARK</span> is a creative-driven digital powerhouse built on trust and teamwork.
          We partner with elite brands to architect growth through high-impact strategy and cinematic storytelling.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-4 sm:w-auto">
          <a
            href="#services"
            className="group relative px-8 py-4 md:px-12 md:py-5 w-full sm:w-auto text-center overflow-hidden rounded-full font-black text-xs md:text-sm tracking-widest transition-all"
          >
            <div className="absolute inset-0 purple-gradient transition-transform group-hover:scale-110"></div>
            <span className="relative z-10 text-white">EXPLORE SERVICES</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 md:px-12 md:py-5 w-full sm:w-auto text-center border border-podGold/20 text-podGold rounded-full font-black text-xs md:text-sm tracking-widest hover:bg-podGold/10 transition-all backdrop-blur-sm"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-3 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[8px] font-black uppercase text-white/60 block text-center tracking-[0.4em]">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-podPurple to-transparent"></div>
        </div>
      </div>

      {/* Bottom Visual Element */}
      <div className="absolute bottom-12 right-12 flex space-x-4 opacity-30 hidden lg:flex">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`w-10 h-1 rounded-full ${i === 1 ? 'bg-podPurple' : 'bg-podPurple/20'}`}></div>
        ))}
      </div>
    </section>
  );
};
