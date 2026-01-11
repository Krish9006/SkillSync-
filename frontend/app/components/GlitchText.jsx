"use client";
import { motion } from "framer-motion";

export default function GlitchText({ text, className = "" }) {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>

            {/* Glitch Layer 1 (Red) */}
            <span
                className="absolute top-0 left-0 -z-10 text-signal-red opacity-0 group-hover:opacity-70 animate-pulse"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-2px, 2px)" }}
            >
                {text}
            </span>

            {/* Glitch Layer 2 (Blue) */}
            <span
                className="absolute top-0 left-0 -z-10 text-signal-blue opacity-0 group-hover:opacity-70 animate-pulse delay-75"
                style={{ clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)", transform: "translate(2px, -2px)" }}
            >
                {text}
            </span>
        </div>
    );
}
