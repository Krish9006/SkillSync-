"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, GraduationCap, Code, Github, Linkedin, Save, Loader2 } from "lucide-react";

export default function CreateProfilePage() {
    const { user, login } = useAuth(); // Re-using login to update user state if needed, or we simple update local state
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        role: "Student",
        college: "",
        year: "",
        bio: "",
        skills: "",
        github: "",
        linkedin: ""
    });

    // Fetch existing profile data on mount
    useEffect(() => {
        const fetchProfile = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const token = storedUser?.token || user?.token;

            if (token) {
                try {
                    const res = await fetch("https://skillsync-backend-g2qf.onrender.com/api/users/me", {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    });
                    const data = await res.json();
                    if (res.ok) { // Only pre-fill if request was successful
                        setFormData({
                            role: data.role || "Student",
                            college: data.college || "",
                            year: data.year || "",
                            bio: data.bio || "",
                            skills: data.skills ? data.skills.join(", ") : "",
                            github: data.socials?.github || data.github || "",
                            linkedin: data.socials?.linkedin || data.linkedin || "",
                            mobile: data.mobile || ""
                        });
                    }
                } catch (error) {
                    console.error("Failed to load profile", error);
                }
            }
        };
        fetchProfile();
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Convert skills string to array
            const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(s => s);

            // Get Token from LocalStorage (or Context if available directly)
            // In AuthContext we saved the whole response object to localStorage 'user'
            const storedUser = JSON.parse(localStorage.getItem('user'));
            const token = storedUser?.token;

            const res = await fetch("https://skillsync-backend-g2qf.onrender.com/api/users/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    ...formData,
                    skills: skillsArray
                })
            });

            const data = await res.json();

            if (res.ok) {
                // Update local user state
                const newUser = { ...storedUser, ...data };
                localStorage.setItem("user", JSON.stringify(newUser));
                // Force reload or redirect to update context (simple way)
                window.location.href = "/";
            } else {
                alert(data.message || "Failed to update profile");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-os-surface border border-os-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <h1 className="text-3xl font-heading font-bold mb-2">Complete Your Profile</h1>
                    <p className="text-slate-400 mb-8">Tell us about yourself so you can find the perfect teammates.</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Section 1: Basic Info */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                                <User className="text-brand-primary" size={20} /> Basic Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Role / Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-os-bg border border-os-border rounded-xl p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                        placeholder="e.g. Full Stack Developer"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Bio (Short)</label>
                                    <input
                                        type="text"
                                        className="w-full bg-os-bg border border-os-border rounded-xl p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                        placeholder="Coding enthusiast & night owl..."
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Education */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                                <GraduationCap className="text-brand-secondary" size={20} /> Education
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">College / University</label>
                                    <input
                                        type="text"
                                        className="w-full bg-os-bg border border-os-border rounded-xl p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                        placeholder="e.g. IIT Guwahati"
                                        value={formData.college}
                                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Year</label>
                                    <select
                                        className="w-full bg-os-bg border border-os-border rounded-xl p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                        value={formData.year}
                                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                    >
                                        <option value="">Select Year</option>
                                        <option value="1st Year">1st Year</option>
                                        <option value="2nd Year">2nd Year</option>
                                        <option value="3rd Year">3rd Year</option>
                                        <option value="4th Year">4th Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Skills & Socials */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                                <Code className="text-brand-accent" size={20} /> Skills & Socials
                            </h2>
                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Skills (Comma separated)</label>
                                <input
                                    type="text"
                                    className="w-full bg-os-bg border border-os-border rounded-xl p-3 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                                    placeholder="React, Node.js, Python, Figma"
                                    value={formData.skills}
                                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="text"
                                    className="w-full bg-os-bg border border-os-border rounded-xl py-3 pl-10 pr-4 focus:border-brand-primary outline-none transition-all"
                                    placeholder="github.com/username"
                                    value={formData.github}
                                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                                />
                            </div>
                            <div className="relative">
                                <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="text"
                                    className="w-full bg-os-bg border border-os-border rounded-xl py-3 pl-10 pr-4 focus:border-brand-primary outline-none transition-all"
                                    placeholder="linkedin.com/in/username"
                                    value={formData.linkedin}
                                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                />
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm text-slate-400 mb-1">WhatsApp Number (Optional)</label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 font-bold text-xs bg-green-500/10 px-1.5 py-0.5 rounded">WA</div>
                                    <input
                                        type="text"
                                        className="w-full bg-os-bg border border-os-border rounded-xl py-3 pl-12 pr-4 focus:border-green-500 outline-none transition-all placeholder-slate-600"
                                        placeholder="+91 9876543210 (Required for connection requests)"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                    />
                                </div>
                                <p className="text-xs text-slate-500 mt-1">This will only be visible to people you accept connection requests from.</p>
                            </div>
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-primary/20 transition-all flex items-center justify-center gap-2 mt-8 disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <>Save Profile <Save size={18} /></>}
                        </button>
                    </form>
                </div>
            </motion.div >
        </div >
    );
}
