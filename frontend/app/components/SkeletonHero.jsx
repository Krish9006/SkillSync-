"use client";

export default function SkeletonHero() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 p-8 animate-pulse">
            {/* Badge/Tag */}
            <div className="w-48 h-8 bg-white/5 rounded-full" />

            {/* Title */}
            <div className="space-y-4 w-full max-w-4xl flex flex-col items-center">
                <div className="w-3/4 h-16 bg-white/5 rounded-2xl" />
                <div className="w-1/2 h-16 bg-white/5 rounded-2xl" />
            </div>

            {/* Description */}
            <div className="space-y-3 w-full max-w-2xl flex flex-col items-center pt-4">
                <div className="w-full h-4 bg-white/5 rounded-lg" />
                <div className="w-5/6 h-4 bg-white/5 rounded-lg" />
                <div className="w-4/6 h-4 bg-white/5 rounded-lg" />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-8">
                <div className="w-40 h-14 bg-white/5 rounded-xl" />
                <div className="w-40 h-14 bg-white/5 rounded-xl" />
            </div>
        </div>
    );
}
