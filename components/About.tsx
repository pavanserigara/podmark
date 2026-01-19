
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="story" ref={containerRef} className="relative py-32 md:py-48 bg-podDark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-podGold/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        Ethos
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Visual/Founding Mark */}
          <div className="relative">
            <div className="inline-block mb-8">
              <span className="text-podGold text-xs font-black tracking-[0.5em] uppercase reveal-text">The Origin</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-8 reveal-text">
              EST. <br/>
              <span className="impact-gradient">MARCH <br/> 2025.</span>
            </h2>
            <div className="w-24 h-1 bg-podGold reveal-text"></div>
            
            <div className="mt-16 space-y-10 reveal-text">
              <div className="flex items-start gap-6">
                <span className="text-podGold font-black text-xl italic">01.</span>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Teamwork First</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">Built on collaborative trust.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-podGold font-black text-xl italic">02.</span>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">Beyond Agency</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">We become part of your brand DNA.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div ref={textRef} className="space-y-8">
            <h3 className="text-2xl md:text-4xl font-bold text-white/90 leading-tight reveal-text">
              Founded in <span className="text-podGold">March 2025</span>, PODMARK is a creative-driven digital company built on trust and teamwork.
            </h3>
            
            <div className="h-px w-full bg-white/10 reveal-text"></div>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed reveal-text">
              We don’t work for you, we work <span className="text-white font-bold underline decoration-podGold underline-offset-8">with you</span>, as part of your brand. At PODMARK, we go beyond traditional marketing. We partner with you to grow your brand through creativity, strategy, and trust.
            </p>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed reveal-text">
              Whether you're a startup or an established business, we help you build a strong and impactful digital presence. Let’s grow your business together.
            </p>

            <div className="pt-8 reveal-text">
              <a href="#contact" className="group flex items-center gap-4 text-podGold font-black tracking-[0.4em] uppercase text-xs transition-all hover:gap-8">
                Learn our philosophy
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
