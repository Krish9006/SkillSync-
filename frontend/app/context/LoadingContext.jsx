"use client";
import { createContext, useContext, useState, useCallback } from "react";

const LoadingContext = createContext(undefined);

export function LoadingProvider({ children }) {
    const [loadingStates, setLoadingStates] = useState({});

    const setLoading = useCallback((key, isLoading) => {
        setLoadingStates((prev) => ({
            ...prev,
            [key]: isLoading,
        }));
    }, []);

    const isLoading = useCallback((key) => {
        return loadingStates[key] || false;
    }, [loadingStates]);

    const isAnyLoading = useCallback(() => {
        return Object.values(loadingStates).some((state) => state === true);
    }, [loadingStates]);

    return (
        <LoadingContext.Provider value={{ setLoading, isLoading, isAnyLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
}
