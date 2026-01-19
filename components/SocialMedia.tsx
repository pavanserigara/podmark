
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact } from './Contact';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "Social Audit & Goal Alignment",
        desc: "We review your current presence, understand your audience, and align on objectives."
    },
    {
        title: "Platform Planning & Strategy",
        desc: "We craft channel-specific calendars with content buckets, creative themes, and posting cadence."
    },
    {
        title: "Content Production",
        desc: "Designs, captions, reels, hashtags, stories—we handle the end-to-end content pipeline."
    },
    {
        title: "Publishing & Community Management",
        desc: "We schedule, post, and engage with your followers to keep the momentum alive."
    },
    {
        title: "Analytics & Optimization",
        desc: "Monthly performance reviews with insights on reach, engagement, follower growth, and what's next."
    }
];

const WHAT_WE_OFFER = [
    {
        title: "Content Calendar & Strategy",
        desc: "Monthly plans tailored to brand goals, seasonal trends, and audience behavior.",
        icon: (
            <svg className="w-10 h-10 text-podCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Visual & Video Content Creation",
        desc: "Branded graphics, reels, and story formats that stand out in crowded feeds.",
        icon: (
            <svg className="w-10 h-10 text-podCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Caption Writing & Hashtag Research",
        desc: "Engaging copy with strategic hashtags to boost visibility and interaction.",
        icon: (
            <svg className="w-10 h-10 text-podCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
        )
    },
    {
        title: "Page Management",
        desc: "End-to-end management of posting schedules, comments, DMs, and performance.",
        icon: (
            <svg className="w-10 h-10 text-podCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    },
    {
        title: "Campaigns & Paid Boosting",
        desc: "Boosting top-performing posts, running platform ads, and tracking ROI.",
        icon: (
            <svg className="w-10 h-10 text-podCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        title: "Reporting & Insights",
        desc: "Clear monthly reports with data that matters—reach, engagement, followers, and growth.",
        icon: (
            <svg className="w-10 h-10 text-podCyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
]

export const SocialMedia: React.FC = () => {
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
            // For social media steps, let's use a stagger effect
            gsap.fromTo(step,
                { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
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
            {/* Social Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-podCyan/20 rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse"></div>
                </div>

                <div ref={headerRef} className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-podCyan text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Social Growth
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        SOCIAL MEDIA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-podCyan to-blue-500">
                            MARKETING
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                        That Builds Engagement & Trust
                    </p>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Grow your brand, engage your audience, and drive action across top platforms.
                    </p>
                    <div className='flex flex-col md:flex-row gap-6 justify-center'>
                        <a href="#contact" className="inline-block px-10 py-4 bg-podCyan text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-lg shadow-podCyan/25">
                            Get My Social Strategy
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-podCyan mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Platform-Specific Strategy",
                                desc: "What works on Instagram won't work on Linkedin-we tailor plans for each audience and algorithm."
                            },
                            {
                                title: "Content That Connects",
                                desc: "Visuals, captions, reels, and carousels crafted to drive shares, saves, and conversions."
                            },
                            {
                                title: "Performance-Driven Approach",
                                desc: "Every post is tracked. We optimize based on insights-not assumptions."
                            },
                            {
                                title: "Collaborative Execution",
                                desc: "We sync with your internal team for approvals, brand voice, and campaign timing."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0E0516] hover:border-podCyan/50 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="text-6xl font-black">0{i + 1}</span>
                                </div>
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-podCyan group-hover:bg-podCyan group-hover:text-black transition-all duration-300">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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


            {/* Our Process - Vertical Timeline */}
            <section className="py-24 bg-[#0E0516] relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR PROCESS</h2>
                        <p className="text-white/50">Strategy to Engagement</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto space-y-8">
                        {/* Connecting Line (Dotted) */}
                        <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px border-l-2 border-dashed border-white/10 md:-translate-x-1/2 h-full z-0"></div>

                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className={`process-step relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 text-left md:text-right w-full">
                                    <div className={`p-8 rounded-2xl bg-black border border-white/10 hover:border-podCyan/30 transition-all z-10 relative ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold text-podCyan mb-2">{step.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Center Marker */}
                                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0E0516] border-4 border-black flex items-center justify-center z-10 shadow-lg shadow-black">
                                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-xs font-bold text-podCyan border border-podCyan/30">
                                        {i + 1}
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Offer Grid */}
            <section className="py-24 relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4">WHAT WE OFFER</h2>
                        <p className="text-white/50">Full-Stack Social Solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHAT_WE_OFFER.map((item, i) => (
                            <div key={i} className="flex gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 group">
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0E0516] border border-white/10 flex items-center justify-center text-podCyan group-hover:bg-podCyan/10 transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-2 text-white group-hover:text-podCyan transition-colors">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms We Work With (Simple Logos) */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-sm font-black tracking-[0.2em] uppercase text-white/40 mb-10">Platforms We Dominate</h3>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Replace with actual SVGs or Images */}
                        {['Instagram', 'LinkedIn', 'Facebook', 'Twitter', 'YouTube', 'TikTok'].map((platform) => (
                            <span key={platform} className="text-xl font-bold text-white hover:text-podCyan transition-colors">{platform}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
                        READY TO GROW YOUR <br /> SOCIAL BRAND?
                    </h2>
                    <a href="#contact" className="inline-block px-12 py-5 purple-gradient text-white font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-2xl">
                        Start Your Campaign
                    </a>
                </div>
            </section>

            <Contact />
        </main>
    );
};
