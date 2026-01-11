"use client";

export default function Loading() {
    return (
        <section className="min-h-screen py-32 relative overflow-hidden bg-deep-space">
            <div className="container px-6 md:px-12 lg:px-20">
                {/* Hero Skeleton */}
                <div className="text-center max-w-4xl mx-auto mb-24 animate-pulse">
                    <div className="h-16 w-3/4 bg-white/5 rounded-2xl mx-auto mb-8" />
                    <div className="h-4 w-2/3 bg-white/5 rounded-lg mx-auto mb-3" />
                    <div className="h-4 w-1/2 bg-white/5 rounded-lg mx-auto" />
                </div>

                {/* Features Grid Skeleton */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-8 rounded-2xl animate-pulse">
                            <div className="w-12 h-12 rounded-lg bg-white/5 mb-6" />
                            <div className="h-8 w-1/2 bg-white/5 rounded-lg mb-3" />
                            <div className="h-4 w-full bg-white/5 rounded-lg mb-2" />
                            <div className="h-4 w-5/6 bg-white/5 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
