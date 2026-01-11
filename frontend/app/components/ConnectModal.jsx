"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function ConnectModal({ open, onClose, studentName, studentId }) {
    const { user } = useAuth();
    const [step, setStep] = useState("form"); // 'form' | 'success'
    const [pitch, setPitch] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = user?.token || JSON.parse(localStorage.getItem('user'))?.token;
            const res = await fetch("http://localhost:5000/api/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    receiverId: studentId,
                    type: 'connect',
                    message: pitch
                })
            });

            const data = await res.json();

            if (res.ok) {
                setStep("success");
            } else {
                alert(data.message || "Failed to send request");
            }
        } catch (error) {
            console.error("Connection Error", error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setStep("form");
        setPitch("");
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
                        <div className="w-full max-w-md bg-[#0f1424] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto overflow-hidden relative">
                            {/* Close Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    reset();
                                }}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-20 bg-white/5 hover:bg-white/10 p-2 rounded-full"
                            >
                                <X size={18} />
                            </button>

                            {step === "form" ? (
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-1">Connect with {studentName}</h2>
                                    <p className="text-slate-400 text-sm mb-6">
                                        Send a personalized pitch to start the conversation.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                                Why do you want to collaborate?
                                            </label>
                                            <textarea
                                                required
                                                value={pitch}
                                                onChange={(e) => setPitch(e.target.value)}
                                                rows={5}
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none text-sm"
                                                placeholder="Hey, I saw your portfolio and I'm building a fintech app. I need a backend dev like you..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/25 hover:scale-[1.02] hover:shadow-brand-primary/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <>Send Request <Send size={16} /></>}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="p-8 flex flex-col items-center text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        type="spring"
                                        className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 mb-4"
                                    >
                                        <CheckCircle size={32} />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-2">Request Sent! 🚀</h3>
                                    <p className="text-slate-400 text-sm mb-6">
                                        Your pitch has been sent to {studentName}. You'll be notified when they accept.
                                    </p>
                                    <button
                                        onClick={reset}
                                        className="px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white font-semibold transition-all w-full text-sm"
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
