
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OPENINGS = [
  "Social Media Executive",
  "Photographer / Videographer",
  "Video Editor",
  "Graphic Designer"
];

const PERKS = [
  { icon: "✨", text: "Creative freedom to explore new ideas" },
  { icon: "✨", text: "Friendly and collaborative culture" },
  { icon: "✨", text: "Opportunities to grow fast" },
  { icon: "✨", text: "Exciting diverse projects" }
];

export const Careers: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".careers-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="careers" ref={sectionRef} className="py-32 bg-podDark relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-podPurple/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="careers-content">
              <div className="inline-block px-4 py-1 rounded-full border border-podPurple/30 bg-podPurple/10 mb-6">
                <span className="text-[10px] font-black tracking-[0.4em] text-podPurple uppercase">Join Our Tribe</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
                JOIN OUR <span className="text-podPurple">TEAM.</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-medium mb-12 uppercase tracking-wide italic">
                "Creativity meets passion. Join our family."
              </p>

              <div className="space-y-8 mb-12">
                <h4 className="text-podGold text-xs font-black tracking-[0.3em] uppercase border-b border-podGold/20 pb-4 inline-block">Why Work With Us?</h4>
                <div className="grid gap-4">
                  {PERKS.map((perk, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <span className="text-xl group-hover:scale-125 transition-transform">{perk.icon}</span>
                      <span className="text-white/70 text-sm md:text-base font-medium tracking-tight uppercase group-hover:text-white transition-colors">{perk.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="careers-content">
              <div className="bg-[#1a0b2e] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                {/* Accent Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-podPurple/10 blur-[60px] rounded-full"></div>
                
                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Current Openings</h3>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {OPENINGS.map((job, i) => (
                    <div key={i} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest hover:border-podPurple/50 hover:bg-podPurple/5 transition-all cursor-default">
                      {job}
                    </div>
                  ))}
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-3">Send resume & portfolio:</p>
                    <a href="mailto:official@podmark.in" className="text-lg md:text-xl font-black text-podGold hover:text-white transition-colors tracking-tight">
                      official@podmark.in
                    </a>
                  </div>

                  <div className="pt-4 flex flex-col gap-4">
                     <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Or direct contact via WhatsApp:</p>
                     <a 
                      href="https://wa.me/918105575795" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:scale-105 transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] group"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.128l-.094.479-.373 1.9.41-.397.477-.462.53.303a5.72 5.72 0 0 0 2.812.743h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.767-5.766zm3.391 8.221c-.144.405-.837.774-1.168.823-.331.05-.654.062-1.076-.07-.423-.133-.948-.312-1.603-.594-.53-.228-.902-.455-1.274-.757-.372-.303-.687-.66-.889-.966-.201-.305-.28-.567-.308-.828-.028-.262.031-.504.148-.711.117-.207.31-.384.444-.509l.341-.318.159.262c.111.183.228.375.342.56.114.185.222.36.324.532.102.172.198.336.287.494l.111.197c.108.191.171.303.222.394l.051.091c.051.091.077.135.093.161s.025.042.025.042l-.004-.008c.026.046.044.077.054.103.01.026.014.045.014.053-.01.063-.037.132-.082.204-.045.072-.112.153-.2.242-.088.089-.196.185-.325.285l-.129.1c-.131.101-.274.21-.429.324l-.155.114-.155.114c-.053.039-.104.075-.154.108l-.04.027.026.044c.052.088.115.19.189.303.074.113.16.239.259.375.099.136.211.285.337.444.126.159.267.329.424.509.157.18.33.371.52.571s.397.408.621.623.466.438.727.669l.261.231.261.231c.083.073.163.144.24.212l.142.126.153.136.126-.109.126-.109c.125-.109.253-.221.385-.337l.132-.116.132-.116c.148-.13.297-.26.446-.39l.149-.13.149-.13c.178-.156.335-.294.471-.413.136-.119.248-.217.337-.295l.089-.078c.111-.097.167-.146.167-.146l.044-.038.031.049c.046.073.094.148.143.225.049.077.1.157.151.24s.104.168.156.257l.052.089c.112.19.223.382.333.575.11.193.218.388.324.585.106.197.21.396.311.597l.101.201c.085.17.152.316.2.438s.079.213.093.272c.014.059.014.133.001.222s-.037.192-.07.308c-.033.116-.076.246-.128.388-.052.142-.112.298-.18.468z" />
                        <path d="M12.036 1c-6.075 0-11.018 4.943-11.018 11.018 0 1.944.507 3.846 1.471 5.513l-1.565 5.717 5.852-1.535c1.602.873 3.41 1.334 5.26 1.335h.001c6.075 0 11.018-4.943 11.018-11.018s-4.943-11.018-11.018-11.018zM12.036 21.135c-1.666 0-3.299-.448-4.723-1.294l-.339-.202-3.51.92.936-3.421-.221-.352c-.929-1.481-1.42-3.195-1.42-4.953 0-5.074 4.128-9.202 9.202-9.202 5.074 0 9.202 4.128 9.202 9.202s-4.128 9.202-9.202 9.202z" />
                      </svg>
                      Chat with Concierge
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-podPurple/5 rounded-full blur-[80px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
