"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SlidersHorizontal, TrendingUp, Users, Zap, Plus, Briefcase, GraduationCap, Inbox, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import TeamCard from "../components/TeamCard";
import StudentCard from "../components/StudentCard";
import JoinTeamModal from "../components/JoinTeamModal";
import CreateTeamModal from "../components/CreateTeamModal";
import StudentProfileModal from "../components/StudentProfileModal";
import ConnectModal from "../components/ConnectModal";

export default function TeamFinderPage() {
    const { user } = useAuth();
    const [viewMode, setViewMode] = useState("teams"); // 'teams' | 'students'
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("Newest");

    // Data State
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
                const data = await res.json();
                if (res.ok) {
                    setProjects(data);
                }
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Fetch Users when viewMode is students
    useEffect(() => {
        if (viewMode === 'students') {
            const fetchUsers = async () => {
                try {
                    const token = user?.token || JSON.parse(localStorage.getItem('user'))?.token;
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const data = await res.json();
                    if (res.ok) {
                        setUsers(data);
                    }
                } catch (error) {
                    console.error("Failed to fetch users", error);
                }
            };
            fetchUsers();
        }
    }, [viewMode, user]);

    // Modal States
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

    const teamCategories = ["All", "Hackathon", "Startup", "Project", "Research"];
    const studentCategories = ["All", "Full Stack", "Frontend", "Backend", "AI/ML", "Design"];

    // Filter Logic
    const processedData = useMemo(() => {
        const data = viewMode === "teams" ? projects : users;

        let result = data.filter((item) => {
            // Category Filter
            let matchesFilter = true;
            if (filter !== "All") {
                if (viewMode === "teams") {
                    matchesFilter = item.category === filter;
                } else {
                    // For students, we filter by role roughly matching the category or skills
                    // Ensure item.role exists (it might not for new users)
                    const role = item.role || "";
                    const skills = item.skills || [];
                    matchesFilter = role.includes(filter) || skills.some(s => s.includes(filter));
                }
            }

            // Search Filter
            // Projects have 'title', dummy data had 'title' or 'name'. Backend has 'title'.
            const nameOrTitle = item.title || item.name || "";

            const matchesSearch =
                nameOrTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                // item.bio for students, projects don't have bio
                item.bio?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.tags || item.skills || []).some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesFilter && matchesSearch;
        });

        // Sort Logic (Simplified for demo)
        if (viewMode === "teams") {
            // Backend projects have createdAt
            if (sortBy === "Newest") result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            // Add other sorts if backend supports activity metrics later
        }

        return result;
    }, [viewMode, filter, searchQuery, sortBy, projects]);

    const handleJoinClick = (team) => {
        setSelectedTeam(team);
        setIsJoinModalOpen(true);
    };

    const handleViewProfile = (student) => {
        setSelectedStudent(student);
        setIsStudentModalOpen(true);
    };

    const handleConnectClick = (student) => {
        setSelectedStudent(student);
        setIsConnectModalOpen(true);
    };

    return (
        <section className="min-h-screen py-32 relative overflow-hidden bg-deep-space">
            {/* 🌌 Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/20 rounded-full blur-[150px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/20 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-brand-accent/10 rounded-full blur-[100px] animate-float" />
            </div>

            <div className="container px-6 md:px-12 lg:px-20">
                {/* 🚀 Hero Header */}
                <div className="text-center mb-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface border border-brand-primary/30 text-brand-secondary text-sm font-bold mb-8 shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                    >
                        <Sparkles size={14} className="fill-brand-secondary animate-pulse" />
                        Project Pals AI Matching Active
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight"
                    >
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent animate-gradient-flow">Dream {viewMode === "teams" ? "Team" : "Talent"}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light px-4"
                    >
                        Connect with ambitious builders, join hackathon squads, and launch your next big idea.
                    </motion.p>

                    {/* View Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="glass-card p-1.5 rounded-2xl flex items-center gap-1 relative">
                            <button
                                onClick={() => { setViewMode("teams"); setFilter("All"); }}
                                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 relative z-10 ${viewMode === "teams" ? "text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                            >
                                {viewMode === "teams" && (
                                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-brand-primary rounded-xl -z-10" />
                                )}
                                <Briefcase size={18} /> Find Teams
                            </button>
                            <button
                                onClick={() => { setViewMode("students"); setFilter("All"); }}
                                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 relative z-10 ${viewMode === "students" ? "text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                            >
                                {viewMode === "students" && (
                                    <motion.div layoutId="activeTab" className="absolute inset-0 bg-brand-secondary rounded-xl -z-10" />
                                )}
                                <GraduationCap size={18} /> Find Talent
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => setIsCreateModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300"
                        >
                            <Plus size={20} /> Create a Team
                        </motion.button>

                        <Link href="/teamfinder/requests">
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl glass-card text-white font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                            >
                                <Inbox size={20} /> Requests
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* 🎛️ Controls Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="sticky top-20 md:top-28 z-40 mb-12 space-y-4"
                >
                    <div className="glass-card p-3 sm:p-4 rounded-2xl shadow-2xl shadow-black/50">
                        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
                            {/* Search */}
                            <div className="relative w-full lg:w-96 group shrink-0">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder={viewMode === "teams" ? "Search teams, hackathons..." : "Search students, skills..."}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm sm:text-base"
                                />
                            </div>

                            {/* Filters & Sort Container */}
                            <div className="flex flex-row items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
                                {/* Filters */}
                                <div className="flex items-center gap-2 overflow-x-auto flex-1 lg:flex-initial pb-2 lg:pb-0 no-scrollbar">
                                    {(viewMode === "teams" ? teamCategories : studentCategories).map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilter(cat)}
                                            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${filter === cat
                                                ? "bg-white text-brand-dark shadow-lg scale-105"
                                                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                {/* Divider & Sort */}
                                {viewMode === "teams" && (
                                    <>
                                        <div className="hidden lg:block w-px h-8 bg-white/10" />
                                        {/* Sort Dropdown */}
                                        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 shrink-0">
                                            {["Trending", "Most Active"].map((sort) => (
                                                <button
                                                    key={sort}
                                                    onClick={() => setSortBy(sort)}
                                                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide transition-all ${sortBy === sort
                                                        ? "bg-brand-primary text-white shadow-md"
                                                        : "text-slate-500 hover:text-slate-300"
                                                        }`}
                                                >
                                                    {sort}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 📦 Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {processedData.length > 0 ? (
                            processedData.map((item) => (
                                viewMode === "teams" ? (
                                    <TeamCard key={item._id || item.id} team={item} onJoin={handleJoinClick} />
                                ) : (
                                    <StudentCard
                                        key={item._id || item.id}
                                        student={item}
                                        onViewProfile={handleViewProfile}
                                        onConnect={handleConnectClick}
                                    />
                                )
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20"
                            >
                                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search size={40} className="text-slate-600" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                                <p className="text-slate-400">Try adjusting your filters or search query.</p>
                                <button
                                    onClick={() => { setFilter("All"); setSearchQuery(""); }}
                                    className="mt-6 text-brand-secondary hover:underline font-medium"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modals */}
            <JoinTeamModal
                open={isJoinModalOpen}
                onClose={() => setIsJoinModalOpen(false)}
                teamName={selectedTeam?.title}
                teamId={selectedTeam?._id || selectedTeam?.id}
                receiverId={selectedTeam?.creator?._id || selectedTeam?.creator}
            />

            <CreateTeamModal
                open={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />

            <StudentProfileModal
                open={isStudentModalOpen}
                onClose={() => setIsStudentModalOpen(false)}
                student={selectedStudent}
                onConnect={handleConnectClick}
            />

            <ConnectModal
                open={isConnectModalOpen}
                onClose={() => setIsConnectModalOpen(false)}
                studentName={selectedStudent?.name}
                studentId={selectedStudent?._id || selectedStudent?.id}
            />
        </section>
    );
}
