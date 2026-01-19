
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact } from './Contact';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "Goal Alignment",
        desc: "Understand your business & customer"
    },
    {
        title: "Campaign Planning",
        desc: "Audience, budget, keywords, messaging"
    },
    {
        title: "Ad Creation & Setup",
        desc: "Copywriting, visuals, tracking pixels"
    },
    {
        title: "Daily Optimization",
        desc: "Bid adjustments, keyword tuning, A/B tests"
    },
    {
        title: "Monthly Reporting & Strategy",
        desc: "Understand your business & customer"
    }
];

const PPC_SERVICES_INCLUDED = [
    {
        title: "PPC Audit",
        features: [
            "Dedicated account manager",
            "Data-backed recommendations for PPC strategy",
            "Performance audit of your ad campaigns"
        ]
    },
    {
        title: "Keyword Research",
        features: [
            "Advanced keyword research and selection",
            "Continuous keyword optimizations",
            "Dynamic keyword insertion into ads"
        ]
    },
    {
        title: "Ad Creatives",
        features: [
            "Creative ad design to capture attention",
            "Compelling copywriting that resonates",
            "Conversion-focused landing page creation"
        ]
    },
    {
        title: "Conversion Tracking",
        features: [
            "Comprehensive tracking of ad conversions",
            "Insights-driven approach to understand efficacy",
            "Continuous optimization to align with business goals"
        ]
    },
    {
        title: "Bid Management",
        features: [
            "Proactive bid monitoring and adjustment",
            "Focus on maximizing ROI on ad spend",
            "Cost-effective strategies to enhance results"
        ]
    },
    {
        title: "Landing Page Optimization",
        features: [
            "Rigorous testing and refinement of landing pages",
            "Focus on creating pages that engage and convert",
            "Tailored landing pages that speak to your audience"
        ]
    }
];

const BUSINESS_BENEFITS = [
    {
        title: "Reach Target Audience",
        desc: [
            "Target specific demographics",
            "Reach active searchers",
            "Maximize ad spend"
        ],
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Drive Traffic & Leads",
        desc: [
            "Generate qualified leads",
            "Increase website traffic",
            "Boost brand awareness"
        ],
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        title: "Control Your Budget",
        desc: [
            "Set specific budgets",
            "Optimize for ROI",
            "Track campaign performance"
        ],
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Boost Brand Visibility",
        desc: [
            "Increase search visibility",
            "Compete with top brands",
            "Stand out in the market"
        ],
        icon: (
            <svg className="w-10 h-10 text-podPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22.46 12.016A18.89 18.89 0 0112 21.996 18.892 18.892 0 011.54 12.016 18.892 18.892 0 0112 2.035a18.892 18.892 0 0110.46 9.981z" />
            </svg>
        )
    }
]

export const PPCAdvertising: React.FC = () => {
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
            // Basic fade in for process
            gsap.fromTo(step,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: step,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

    }, []);

    return (
        <main className="pt-32">
            {/* PPC Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-podPurple/20 rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse"></div>
                </div>

                <div ref={headerRef} className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-podPurple text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Qualified Traffic
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        PPC <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-podPurple to-fuchsia-400">
                            ADVERTISING
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                        That Drives Qualified Traffic
                    </p>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Maximize conversions and ROI with data-driven Google, Meta & LinkedIn ads.
                    </p>
                    <div className='flex flex-col md:flex-row gap-6 justify-center'>
                        <a href="#contact" className="inline-block px-10 py-4 purple-gradient text-white font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-lg shadow-podPurple/25">
                            Get a Free PPC Audit
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Brands Choose Us */}
            <section className="py-24 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Why Brands Choose Us</h2>
                        <div className="w-20 h-1 bg-podPurple mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Google Ads Partner Agency",
                                desc: "Direct access to support, early betas & expertise."
                            },
                            {
                                title: "Proven Results Across 20+ Clients",
                                desc: "Local & global campaigns driving real leads & sales."
                            },
                            {
                                title: "Conversion-First Approach",
                                desc: "We don't just bring traffic-we bring business outcomes."
                            },
                            {
                                title: "Full Funnel Management",
                                desc: "Ad copy, conversion tracking, CRM integration."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-2xl bg-[#0E0516] hover:border-podPurple/50 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="text-6xl font-black">0{i + 1}</span>
                                </div>
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-podPurple group-hover:bg-podPurple group-hover:text-white transition-all duration-300">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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

            {/* Platforms We Manage (Image Grid Style) */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">PLATFORMS WE MANAGE</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {['Google Ads', 'Meta Ads', 'LinkedIn Ads'].map((platform, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-podPurple/50 transition-all group">
                                <h3 className="text-2xl font-black mb-2 text-white">{platform}</h3>
                                <p className="text-sm font-bold text-podPurple mb-4">Search, Display, Performance Max, Youtube, Shopping</p>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 italic text-white/70 text-sm">
                                    "Our leads doubled in 3 months with the same budget. They know what they're doing."
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process - Step Cards */}
            <section className="py-24 bg-[#0E0516] relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR PPC PROCESS</h2>
                        <p className="text-white/50">Driven by Data</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="process-step w-full md:w-[calc(33.33%-24px)] p-8 rounded-2xl bg-black border border-white/10 transition-all hover:bg-white/[0.03]">
                                <div className="text-5xl font-black text-podPurple/20 mb-4">0{i + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Benefits Grid */}
            <section className="py-24 relative bg-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">HOW PPC HELPS YOU</h2>
                        <p className="text-white/50">Tangible Business Impact</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BUSINESS_BENEFITS.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:scale-105">
                                <div className="w-16 h-16 rounded-full bg-podPurple/10 flex items-center justify-center text-podPurple mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4 text-white uppercase">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.desc.map((line, idx) => (
                                        <li key={idx} className="text-white/60 text-sm font-medium">{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What is Included (Two Column Layout) */}
            <section className="py-24 bg-[#0E0516]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="text-4xl font-black tracking-tight mb-6 sticky top-32">
                                WHAT IS INCLUDED IN<br />
                                <span className="text-podPurple">OUR PPC MANAGEMENT?</span>
                            </h2>
                        </div>
                        <div className="md:w-2/3 grid gap-8">
                            {PPC_SERVICES_INCLUDED.map((service, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-black border border-white/10 hover:border-podPurple/30 transition-all">
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-3 text-white/70 text-sm">
                                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-podPurple shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center bg-gradient-to-br from-podPurple/10 via-black to-black">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
                        REDEFINE YOUR <br /> ONLINE PRESENCE
                    </h2>
                    <p className="text-white/60 mb-10 max-w-xl mx-auto">Experience next-level digital marketing and transformation services to unleash your online potential.</p>
                    <a href="#contact" className="inline-block px-12 py-5 bg-white text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-2xl">
                        Book a Call
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
};
