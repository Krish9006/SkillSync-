"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Plus, Rocket, Sparkles, Loader2 } from "lucide-react";

export default function CreateTeamModal({ open, onClose }) {
    const [step, setStep] = useState("form"); // 'form' | 'success'
    const [tags, setTags] = useState([]);
    const [currentTag, setCurrentTag] = useState("");
    const [loading, setLoading] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        title: "",
        category: "Hackathon",
        pitch: "",
        description: "" // Fixed typo
    });

    const handleAddTag = (e) => {
        if (e.key === "Enter" && currentTag.trim()) {
            e.preventDefault();
            if (!tags.includes(currentTag.trim())) {
                setTags([...tags, currentTag.trim()]);
            }
            setCurrentTag("");
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const token = storedUser?.token;

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    tags
                })
            });

            const data = await res.json();

            if (res.ok) {
                setStep("success");
            } else {
                alert(data.message || "Failed to create team");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setStep("form");
        setTags([]);
        setFormData({ title: "", category: "Hackathon", pitch: "", description: "" });
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
                        <div className="w-full max-w-2xl bg-[#0f1424] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto overflow-hidden relative">
                            {/* Decorative Glows */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={reset}
                                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors z-10 bg-white/5 hover:bg-white/10 p-2 rounded-full"
                            >
                                <X size={20} />
                            </button>

                            {step === "form" ? (
                                <div className="p-8 relative z-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-4">
                                            <Rocket size={12} /> Launchpad
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">
                                            Create a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">New Team</span>
                                        </h2>
                                        <p className="text-slate-400">
                                            Find the perfect teammates for your next big idea.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                    Team Name <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                                    placeholder="e.g. Quantum Solvers"
                                                    value={formData.title}
                                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                    Category <span className="text-red-400">*</span>
                                                </label>
                                                <select
                                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                                    value={formData.category}
                                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                >
                                                    <option value="Hackathon">Hackathon</option>
                                                    <option value="Startup">Startup</option>
                                                    <option value="Project">Project</option>
                                                    <option value="Research">Research</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                One-Line Pitch <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                                placeholder="e.g. Building an AI-powered crop disease detector."
                                                value={formData.pitch}
                                                onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                Tech Stack / Tags (Press Enter)
                                            </label>
                                            <div className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 focus-within:border-brand-accent focus-within:ring-1 focus-within:ring-brand-accent transition-all flex flex-wrap gap-2">
                                                {tags.map(tag => (
                                                    <span key={tag} className="bg-brand-accent/10 text-brand-accent px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                                                        {tag}
                                                        <button type="button" onClick={() => removeTag(tag)} className="hover:text-white"><X size={12} /></button>
                                                    </span>
                                                ))}
                                                <input
                                                    type="text"
                                                    value={currentTag}
                                                    onChange={(e) => setCurrentTag(e.target.value)}
                                                    onKeyDown={handleAddTag}
                                                    className="bg-transparent border-none outline-none text-white placeholder-slate-600 flex-grow min-w-[120px]"
                                                    placeholder="Add tags..."
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-300 mb-2">
                                                Detailed Description
                                            </label>
                                            <textarea
                                                rows={4}
                                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                                                placeholder="Describe your project, goals, and what you're looking for in teammates..."
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-brand-primary text-white font-bold shadow-lg shadow-brand-accent/25 hover:scale-[1.02] hover:shadow-brand-accent/40 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                                        >
                                            {loading ? <Loader2 className="animate-spin" /> : <><Plus size={18} /> Create Team</>}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="p-12 flex flex-col items-center text-center relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        type="spring"
                                        className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 shadow-xl shadow-brand-accent/10"
                                    >
                                        <Sparkles size={48} />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Team Created!</h3>
                                    <p className="text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
                                        Your team is now live on the Project Buddies network. Get ready for applications!
                                    </p>
                                    <button
                                        onClick={reset}
                                        className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white font-semibold transition-all w-full"
                                    >
                                        Back to Feed
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
