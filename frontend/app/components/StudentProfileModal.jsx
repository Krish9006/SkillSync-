"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, GraduationCap, Github, Linkedin, ExternalLink, Briefcase, UserPlus } from "lucide-react";

export default function StudentProfileModal({ open, onClose, student, onConnect }) {
    if (!student) return null;

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-2xl bg-[#0f1424] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto overflow-hidden relative max-h-[90vh] flex flex-col">
                            {/* Decorative Glows */}
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-accent/10 to-transparent pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-sm"
                            >
                                <X size={20} />
                            </button>

                            <div className="overflow-y-auto custom-scrollbar flex-1">
                                {/* Header Profile */}
                                <div className="p-8 pb-0 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-5xl shadow-2xl border border-white/10 shrink-0 overflow-hidden">
                                        {student.image && (student.image.startsWith('http') || student.image.startsWith('/')) ? (
                                            <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span>{student.image || "👨‍💻"}</span>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {student.badges && student.badges.map((badge) => (
                                                <span key={badge} className="px-2 py-0.5 rounded-md bg-yellow-500/10 text-yellow-300 border border-yellow-500/20 text-[10px] font-bold uppercase tracking-wide">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-1">{student.name}</h2>
                                        <p className="text-brand-accent text-lg font-medium mb-3">{student.role || "Student"}</p>
                                        <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                                            <div className="flex items-center gap-1.5">
                                                <GraduationCap size={14} />
                                                {student.college || "No College Info"} • {student.year || "N/A"}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-emerald-400">
                                                <Briefcase size={14} />
                                                Looking for team
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 space-y-8">
                                    {/* Bio */}
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">About</h3>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            {student.bio || "No bio added yet."}
                                        </p>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Top Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {student.skills && student.skills.length > 0 ? (
                                                student.skills.map((skill) => (
                                                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 text-white text-sm font-medium border border-white/5">
                                                        {skill}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-slate-500 italic">No skills listed</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Links (Contact Hidden) */}
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Socials</h3>
                                        <div className="flex gap-3">
                                            <a href={`https://${student.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all">
                                                <Github size={18} /> GitHub
                                            </a>
                                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all">
                                                <Linkedin size={18} /> LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Sticky Footer Action */}
                                <div className="p-6 border-t border-white/5 bg-[#0f1424]/95 backdrop-blur sticky bottom-0 z-20">
                                    <button
                                        onClick={() => onConnect(student)}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold shadow-lg shadow-brand-primary/25 hover:scale-[1.02] hover:shadow-brand-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <UserPlus size={18} /> Connect with {student.name.split(" ")[0]}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
