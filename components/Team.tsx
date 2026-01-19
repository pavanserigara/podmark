
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TeamMember } from '../types';

gsap.registerPlugin(ScrollTrigger);

const TEAM: TeamMember[] = [
  {
    name: "Uttham",
    role: "Founder & MD",
    specialty: "Strategic leadership & purpose.",
    image: "/images/Uttham.jpg"
  },
  {
    name: "Sanjana",
    role: "Operation Head",
    specialty: "Project flow & timely delivery.",
    image: "/images/Sanjana.jpg"
  },
  {
    name: "Gautham",
    role: "Business Analyst",
    specialty: "Data-driven growth strategies.",
    image: "/images/Gautham.JPG"
  },
  {
    name: "Haneesh S",
    role: "Marketing Head",
    specialty: "Sales & Production Quality.",
    image: "/images/haneesh.jpeg"
  },
  {
    name: "Mithun",
    role: "Creative Head",
    specialty: "Photography & Visual Styling.",
    image: "/images/Mithun.JPG"
  }
];

export const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger to account for pinned sections above
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Use fromTo to avoid "stuck at 0 opacity" issues
      gsap.fromTo(".team-card",
        {
          y: 60,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // Trigger slightly earlier for better reliability
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} className="py-24 md:py-32 bg-podDark relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background visual depth */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1 rounded-full border border-podGold/30 bg-podGold/10 mb-6">
            <span className="text-[9px] font-black tracking-[0.4em] text-podGold uppercase">The Core Leadership</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-none">
            THE <span className="text-podGold drop-shadow-[0_0_25px_rgba(189,153,112,0.4)]">ARCHITECTS.</span>
          </h2>
          <div className="w-16 h-1 bg-podGold mx-auto mb-8"></div>
          <p className="text-white/40 text-[10px] md:text-xs font-bold max-w-2xl mx-auto uppercase tracking-[0.4em] leading-relaxed">
            Meet the visionaries architecting the future of brand impact.
          </p>
        </div>

        {/* Team Grid: 2 per row on mobile, 5 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="team-card group relative flex flex-col h-full bg-[#1a0b2e] rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-podGold/40 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
            >
              {/* Image Section */}
              <div className="aspect-[4/5] relative overflow-hidden bg-podDeepPurple">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Visual Accent Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0516] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>

                {/* Status Dot */}
                <div className="absolute top-3 left-3 z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-podGold animate-pulse"></div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4 md:p-6 flex flex-col flex-grow relative z-20 bg-[#1a0b2e]">
                <div className="mb-4">
                  <span className="text-[8px] md:text-[9px] font-black text-podGold tracking-[0.2em] uppercase mb-1.5 block">
                    {member.role}
                  </span>
                  <h3 className="text-base md:text-xl font-black text-white tracking-tight leading-tight uppercase group-hover:text-podGold transition-colors">
                    {member.name}
                  </h3>
                </div>

                <div className="mt-auto">
                  <div className="h-px w-6 bg-podGold/20 mb-3 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-[9px] md:text-[10px] font-bold text-white/40 leading-relaxed uppercase tracking-widest">
                    {member.specialty}
                  </p>
                </div>
              </div>

              {/* Bottom Glow bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-podGold translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
