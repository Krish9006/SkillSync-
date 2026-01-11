"use client";
import { motion } from "framer-motion";
import { Users, Star, Zap, ArrowRight, Code, Layers, Activity, Heart, Briefcase, Calendar } from "lucide-react";
import TiltCard from "./TiltCard";

export default function TeamCard({ team, onJoin }) {
    return (
        <TiltCard className="h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-brand-primary/20 hover:border-brand-primary/50 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:via-transparent group-hover:to-brand-secondary/10 transition-all duration-700" />

                {/* Shimmer Effect */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-brand-accent/30 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <Code className="text-white w-8 h-8" />
                            </div>
                        </div>

                        {/* Category Badge with Logic */}
                        <span className={`shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider border shadow-lg backdrop-blur-md ${team.type === 'Hackathon' ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/40 shadow-purple-500/20' :
                            team.type === 'Startup' ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-400/40 shadow-emerald-500/20' :
                                team.type === 'Research' ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-400/40 shadow-amber-500/20' :
                                    'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/40 shadow-blue-500/20'
                            }`}>
                            {team.category || team.type || "Web Dev"}
                        </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-300">
                        {team.title || team.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                        {team.description}
                    </p>

                    {/* Metrics - Enhanced Design */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {/* Activity */}
                        <div className="relative group/metric overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 p-3 text-center hover:border-white/30 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                            <div className="relative">
                                <div className="text-brand-primary font-black text-xl mb-1">{team.members ? team.members.length : 1}/{team.maxMembers || 4}</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Members</div>
                            </div>
                        </div>

                        {/* Match - Highlighted */}
                        <div className="relative group/metric overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-transparent backdrop-blur-sm border border-brand-primary/40 p-3 text-center hover:border-brand-primary/60 transition-all shadow-lg shadow-brand-primary/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                            <div className="relative">
                                <div className="text-brand-secondary font-black text-xl mb-1">{team.role || "Dev"}</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Looking For</div>
                            </div>
                        </div>

                        {/* Health */}
                        <div className="relative group/metric overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-sm border border-emerald-500/30 p-3 text-center hover:border-emerald-500/50 transition-all">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                            <div className="relative">
                                <div className="text-emerald-400 font-black text-xl mb-1">{team.status || "Open"}</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Status</div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2.5 mb-7">
                        {team.tags?.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-sm text-slate-200 text-xs font-semibold border border-white/10 hover:bg-white/10 hover:border-brand-primary/30 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                        {team.tags?.length > 3 && (
                            <span className="px-3 py-1.5 rounded-xl bg-white/5 backdrop-blur-sm text-slate-400 text-xs font-semibold border border-white/10">
                                +{team.tags.length - 3}
                            </span>
                        )}
                    </div>

                    {/* Action */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                        <button
                            onClick={() => onJoin(team)}
                            className="w-full group/btn relative overflow-hidden rounded-xl bg-white text-slate-900 font-bold py-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-brand-primary/25"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Join Team <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                Join Team <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </TiltCard>
    );
}
