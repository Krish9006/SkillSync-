"use client";
import { motion } from "framer-motion";
import { Search, Users, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import OSWindow from "./OSWindow";
import CyberButton from "./CyberButton";
import TiltCard from "./TiltCard";

export default function TeamFinderPreview() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/20">
            <div className="container px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Find Your <span className="text-signal-purple">Squad.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Launch the TeamFinder application to discover hackathon teammates, startup co-founders, and project collaborators.
                    </p>
                </div>

                {/* Interactive Preview */}
                <div className="relative max-w-5xl mx-auto">
                    <TiltCard className="w-full">
                        <OSWindow title="TeamFinder.app" className="w-full aspect-[16/10] bg-os-surface shadow-2xl border-signal-purple/20">
                            {/* App UI Mockup */}
                            <div className="h-full flex flex-col">
                                {/* App Bar */}
                                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/2">
                                    <div className="flex items-center gap-4 w-1/3">
                                        <Search size={18} className="text-slate-500" />
                                        <div className="h-2 w-24 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 rounded bg-signal-purple/20 text-signal-purple text-xs font-bold border border-signal-purple/20">TEAMS</div>
                                        <div className="px-3 py-1 rounded bg-white/5 text-slate-400 text-xs font-bold border border-white/5">STUDENTS</div>
                                    </div>
                                    <div className="w-1/3 flex justify-end">
                                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-signal-purple to-signal-blue" />
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="flex-1 p-6 grid grid-cols-3 gap-6 overflow-hidden">
                                    {/* Sidebar */}
                                    <div className="col-span-1 border-r border-white/5 pr-6 space-y-4 hidden md:block">
                                        <div className="h-4 w-20 bg-white/10 rounded mb-6" />
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                                                <div className="h-4 w-4 bg-white/10 rounded" />
                                                <div className="h-3 w-24 bg-white/5 rounded" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Grid */}
                                    <div className="col-span-3 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-4 hover:border-signal-purple/50 transition-colors group">
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="h-10 w-10 rounded bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center">
                                                        <Code size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div className="px-2 py-0.5 rounded bg-signal-green/10 text-signal-green text-[10px] font-bold">MATCH 98%</div>
                                                </div>
                                                <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
                                                <div className="h-3 w-1/2 bg-white/5 rounded mb-4" />
                                                <div className="flex gap-2">
                                                    <div className="h-6 w-12 bg-white/5 rounded-full" />
                                                    <div className="h-6 w-12 bg-white/5 rounded-full" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Overlay CTA */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <Link href="/teamfinder">
                                    <CyberButton variant="primary" icon={ArrowUpRight}>
                                        Launch Application
                                    </CyberButton>
                                </Link>
                            </div>
                        </OSWindow>
                    </TiltCard>
                </div>

            </div>
        </section>
    );
}
