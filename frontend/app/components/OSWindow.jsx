"use client";
import { motion } from "framer-motion";
import { Minimize2, Maximize2, X } from "lucide-react";

export default function OSWindow({
    children,
    title = "System Window",
    className = "",
    controls = true
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative group rounded-xl overflow-hidden border border-os-border bg-os-surface/80 backdrop-blur-xl shadow-2xl shadow-black/50 ${className}`}
        >
            {/* 🖥️ Title Bar */}
            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center justify-between px-4 select-none">
                {/* Traffic Lights */}
                <div className="flex items-center gap-2">
                    {controls && (
                        <>
                            <div className="w-3 h-3 rounded-full bg-signal-red/80 hover:bg-signal-red transition-colors shadow-[0_0_10px_rgba(255,0,85,0.3)]" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                            <div className="w-3 h-3 rounded-full bg-signal-green/80 hover:bg-signal-green transition-colors shadow-[0_0_10px_rgba(0,255,148,0.3)]" />
                        </>
                    )}
                </div>

                {/* Title */}
                <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-blue animate-pulse" />
                    {title}
                </div>

                {/* Window Actions (Visual Only) */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-50 transition-opacity">
                    {/* Placeholder for right-side controls if needed */}
                </div>
            </div>

            {/* 📄 Content Area */}
            <div className="relative">
                {/* Scanline Overlay (Optional, subtle) */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-50 bg-[length:100%_2px,3px_100%] opacity-20" />

                {children}
            </div>
        </motion.div>
    );
}
