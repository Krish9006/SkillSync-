"use client";
import { motion } from "framer-motion";
import { User, MapPin, Briefcase, ExternalLink, MessageCircle, Eye, UserPlus, GraduationCap } from "lucide-react";
import TiltCard from "./TiltCard";

export default function StudentCard({ student, onConnect, onViewProfile }) {
    return (
        <TiltCard className="h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-brand-secondary/20 hover:border-brand-secondary/50 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/0 via-brand-secondary/0 to-brand-secondary/0 group-hover:from-brand-secondary/10 group-hover:via-transparent group-hover:to-brand-primary/10 transition-all duration-700" />

                {/* Shimmer Effect */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                            <div className="relative w-20 h-20 rounded-full bg-slate-800 border-2 border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                {/* Safe Avatar Handling */}
                                {student.image && (student.image.startsWith('http') || student.image.startsWith('/')) ? (
                                    <img src={student.image} alt={student.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 text-slate-400">
                                        <span className="text-3xl">{student.image || <User size={32} />}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Looking For Tag */}
                        <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-secondary/15 to-brand-accent/15 border border-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-md">
                            Looking for Team
                        </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-secondary group-hover:to-brand-primary transition-all duration-300">
                        {student.name}
                    </h3>
                    <p className="text-brand-primary font-bold text-sm mb-6 flex items-center gap-2">
                        <Briefcase size={14} /> {student.role || "Student"}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {student.skills && student.skills.length > 0 ? (
                            <>
                                {student.skills.slice(0, 3).map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 group-hover:border-brand-secondary/30 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                                {student.skills.length > 3 && (
                                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-400">
                                        +{student.skills.length - 3}
                                    </span>
                                )}
                            </>
                        ) : (
                            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-500 italic">
                                No skills listed
                            </span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                        <button
                            onClick={() => onConnect(student)}
                            className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-secondary to-brand-primary text-white font-bold py-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-brand-secondary/25"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Connect <MessageCircle size={18} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        </button>
                        <button
                            onClick={() => onViewProfile(student)}
                            className="relative rounded-xl bg-white/5 text-white font-bold py-3 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 overflow-hidden group/btn"
                        >
                            <span className="relative z-10">Profile</span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </TiltCard>
    );
}
