"use client";
import { motion } from "framer-motion";

export default function CyberButton({
    children,
    onClick,
    variant = "primary", // primary, secondary, danger
    className = "",
    icon: Icon
}) {
    const variants = {
        primary: "bg-signal-blue/10 border-signal-blue/50 text-signal-blue hover:bg-signal-blue hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
        secondary: "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white",
        danger: "bg-signal-red/10 border-signal-red/50 text-signal-red hover:bg-signal-red hover:text-white hover:shadow-[0_0_30px_rgba(255,0,85,0.4)]"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`
        relative group overflow-hidden px-6 py-3 rounded-lg border 
        font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300
        ${variants[variant]} ${className}
      `}
        >
            {/* Glitch Overlay */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />

            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon size={16} />}
                {children}
            </span>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
        </motion.button>
    );
}
