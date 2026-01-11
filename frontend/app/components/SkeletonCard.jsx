"use client";
import { motion } from "framer-motion";

export default function SkeletonCard({ type = "team" }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card p-6 rounded-2xl"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="skeleton h-6 w-3/4 mb-2" />
                    <div className="skeleton-text w-1/2" />
                </div>
                {type === "student" && (
                    <div className="skeleton w-16 h-16 rounded-full" />
                )}
            </div>

            {/* Description */}
            <div className="mb-4">
                <div className="skeleton-text w-full" />
                <div className="skeleton-text w-5/6" />
                <div className="skeleton-text w-4/6" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                <div className="skeleton h-6 w-16" />
                <div className="skeleton h-6 w-20" />
                <div className="skeleton h-6 w-14" />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-4">
                    <div className="skeleton-text w-16" />
                    <div className="skeleton-text w-16" />
                </div>
                <div className="skeleton h-10 w-24 rounded-lg" />
            </div>
        </motion.div>
    );
}
