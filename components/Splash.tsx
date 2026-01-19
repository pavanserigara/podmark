
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoGroupRef = useRef<HTMLDivElement>(null);
  const wordStrategyRef = useRef<HTMLHeadingElement>(null);
  const wordCreativeRef = useRef<HTMLHeadingElement>(null);
  const wordImpactRef = useRef<HTMLHeadingElement>(null);
  const shutterTopRef = useRef<HTMLDivElement>(null);
  const shutterBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial States
    gsap.set(containerRef.current, { display: 'flex' });
    gsap.set([shutterTopRef.current, shutterBottomRef.current], { height: '50vh' });
    gsap.set([wordStrategyRef.current, wordCreativeRef.current, wordImpactRef.current], {
      opacity: 0,
      scale: 0.8,
      display: 'none',
      filter: 'blur(10px)'
    });
    gsap.set(logoGroupRef.current, { opacity: 0, scale: 1.5 });

    // --- Kinetic Sequence ---

    // 1. STRATEGY (Gold)
    tl.set(wordStrategyRef.current, { display: 'block' })
      .to(wordStrategyRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.4,
        ease: "power4.out"
      })
      .to(wordStrategyRef.current, {
        opacity: 0,
        scale: 1.5,
        filter: 'blur(10px)',
        duration: 0.3,
        ease: "power2.in",
        display: 'none'
      }, "+=0.2");

    // 2. CREATIVITY (Purple)
    tl.set(wordCreativeRef.current, { display: 'block' })
      .to(wordCreativeRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.4,
        ease: "power4.out"
      })
      .to(wordCreativeRef.current, {
        opacity: 0,
        scale: 1.5,
        filter: 'blur(10px)',
        duration: 0.3,
        ease: "power2.in",
        display: 'none'
      }, "+=0.2");

    // 3. IMPACT (Cyan/Blue - Matches Hero)
    tl.set(wordImpactRef.current, { display: 'block' })
      .to(wordImpactRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.4,
        ease: "elastic.out(1, 0.5)"
      })
      .to(wordImpactRef.current, {
        opacity: 0,
        scale: 0.5,
        filter: 'blur(20px)',
        duration: 0.3,
        ease: "expo.in",
        display: 'none'
      }, "+=0.3");

    // 4. THE REVEAL (Logo)
    tl.to(logoGroupRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6, // Reduced from 0.8
      ease: "power3.out"
    })
      .to(logoGroupRef.current, {
        scale: 1.05,
        filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))',
        duration: 0.5, // Reduced from 1
        yoyo: true,
        repeat: 1
      }, "-=0.3");

    // 5. EXIT (Cinema Curtains)
    tl.add(() => onComplete(), "-=0.2")
      .to(shutterTopRef.current, {
        height: 0,
        duration: 1.2,
        ease: "power4.inOut"
      })
      .to(shutterBottomRef.current, {
        height: 0,
        duration: 1.2,
        ease: "power4.inOut"
      }, "<")
      .to(logoGroupRef.current, {
        opacity: 0,
        scale: 2,
        duration: 0.5,
        ease: "power2.in"
      }, "<")
      .set(containerRef.current, { display: 'none' });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Cinematic Shutters (Top/Bottom) */}
      <div
        ref={shutterTopRef}
        className="absolute top-0 left-0 w-full bg-[#0E0516] z-10 flex flex-col justify-end"
      >
        {/* Film Strip Accent (Matches Hero) */}
        <div className="w-full h-12 opacity-20 bg-[repeating-linear-gradient(90deg,rgba(139,92,246,0.1),rgba(139,92,246,0.1)_40px,transparent_40px,transparent_80px)] border-b border-podPurple/20" />
      </div>

      <div
        ref={shutterBottomRef}
        className="absolute bottom-0 left-0 w-full bg-[#0E0516] z-10 flex flex-col justify-start"
      >
        {/* Film Strip Accent (Matches Hero) */}
        <div className="w-full h-12 opacity-20 bg-[repeating-linear-gradient(90deg,rgba(139,92,246,0.1),rgba(139,92,246,0.1)_40px,transparent_40px,transparent_80px)] border-t border-podPurple/20" />
      </div>

      {/* Kinetic Text Layer */}
      <div className="relative z-30 text-center pointer-events-none mix-blend-screen">
        <h2
          ref={wordStrategyRef}
          className="text-4xl md:text-7xl font-black tracking-widest text-podGold drop-shadow-[0_0_15px_rgba(189,153,112,0.5)]"
        >
          STRATEGY
        </h2>

        <h2
          ref={wordCreativeRef}
          className="text-4xl md:text-7xl font-black tracking-widest text-[#8b5cf6] drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        >
          CREATIVITY
        </h2>

        <h2
          ref={wordImpactRef}
          className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-podCyan to-[#1D4ED8] drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]"
        >
          IMPACT
        </h2>
      </div>

      {/* Logo Final Layer */}
      <div ref={logoGroupRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <img
          src="/images/podmark_logo.svg"
          alt="Podmark Logo"
          className="w-64 md:w-[600px] h-auto"
        />
      </div>
    </div>
  );
};
