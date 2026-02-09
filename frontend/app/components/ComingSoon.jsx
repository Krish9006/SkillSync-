"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/20 blur-[150px] rounded-full" />

            <div className="container px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-brand-primary/30"
                    >
                        <Rocket className="text-white w-10 h-10" />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tight"
                    >
                        Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Soon</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-slate-400 mb-10 leading-relaxed"
                    >
                        We are working hard to bring you this feature. <br className="hidden md:block" />
                        Stay tuned for something amazing!
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/">
                            <button className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:scale-105 transition-all flex items-center gap-2 mx-auto group">
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
