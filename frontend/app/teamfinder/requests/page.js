"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Clock, User, MessageSquare, Loader2, Inbox, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";

export default function RequestsPage() {
    const { user } = useAuth();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    const [activeTab, setActiveTab] = useState("received"); // 'received' | 'sent'

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const token = user?.token || JSON.parse(localStorage.getItem('user'))?.token;
            const endpoint = activeTab === "received"
                ? 'https://skillsync-backend-g2qf.onrender.com/api/requests/received'
                : 'https://skillsync-backend-g2qf.onrender.com/api/requests/sent';

            const res = await fetch(endpoint, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (res.ok) {
                setRequests(data);
            }
        } catch (error) {
            console.error("Failed to fetch requests", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, [user, activeTab]);

    const handleAction = async (requestId, status) => {
        try {
            const token = user?.token || JSON.parse(localStorage.getItem('user'))?.token;
            const res = await fetch(`https://skillsync-backend-g2qf.onrender.com/api/requests/${requestId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            });

            if (res.ok) {
                // Refresh list or update local state
                setRequests(requests.map(req =>
                    req._id === requestId ? { ...req, status } : req
                ));
            }
        } catch (error) {
            console.error("Failed to update request", error);
        }
    };

    return (
        <section className="min-h-screen py-32 relative bg-deep-space">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="container px-6 md:px-12 mx-auto max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/teamfinder">
                            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                                <ArrowLeft size={24} />
                            </button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-heading font-bold text-white">Requests</h1>
                            <p className="text-slate-400">Manage your connections</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 border-b border-white/10 pb-1">
                        <button
                            onClick={() => setActiveTab("received")}
                            className={`px-4 py-2 text-sm font-bold relative transition-colors ${activeTab === "received" ? "text-white" : "text-slate-500 hover:text-slate-300"}`}
                        >
                            Inbox
                            {activeTab === "received" && (
                                <motion.div layoutId="tab-indicator" className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-brand-primary" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("sent")}
                            className={`px-4 py-2 text-sm font-bold relative transition-colors ${activeTab === "sent" ? "text-white" : "text-slate-500 hover:text-slate-300"}`}
                        >
                            Sent
                            {activeTab === "sent" && (
                                <motion.div layoutId="tab-indicator" className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-brand-secondary" />
                            )}
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="animate-spin text-brand-primary" size={40} />
                    </div>
                ) : (
                    <div className="space-y-4">
                        <AnimatePresence mode="wait">
                            {requests.length > 0 ? (
                                requests.map((req) => {
                                    // Identify who is the other person to display
                                    const otherPerson = activeTab === "received" ? req.sender : req.receiver;

                                    return (
                                        <motion.div
                                            key={req._id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-brand-surface border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between group hover:border-brand-primary/30 transition-all"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-black flex items-center justify-center text-xl border border-white/10 shrink-0">
                                                    {otherPerson?.image || <User size={20} />}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="text-lg font-bold text-white">
                                                            {otherPerson?.name || "Unknown User"}
                                                        </h3>
                                                        {activeTab === "sent" && <span className="text-xs text-slate-500">(Receiver)</span>}
                                                    </div>

                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {req.status === 'pending' && <span className="text-[10px] bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-500/20 uppercase font-bold">Pending</span>}
                                                        {req.status === 'accepted' && <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20 uppercase font-bold">Accepted</span>}
                                                        {req.status === 'rejected' && <span className="text-[10px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full border border-red-500/20 uppercase font-bold">Rejected</span>}
                                                        <span className="text-brand-secondary text-sm font-medium">{otherPerson?.role || 'Student'}</span>
                                                    </div>

                                                    {req.message && (
                                                        <div className="bg-white/5 p-3 rounded-xl rounded-tl-none text-slate-300 text-sm flex gap-2 max-w-lg">
                                                            <MessageSquare size={16} className="shrink-0 mt-0.5" />
                                                            "{req.message}"
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Pending State Actions */}
                                            {activeTab === "received" && req.status === 'pending' && (
                                                <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                                                    <button
                                                        onClick={() => handleAction(req._id, 'rejected')}
                                                        className="flex-1 md:flex-none py-2 px-4 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 font-bold transition-all flex items-center justify-center gap-2"
                                                    >
                                                        <XCircle size={18} /> Reject
                                                    </button>
                                                    <button
                                                        onClick={() => handleAction(req._id, 'accepted')}
                                                        className="flex-1 md:flex-none py-2 px-6 rounded-xl bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary border border-brand-primary/30 font-bold transition-all flex items-center justify-center gap-2"
                                                    >
                                                        <CheckCircle size={18} /> Accept
                                                    </button>
                                                </div>
                                            )}

                                            {activeTab === "sent" && req.status === 'pending' && (
                                                <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                                                    <button
                                                        className="flex-1 md:flex-none py-2 px-4 rounded-xl border border-white/5 text-slate-400 cursor-not-allowed font-bold flex items-center justify-center gap-2"
                                                        disabled
                                                    >
                                                        <Clock size={18} /> Awaiting Response
                                                    </button>
                                                </div>
                                            )}

                                            {/* Accepted State Actions (For both Sent & Received) */}
                                            {req.status === 'accepted' && (
                                                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                                                    {otherPerson?.mobile && (
                                                        <a
                                                            href={`https://wa.me/${otherPerson.mobile}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1 md:flex-none py-2 px-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 font-bold transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <MessageCircle size={18} /> WhatsApp
                                                        </a>
                                                    )}
                                                    {otherPerson?.email && (
                                                        <a
                                                            href={`mailto:${otherPerson.email}`}
                                                            className="flex-1 md:flex-none py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Mail size={18} /> Email
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })
                            ) : (
                                <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Inbox size={32} className="text-slate-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">No requests found</h3>
                                    <p className="text-slate-400 max-w-sm mx-auto mt-2">
                                        {activeTab === "received"
                                            ? "Incoming requests from other students or teams will appear here."
                                            : "Requests you send to others will appear here."}
                                    </p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
