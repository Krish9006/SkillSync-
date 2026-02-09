"use client";
import { motion } from "framer-motion";
import { CheckCircle, Users, Zap, Shield } from "lucide-react";
import OSWindow from "./OSWindow";

const features = [
    {
        title: "Find Your Team",
        desc: "Match with other students who have the skills you need.",
        icon: Users,
        color: "text-signal-blue"
    },
    {
        title: "Get Mentorship",
        desc: "Talk to senior engineers from top companies.",
        icon: Shield,
        color: "text-signal-purple"
    },
    {
        title: "Ship Projects",
        desc: "Build real apps, put them on your resume, get hired.",
        icon: Zap,
        color: "text-signal-green"
    }
];

export default function SolutionSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-signal-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container px-6 md:px-12 lg:px-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* 📝 Left: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/20 text-signal-green text-xs font-mono mb-6">
                            <CheckCircle size={12} />
                            THE SOLUTION
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                            Everything You Need to <span className="text-signal-blue">Succeed.</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Project Pals gives you the network and tools to stop learning alone and start building your career.
                        </p>

                        <div className="space-y-6">
                            {features.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className={`w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors ${feat.color}`}>
                                        <feat.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-signal-blue transition-colors">{feat.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 🖥️ Right: Visual */}
                    <div className="relative">
                        <OSWindow title="patch_notes.md" className="h-[500px] bg-os-surface/90">
                            <div className="p-8 font-mono text-sm">
                                <div className="text-slate-500 mb-6"># Release Notes v2.0.4</div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-signal-blue font-bold mb-2">## Core Updates</div>
                                        <ul className="space-y-2 text-slate-300 list-disc pl-4">
                                            <li>Optimized matching algorithm for <span className="text-white">high-velocity teams</span>.</li>
                                            <li>Added <span className="text-white">real-time collaboration</span> tools.</li>
                                            <li>Fixed bug where students felt <span className="line-through text-slate-600">lonely</span>.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="text-signal-purple font-bold mb-2">## New APIs</div>
                                        <div className="bg-black/50 p-4 rounded border border-white/5 text-xs">
                                            <span className="text-signal-purple">import</span> <span className="text-yellow-400">{`{ Mentor }`}</span> <span className="text-signal-purple">from</span> <span className="text-green-400">'@projectpals/core'</span>;
                                            <br /><br />
                                            <span className="text-signal-blue">const</span> <span className="text-white">career</span> = <span className="text-signal-blue">await</span> Mentor.<span className="text-yellow-400">accelerate</span>();
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-slate-500">Status:</span>
                                        <span className="text-signal-green font-bold">Deployed Successfully</span>
                                    </div>
                                </div>
                            </div>
                        </OSWindow>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -right-10 -bottom-10 w-64 h-64 bg-signal-blue/20 blur-[80px] rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    );
}
