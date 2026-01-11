"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react";

export default function SignUpPage() {
    const { register } = useAuth();
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const res = await register(formData);
        if (!res.success) {
            setError(res.error);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-os-bg z-0" />
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] z-0" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-os-surface border border-os-border/50 rounded-2xl p-8 relative z-10 shadow-2xl backdrop-blur-xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold font-heading mb-2">Join SkillSync</h1>
                    <p className="text-slate-400 text-sm">Create your account to start building.</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={18} />
                            <input
                                type="text"
                                className="w-full bg-os-bg/50 border border-os-border rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={18} />
                            <input
                                type="email"
                                className="w-full bg-os-bg/50 border border-os-border rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors" size={18} />
                            <input
                                type="password"
                                className="w-full bg-os-bg/50 border border-os-border rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-slate-600"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-primary/20 transition-all flex items-center justify-center gap-2 mt-6 disable:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <>Sign Up <ArrowRight size={18} /></>}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-400">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-brand-primary hover:text-brand-accent font-semibold transition-colors">
                        Sign In
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
