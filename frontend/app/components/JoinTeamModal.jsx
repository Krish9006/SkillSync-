"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send, Sparkles } from "lucide-react";
import LoadingSpinner from "./LoadingSpinner";
import { addRequest } from "../teamfinder/data";

export default function JoinTeamModal({ open, onClose, teamName, teamId }) {
    const [step, setStep] = useState("form"); // 'form' | 'success'
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ pitch: "", portfolio: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Save request to localStorage
        setTimeout(() => {
            addRequest({
                from: "You",
                to: teamName || "Team",
                type: "Join Request",
                message: formData.pitch,
                portfolio: formData.portfolio,
                teamId: teamId
            });

            setIsLoading(false);
            setStep("success");
        }, 1500);
    };

    const reset = () => {
        setStep("form");
        setFormData({ pitch: "", portfolio: "" });
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={reset}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-lg bg-[#0f1424] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto overflow-hidden relative">
                            {/* Decorative Glows */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" />
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-primary/20 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-accent/10 rounded-full blur-[80px] pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    reset();
                                }}
                                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors z-20 bg-white/5 hover:bg-white/10 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {step === "form" ? (
                                <div className="p-8 relative z-10">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
                                            <Sparkles size={12} /> Application
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">
                                            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">{teamName}</span>
                                        </h2>
                                        <p className="text-slate-400">
                                            Pitch yourself to the team lead. Make it count!
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                Why are you a great fit? <span className="text-red-400">*</span>
                                            </label>
                                            <textarea
                                                required
                                                value={formData.pitch}
                                                onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                                                rows={4}
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none text-sm leading-relaxed"
                                                placeholder="I've built 3 projects using React and I'm looking to learn..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                Portfolio / LinkedIn / GitHub <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="url"
                                                required
                                                value={formData.portfolio}
                                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                                                placeholder="https://github.com/yourusername"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className={`w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/25 hover:scale-[1.02] hover:shadow-brand-primary/40 transition-all duration-300 flex items-center justify-center gap-2 mt-4 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isLoading ? (
                                                <LoadingSpinner size="sm" color="white" inline text="Sending..." />
                                            ) : (
                                                <>
                                                    Send Request <Send size={18} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="p-12 flex flex-col items-center text-center relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        type="spring"
                                        className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-500/10"
                                    >
                                        <CheckCircle size={48} />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Request Sent!</h3>
                                    <p className="text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
                                        The team lead has been notified. Keep an eye on your inbox for a response.
                                    </p>
                                    <button
                                        onClick={reset}
                                        className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white font-semibold transition-all w-full"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
