
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact } from './Contact';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "Requirement Mapping",
        desc: "We understand your business, goals, and technical needs",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        )
    },
    {
        title: "Wireframe & Design",
        desc: "Visual blueprint and UX planning",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        )
    },
    {
        title: "Development & Integration",
        desc: "Frontend, backend, and system-level logic",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        title: "Testing & QA",
        desc: "Cross-device checks, speed tests, and functional validation",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

export const StrategyConsulting: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const processRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        const tl = gsap.timeline();

        tl.fromTo(headerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
        );

        // Process Timeline Animation
        const steps = gsap.utils.toArray('.process-step');
        steps.forEach((step: any, i) => {
            gsap.fromTo(step,
                { opacity: 0.3, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: step,
                        start: "top center+=100",
                        end: "bottom center-=100",
                        toggleActions: "play reverse play reverse",
                        // scrub: true
                    }
                }
            );
        });

    }, []);

    return (
        <main className="pt-32">
            {/* Strategy Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-podCyan/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-podPurple/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse delay-1000"></div>
                </div>

                <div ref={headerRef} className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-podCyan text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Growth Engineers
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        STRATEGY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-podCyan to-podPurple">
                            & CONSULTING
                        </span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        We don't just guess; we architect roadmap to dominance. Data-driven insights meeting creative brilliance to scale your brand.
                    </p>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-podPurple mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Audit-Backed Insights",
                                desc: "We don't guess; we audit your existing presence, competitors, and customer behavior."
                            },
                            {
                                title: "Expert Thinking",
                                desc: "Led by marketers who've scaled real businesses, not just executed tasks."
                            },
                            {
                                title: "Clear Action Plans",
                                desc: "Walk away with prioritized roadmaps and step-by-step execution guidance."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-center group">
                                <div className="mb-6 inline-flex p-4 rounded-full bg-podPurple/10 text-podPurple group-hover:bg-podPurple group-hover:text-white transition-all duration-300">
                                    {i === 0 && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    )}
                                    {i === 1 && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )}
                                    {i === 2 && (
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process - Vertical Timeline */}
            <section className="py-24 bg-podDark relative overflow-hidden" ref={processRef}>
                <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR PROCESS</h2>
                        <p className="text-white/50">From Concept to Reality</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className={`process-step relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 md:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 text-left md:text-right">
                                    <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-podCyan/30 transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className={`hidden md:flex items-center gap-4 mb-4 ${i % 2 === 0 ? '' : 'justify-end'}`}>
                                            <span className="text-4xl font-black text-white/10">0{i + 1}</span>
                                            <h3 className="text-xl font-bold text-podCyan">{step.title}</h3>
                                        </div>
                                        <h3 className="md:hidden text-xl font-bold text-podCyan mb-2">{step.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0E0516] border-2 border-podCyan flex items-center justify-center z-10 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                {/* Placeholder for opposite side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 max-w-3xl mx-auto">
                        READY TO OUTSMART <br /> THE COMPETITION?
                    </h2>
                    <a href="#contact" className="inline-block px-12 py-4 bg-white text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform">
                        Book A Consultation
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
};
