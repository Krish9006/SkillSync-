"use client";

export default function Loading() {
    return (
        <section className="min-h-screen py-32 relative overflow-hidden bg-deep-space">
            <div className="container px-6 md:px-12 lg:px-20">
                {/* Header Skeleton */}
                <div className="text-center mb-20 animate-pulse">
                    <div className="h-8 w-48 bg-white/5 rounded-full mx-auto mb-6" />
                    <div className="h-16 w-2/3 bg-white/5 rounded-2xl mx-auto mb-6" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-lg mx-auto" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-16 h-16 rounded-full bg-white/5" />
                                <div className="w-8 h-8 rounded-full bg-white/5" />
                            </div>
                            <div className="h-6 w-3/4 bg-white/5 rounded-lg mb-2" />
                            <div className="h-4 w-1/2 bg-white/5 rounded-lg mb-4" />
                            <div className="h-4 w-full bg-white/5 rounded-lg mb-2" />
                            <div className="h-4 w-5/6 bg-white/5 rounded-lg mb-6" />
                            <div className="flex gap-2">
                                <div className="h-6 w-16 bg-white/5 rounded-md" />
                                <div className="h-6 w-20 bg-white/5 rounded-md" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
