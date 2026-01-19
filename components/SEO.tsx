
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Contact } from './Contact';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        title: "SEO Audit & Benchmarking",
        desc: "We begin with a complete audit of your website—technical issues, on-page gaps, backlink profile, and keyword rankings. This helps us establish a baseline and uncover hidden growth opportunities."
    },
    {
        title: "Strategy Planning",
        desc: "Based on audit insights and your business goals, we create a custom SEO roadmap. This includes keyword targeting, content priorities, technical fixes, and link-building tactics."
    },
    {
        title: "On-Page Optimization",
        desc: "We optimize your titles, meta descriptions, headers, internal links, and site structure to align with search intent and improve user experience."
    },
    {
        title: "Content Development",
        desc: "Our team creates SEO-optimized content—from landing pages and blogs to pillar articles—that ranks well and drives relevant traffic."
    },
    {
        title: "Off-Page SEO & Link Building",
        desc: "We build high-quality, relevant backlinks through ethical outreach and citation strategies to strengthen your site’s authority."
    },
    {
        title: "Monthly Reporting",
        desc: "You get clear, jargon-free reports every month, showing keyword rankings, traffic growth, and actionable next steps. We adapt the strategy based on real data."
    }
];

const WHAT_WE_OFFER = [
    {
        title: "Technical SEO Audit & Fixes",
        desc: "We audit and fix site issues that hurt your crawlability and rankings — including Core Web Vitals, indexing errors, broken links, and schema markup.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        title: "Keyword Research & Mapping",
        desc: "Our research goes beyond volume — we find keywords that match your business goals and buyer journey, then map them across your site.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    },
    {
        title: "On-page Optimization",
        desc: "We optimize page titles, meta descriptions, header tags, internal linking, and content structure to match search intent and improve visibility.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        title: "SEO Content Creation",
        desc: "We write content that ranks and converts — blog posts, landing pages, FAQs, and service pages optimized for both search engines and readers.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        )
    },
    {
        title: "Local SEO & Google Business Profile",
        desc: "We optimize your Google Business Profile, local citations, and location pages to improve your presence in “near me” and local searches.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        title: "Link Building & Off-Page SEO",
        desc: "We acquire high-quality, relevant backlinks through white-hat outreach, improving domain authority and search trust.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        )
    },
    {
        title: "Reporting & Consultation",
        desc: "Get clear monthly reports with keyword growth, traffic metrics, and strategic insights — no fluff, just results.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    }
]

export const SEO: React.FC = () => {
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
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: step,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

    }, []);

    return (
        <main className="pt-32">
            {/* SEO Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] mix-blend-screen opacity-30 animate-pulse"></div>
                </div>

                <div ref={headerRef} className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
                        Organic Growth
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        SEO & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
                            ORGANIC GROWTH
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Services for Sustainable Results
                    </p>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Boost rankings, grow organic traffic, and generate leads with full-spectrum SEO strategies.
                    </p>
                    <div className='flex flex-col md:flex-row gap-6 justify-center'>
                        <a href="#contact" className="inline-block px-10 py-4 bg-emerald-500 text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-lg shadow-emerald-500/25">
                            Get a Free SEO Audit
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Full-Spectrum SEO",
                                desc: "On-page, off-page, technical, and local SEO — all under one roof."
                            },
                            {
                                title: "Technical Precision",
                                desc: "Site speed, indexing, structured data & Core Web Vitals optimization."
                            },
                            {
                                title: "Content That Ranks",
                                desc: "Blog posts, service pages, and landing content with proven frameworks."
                            },
                            {
                                title: "Ethical Link Building",
                                desc: "White-hat strategies that improve authority without shortcuts."
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-3xl bg-[#0E0516] hover:border-emerald-500/50 transition-all group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="text-6xl font-black">0{i + 1}</span>
                                </div>
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
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

            {/* Our Process - Step Cards */}
            <section className="py-24 bg-[#0E0516] relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black tracking-tight mb-4">OUR SEO PROCESS</h2>
                        <p className="text-white/50">Data-Driven & Transparent</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto space-y-8">
                        {/* Connecting Line (Dotted) */}
                        <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px border-l-2 border-dashed border-white/10 md:-translate-x-1/2 h-full z-0"></div>

                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className={`process-step relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-1/2 md:px-12 text-left md:text-right w-full">
                                    <div className={`p-8 rounded-2xl bg-black border border-white/10 hover:border-emerald-500/30 transition-all z-10 relative ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold text-emerald-400 mb-2">{step.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Center Marker */}
                                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0E0516] border-4 border-black flex items-center justify-center z-10 shadow-lg shadow-black">
                                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-xs font-bold text-emerald-400 border border-emerald-500/30">
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
                        <p className="text-white/50">Comprehensive SEO Solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHAT_WE_OFFER.map((item, i) => (
                            <div key={i} className={`flex gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-300 group ${i === WHAT_WE_OFFER.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0E0516] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-2 text-white group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audit CTA Box */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-r from-emerald-900/40 to-black border border-emerald-500/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 relative z-10">
                            BOOK A FREE <span className="text-emerald-400">SEO AUDIT</span>
                        </h2>
                        <p className="text-white/60 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                            Uncover quick wins and long-term opportunities for organic growth. No strings attached.
                        </p>
                        <a href="#contact" className="inline-block px-12 py-5 bg-white text-black font-black tracking-widest uppercase rounded-full hover:scale-105 transition-transform shadow-2xl relative z-10">
                            Get My Audit
                        </a>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
};
