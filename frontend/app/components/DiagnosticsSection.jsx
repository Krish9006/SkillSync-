"use client";
import { motion } from "framer-motion";
import { AlertTriangle, XCircle, WifiOff } from "lucide-react";
import OSWindow from "./OSWindow";

const errors = [
    {
        code: "PROBLEM_01",
        message: "Stuck watching tutorials but never building anything.",
        icon: AlertTriangle,
        color: "text-yellow-500"
    },
    {
        code: "PROBLEM_02",
        message: "Building alone with no one to help or review code.",
        icon: WifiOff,
        color: "text-signal-red"
    },
    {
        code: "PROBLEM_03",
        message: "Resume has no real projects, just certificates.",
        icon: XCircle,
        color: "text-signal-red"
    }
];

export default function DiagnosticsSection() {
    return (
        <section className="py-24 relative">
            <div className="container px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        <span className="text-signal-red">Why Students</span> Struggle
                    </h2>
                    <p className="text-slate-400">Do you face these common problems?</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {errors.map((err, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group"
                        >
                            <OSWindow title={`problem_0${i + 1}.txt`} controls={false} className="h-full bg-red-950/10 border-red-500/20 hover:border-red-500/50 transition-colors">
                                <div className="p-6">
                                    <div className={`mb-4 ${err.color} p-3 bg-white/5 rounded-lg inline-block`}>
                                        <err.icon size={24} />
                                    </div>
                                    <div className="font-mono text-signal-red text-sm mb-2 opacity-80">
                                        &lt;{err.code} /&gt;
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{err.message}</h3>
                                    <div className="h-1 w-full bg-white/5 rounded-full mt-4 overflow-hidden">
                                        <div className="h-full bg-signal-red/50 w-2/3 animate-pulse" />
                                    </div>
                                </div>
                            </OSWindow>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
