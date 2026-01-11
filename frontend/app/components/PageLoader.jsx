"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (you can adjust this)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds loading

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-brand-dark flex items-center justify-center"
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Logo & Loader */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-2xl shadow-brand-primary/50 pulse-glow">
                                <Zap className="text-white w-12 h-12 fill-current" />
                            </div>
                        </motion.div>

                        {/* Brand Name */}
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-5xl font-heading font-bold text-gradient"
                        >
                            SkillSync
                        </motion.h1>

                        {/* Loading Bar */}
                        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent shimmer-slow"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-slate-400 text-sm font-medium"
                        >
                            Loading your experience...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
