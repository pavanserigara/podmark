
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact } from './Contact';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "Requirement Mapping",
        desc: "We understand your business, goals, and technical needs",
    },
    {
        title: "Wireframe & Design",
        desc: "Visual blueprint and UX planning",
    },
    {
        title: "Development & Integration",
        desc: "Frontend, backend, and system-level logic",
    },
    {
        title: "Testing & QA",
        desc: "Cross-device checks, speed tests, and functional validation",
    },
    {
        title: "Launch & Support",
        desc: "Final deployment and post-launch assistance",
    }
];

const WHAT_WE_BUILD = [
    {
        title: "Website Development",
        desc: "Business websites designed for clarity, speed, and SEO. Built using modern stacks like WordPress, Webflow, or custom code — depending on your needs.",
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "E-commerce Solutions",
        desc: "From simple product catalogs to advanced checkout flows, we create user-friendly online stores with payment gateway integrations and backend dashboards.",
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        title: "Landing Pages & Funnels",
        desc: "High-converting, mobile-first pages tailored for lead gen and campaign traffic. Built to work with Google Ads, Meta Ads, and CRM tools.",
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        title: "Custom Web Applications",
        desc: "We build tailored tools, dashboards, and internal systems that solve business-specific problems with clean UI and scalable backend logic.",
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        title: "Database & CRM Integrations",
        desc: "We create and integrate databases, APIs, and CRMs to help you track, manage, and grow your customer base efficiently.",
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        )
    }
]

export const Development: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);

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
                        start: "top center+=150",
                        end: "bottom center-=150",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
        });

    }, []);

    return (
        <main className="pt-32">
            {/* Development Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-podPurple/20 rounded-full blur-[150px] mix-blend-screen opacity-40 animate-pulse"></div>
                    {/* Add a subtle code-like grid or overlay here if possible later */}
                </div>

                <div ref={headerRef} className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-podPurple text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Code . Create . Scale
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        WEB <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-podPurple to-blue-500">
                            DEVELOPMENT
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Services for Scalable Digital Experiences
                    </p>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Maximize conversions and ROI with data-driven code. We build fast, secure, and marketing-ready websites.
                    </p>
                    <div className='flex flex-col md:flex-row gap-6 justify-center'>
                        <a href="#contact" className="inline-block px-10 py-4 purple-gradient text-white font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-lg shadow-podPurple/25">
                            Get a Free Dev Audit
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Brands Build with Us */}
            <section className="py-24 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Why Brands Build with Us</h2>
                        <div className="w-20 h-1 bg-podPurple mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Speed & Performance First",
                                desc: "Optimized code, mobile responsiveness, and fast load times come standard."
                            },
                            {
                                title: "Custom, Not Cookie-Cutter",
                                desc: "Every build is tailored — from workflows to backend logic."
                            },
                            {
                                title: "Marketing-Ready Builds",
                                desc: "Designed to integrate seamlessly with your campaigns, CRMs, and analytics."
                            },
                            {
                                title: "Built to Scale",
                                desc: "Solutions that grow with your business — not break when you grow."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0E0516] hover:border-podPurple/50 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="text-6xl font-black">0{i + 1}</span>
                                </div>
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-podPurple group-hover:bg-podPurple group-hover:text-white transition-all duration-300">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
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

            {/* What We Build */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">WHAT WE BUILD</h2>
                        <p className="text-white/50">Comprehensive Development Solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {WHAT_WE_BUILD.map((item, i) => (
                            <div key={i} className={`flex gap-6 p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all ${i === WHAT_WE_BUILD.length - 1 ? 'md:col-span-2' : ''}`}>
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0E0516] border border-white/10 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-2 text-white">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Our Development Process - Vertical Timeline */}
            <section className="py-24 bg-[#0E0516] relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR DEVELOPMENT PROCESS</h2>
                        <p className="text-white/50">From Concept to Code</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className={`process-step relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 md:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Side */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 text-left md:text-right">
                                    <div className={`p-8 rounded-2xl bg-black border border-white/10 hover:border-podPurple/50 transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} group`}>
                                        <div className={`hidden md:flex items-center gap-4 mb-4 ${i % 2 === 0 ? '' : 'justify-end'}`}>
                                            <span className="text-4xl font-black text-white/5 group-hover:text-podPurple/20 transition-colors">0{i + 1}</span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-podPurple transition-colors">{step.title}</h3>
                                        </div>
                                        <h3 className="md:hidden text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0E0516] border-2 border-podPurple flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                {/* Placeholder for opposite side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Works Placeholder */}
            <section className="py-24 relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR WORKS</h2>
                        <p className="text-white/50">Recent Deployments</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group overflow-hidden cursor-pointer">
                                <span className="text-white/20 font-black text-xl group-hover:scale-110 transition-transform">Project Preview {item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center bg-gradient-to-b from-transparent to-podPurple/10">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
                        TELL US WHAT YOU NEED,<br /> WE'LL SHOW YOU HOW TO BUILD IT.
                    </h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto">From idea to launch, we handle your digital development end-to-end.</p>
                    <a href="#contact" className="inline-block px-12 py-5 bg-white text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-2xl">
                        Request a Free Dev Consultation
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
};
