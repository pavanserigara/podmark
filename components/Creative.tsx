
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact } from './Contact';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "Brief & Discovery",
        desc: "Understand your brand, goals, and creative needs"
    },
    {
        title: "Concept & Creation",
        desc: "Multiple directions, iterations, and fine-tuning"
    },
    {
        title: "Delivery & Formats",
        desc: "Optimized files for print, web, and social"
    }
];

const CREATIVE_SERVICES = [
    {
        title: "Branding & Identity",
        desc: "Logo design, typography, color palettes, and complete brand guidelines that define how your brand looks and feels across every touchpoint.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-podGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        )
    },
    {
        title: "Graphic Design",
        desc: "Marketing collaterals, web banners, brochures, product catalogs, and packaging — designed to inform, engage, and persuade.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-podGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Video & Motion Graphics",
        desc: "Promo videos, explainer animations, reels, intros/outros, and motion content crafted for web, social, or ads.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-podGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Content Writing",
        desc: "Website copy, emailers, taglines, brochures, and more — crisp, clear, and SEO-ready content that delivers your message with impact.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-podGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        )
    },
    {
        title: "Social Media Content",
        desc: "Visuals built for engagement — reels, carousels, stories, campaigns, festive creatives, and promos, tailored for each platform.",
        icon: (
            <svg className="w-8 h-8 md:w-10 md:h-10 text-podGold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
        )
    }
]

export const Creative: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        const tl = gsap.timeline();

        tl.fromTo(headerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
        );

        // Process Animation
        const steps = gsap.utils.toArray('.process-card');
        steps.forEach((step: any, i) => {
            gsap.fromTo(step,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: step,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, []);

    return (
        <main className="pt-32">
            {/* Creative Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-podGold/20 rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse"></div>
                </div>

                <div ref={headerRef} className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-podGold text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Ignite Imagination
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        CREATIVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-podGold to-amber-500">
                            SERVICES
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                        For Effective Brand Communication
                    </p>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Design visuals, videos, and content that speak your brand's language and leave a lasting impression.
                    </p>
                    <div className='flex flex-col md:flex-row gap-6 justify-center'>
                        <a href="#contact" className="inline-block px-10 py-4 bg-podGold text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-lg shadow-podGold/25">
                            Know More
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Our Creative Works */}
            <section className="py-24 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Why Our Creative Works</h2>
                        <div className="w-20 h-1 bg-podGold mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Design-Led Thinking",
                                desc: "Every asset is built with purpose — not just aesthetics."
                            },
                            {
                                title: "Visual Storytelling",
                                desc: "We combine graphics, video, and motion to bring your brand to life."
                            },
                            {
                                title: "Copy That Converts",
                                desc: "Words that match your voice, engage your audience, and support visuals."
                            },
                            {
                                title: "Portfolio-Proven Execution",
                                desc: "Our work has helped brands launch, scale, and refresh their identity."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0E0516] hover:border-podGold/50 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="text-6xl font-black">0{i + 1}</span>
                                </div>
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-podGold group-hover:bg-podGold group-hover:text-black transition-all duration-300">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-black uppercase mb-3 text-white leading-tight">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed text-xs font-bold">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Creative Services Grid */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR CREATIVE SERVICES</h2>
                        <p className="text-white/50">Comprehensive Design Solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CREATIVE_SERVICES.map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 group">
                                <div className="shrink-0">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#0E0516] border border-white/10 flex items-center justify-center group-hover:border-podGold/30 transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-3 text-white group-hover:text-podGold transition-colors">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Creative Works (Portfolio) */}
            <section className="py-24 relative border-t border-white/5">
                <div className="absolute inset-0 grid-pattern opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR CREATIVE</h2>
                        <p className="text-white/50">Visual Excellence on Display</p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <div key={item} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer">
                                <img
                                    src={`https://images.unsplash.com/photo-${1550000000000 + item * 1000000}?auto=format&fit=crop&q=80&w=800`}
                                    alt={`Creative Work ${item}`}
                                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <p className="text-podGold text-xs font-black tracking-widest uppercase mb-1">Brand Identity</p>
                                        <h4 className="text-white font-bold">Project Name {item}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps - Horizontal Flow */}
            <section className="py-24 bg-[#0E0516] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR PROCESS</h2>
                        <p className="text-white/50">From Brief to Delivery</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {PROCESS_STEPS.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="process-card w-full md:w-1/3 p-8 rounded-3xl bg-black border border-white/10 text-center relative hover:border-podGold/30 transition-all group">
                                    <div className="text-6xl font-black text-white/5 mb-6 absolute top-4 right-6 group-hover:text-podGold/10">0{i + 1}</div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-podGold transition-colors">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                </div>

                                {i < PROCESS_STEPS.length - 1 && (
                                    <div className="hidden md:block text-podGold/20">
                                        <svg className="w-12 h-12 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                )}
                                {i < PROCESS_STEPS.length - 1 && (
                                    <div className="md:hidden text-podGold/20">
                                        <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center bg-gradient-to-t from-podGold/5 to-transparent">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
                        TELL US WHAT YOU NEED,<br /> WE'LL SHOW YOU HOW TO BUILD IT.
                    </h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto">From idea to launch, we handle your digital development end-to-end.</p>
                    <a href="#contact" className="inline-block px-12 py-5 bg-white text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-2xl">
                        Start Your Project
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
};
