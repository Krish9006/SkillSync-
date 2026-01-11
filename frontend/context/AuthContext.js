"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Loading initial session
    const router = useRouter();

    const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

    // Check if user is logged in (check localStorage/Cookie)
    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    const checkUserLoggedIn = async () => {
        // Simple check: see if user data is in localStorage (for now)
        // Ideally, call an endpoint like /api/auth/me to verify token
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    };

    // Register Function
    const register = async (userData) => {
        try {
            const res = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await res.json();

            if (res.ok) {
                // Save user data
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data);
                router.push("/create-profile"); // Redirect to profile creation after signup
                return { success: true };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            console.error("Registration Error:", error);
            return { success: false, error: "Something went wrong" };
        }
    };

    // Login Function
    const login = async (email, password) => {
        try {
            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("user", JSON.stringify(data));
                setUser(data);
                router.push("/"); // Redirect to home
                return { success: true };
            } else {
                return { success: false, error: data.message };
            }
        } catch (error) {
            console.error("Login Error:", error);
            return { success: false, error: "Server error" };
        }
    };

    // Logout Function
    const logout = async () => {
        // Call API to clear cookie
        try {
            await fetch(`${API_URL}/logout`, { method: "POST" });
        } catch (error) {
            console.error("Logout API Error", error);
        }

        localStorage.removeItem("user");
        setUser(null);
        router.push("/sign-in");
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
