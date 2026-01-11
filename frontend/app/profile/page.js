"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Github, Linkedin, Edit, Loader2, MapPin, Calendar } from "lucide-react";

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const token = storedUser?.token || user?.token;

            if (!token) {
                router.push('/sign-in');
                return;
            }

            try {
                const res = await fetch("https://skillsync-backend-g2qf.onrender.com/api/users/me", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await res.json();
                if (res.ok) {
                    setProfile(data);
                } else {
                    console.error("Failed to fetch profile");
                }
            } catch (error) {
                console.error("Error fetching profile", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user, router]);

    if (loading) {
        return (
            <div className="min-h-screen bg-deep-space flex items-center justify-center text-white">
                <Loader2 className="animate-spin text-brand-primary" size={48} />
            </div>
        );
    }

    if (!profile) {
        return (
            <div className="min-h-screen bg-deep-space flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
                <Link href="/create-profile">
                    <button className="px-6 py-3 bg-brand-primary rounded-xl font-bold">Create Profile</button>
                </Link>
            </div>
        );
    }

    return (
        <section className="min-h-screen py-32 bg-deep-space relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="container px-6 md:px-12 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-os-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                >
                    {/* Cover Banner */}
                    <div className="h-48 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 border-b border-white/5 relative">
                        <Link href="/create-profile">
                            <button className="absolute top-6 right-6 px-4 py-2 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-lg text-white font-bold flex items-center gap-2 transition-all border border-white/10 hover:border-white/30">
                                <Edit size={16} /> Edit Profile
                            </button>
                        </Link>
                    </div>

                    <div className="px-8 pb-8 md:px-12 md:pb-12">
                        {/* Profile Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-8 gap-6">
                            <div className="w-32 h-32 rounded-3xl bg-slate-900 border-4 border-os-surface shadow-2xl flex items-center justify-center text-6xl shadow-brand-primary/20 overflow-hidden">
                                {profile.image && (profile.image.startsWith('http') || profile.image.startsWith('/')) ? (
                                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-6xl">{profile.image || profile.name?.charAt(0)}</span>
                                )}
                            </div>
                            <div className="flex-1 pb-2">
                                <h1 className="text-4xl font-heading font-bold text-white mb-2">{profile.name}</h1>
                                <p className="text-brand-primary font-bold text-lg flex items-center gap-2">
                                    {profile.role || "Student"}
                                </p>
                            </div>
                        </div>

                        {/* Stats / Badges Area */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <div className="flex items-center gap-3 text-slate-300 mb-2">
                                    <GraduationCap size={20} className="text-brand-secondary" />
                                    <span className="text-sm font-bold uppercase tracking-wider">Education</span>
                                </div>
                                <p className="text-white font-semibold">{profile.college || "Add College"}</p>
                                <p className="text-slate-500 text-sm">{profile.year || "Add Year"}</p>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <div className="flex items-center gap-3 text-slate-300 mb-2">
                                    <MapPin size={20} className="text-brand-accent" />
                                    <span className="text-sm font-bold uppercase tracking-wider">Location</span>
                                </div>
                                <p className="text-white font-semibold">Online / Remote</p>
                                <p className="text-slate-500 text-sm">Open to relocate</p>
                            </div>

                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <div className="flex items-center gap-3 text-slate-300 mb-2">
                                    <Calendar size={20} className="text-brand-primary" />
                                    <span className="text-sm font-bold uppercase tracking-wider">Joined</span>
                                </div>
                                <p className="text-white font-semibold">Member</p>
                                <p className="text-slate-500 text-sm">Since 2024</p>
                            </div>
                        </div>

                        {/* Bio & Skills */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <User size={20} className="text-slate-400" /> About Me
                                    </h2>
                                    <p className="text-slate-300 leading-relaxed text-lg bg-white/5 p-6 rounded-2xl border border-white/5">
                                        {profile.bio || "Write something about yourself to connect with others!"}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Briefcase size={20} className="text-slate-400" /> Skills
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {profile.skills && profile.skills.length > 0 ? (
                                            profile.skills.map((skill, index) => (
                                                <span key={index} className="px-4 py-2 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-white font-medium">
                                                    {skill}
                                                </span>
                                            ))
                                        ) : (
                                            <p className="text-slate-500 italic">No skills added yet.</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar: Socials & Actions */}
                            <div className="space-y-6">
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 sticky top-28">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Connect</h3>

                                    <div className="space-y-3">
                                        {profile.socials?.github && (
                                            <a href={`https://${profile.socials.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-black/20 hover:bg-black/40 text-white transition-colors border border-white/5 group">
                                                <Github size={20} className="group-hover:text-brand-primary transition-colors" />
                                                <span className="truncate">GitHub</span>
                                            </a>
                                        )}
                                        {profile.socials?.linkedin && (
                                            <a href={`https://${profile.socials.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-white transition-colors border border-white/5 group">
                                                <Linkedin size={20} className="text-[#0077b5]" />
                                                <span className="truncate">LinkedIn</span>
                                            </a>
                                        )}
                                        {(!profile.socials?.github && !profile.socials?.linkedin) && (
                                            <p className="text-slate-500 text-sm">No social links added.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
