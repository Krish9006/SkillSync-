"use client";

import SkeletonCard from "../components/SkeletonCard";

export default function Loading() {
    return (
        <section className="min-h-screen py-32 relative overflow-hidden bg-deep-space">
            <div className="container px-6 md:px-12 lg:px-20">
                {/* Hero Skeleton */}
                <div className="text-center mb-16 animate-pulse">
                    <div className="h-8 w-48 bg-white/5 rounded-full mx-auto mb-8" />
                    <div className="h-20 w-3/4 bg-white/5 rounded-2xl mx-auto mb-6" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-lg mx-auto mb-10" />

                    {/* View Toggle Skeleton */}
                    <div className="w-64 h-14 bg-white/5 rounded-2xl mx-auto mb-12" />

                    {/* Action Buttons Skeleton */}
                    <div className="flex justify-center gap-4">
                        <div className="w-40 h-14 bg-white/5 rounded-xl" />
                        <div className="w-32 h-14 bg-white/5 rounded-xl" />
                    </div>
                </div>

                {/* Controls Skeleton */}
                <div className="mb-12 space-y-4 animate-pulse">
                    <div className="glass-card p-4 rounded-2xl flex flex-col lg:flex-row gap-4 justify-between items-center">
                        <div className="w-full lg:w-96 h-12 bg-white/5 rounded-xl" />
                        <div className="flex gap-2 w-full lg:w-auto">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-20 h-10 bg-white/5 rounded-lg" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
