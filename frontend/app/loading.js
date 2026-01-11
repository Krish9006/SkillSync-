"use client";

import SkeletonHero from "./components/SkeletonHero";

export default function Loading() {
    return (
        <div className="min-h-screen bg-deep-space pt-24">
            <SkeletonHero />
        </div>
    );
}
