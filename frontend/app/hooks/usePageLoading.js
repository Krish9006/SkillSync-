"use client";
import { useEffect, useState } from "react";

/**
 * Custom hook to manage page-level loading states
 * @param {number} delay - Minimum loading time in milliseconds (default: 800ms)
 * @returns {Object} - { isLoading, setIsLoading }
 */
export function usePageLoading(delay = 800) {
    const [isLoading, setIsLoading] = useState(true);
    const [minTimeElapsed, setMinTimeElapsed] = useState(false);

    useEffect(() => {
        // Ensure minimum loading time to prevent flashing
        const timer = setTimeout(() => {
            setMinTimeElapsed(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        // Auto-hide loading when minimum time has elapsed
        if (minTimeElapsed && isLoading) {
            setIsLoading(false);
        }
    }, [minTimeElapsed, isLoading]);

    return { isLoading, setIsLoading };
}
