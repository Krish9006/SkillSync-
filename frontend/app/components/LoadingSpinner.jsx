"use client";
import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "md", color = "primary", text, inline = false }) {
    const sizeClasses = {
        sm: "w-4 h-4 border-2",
        md: "w-8 h-8 border-3",
        lg: "w-12 h-12 border-4",
        xl: "w-16 h-16 border-4",
    };

    const colorClasses = {
        primary: "border-white/10 border-t-brand-primary",
        secondary: "border-white/10 border-t-brand-secondary",
        white: "border-white/20 border-t-white",
        accent: "border-white/10 border-t-brand-accent",
    };

    const Spinner = (
        <motion.div
            className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );

    if (inline) {
        return (
            <div className="inline-flex items-center gap-2">
                {Spinner}
                {text && <span className="text-sm text-slate-400">{text}</span>}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            {Spinner}
            {text && <p className="text-sm text-slate-400 font-medium">{text}</p>}
        </div>
    );
}
