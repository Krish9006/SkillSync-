"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Globe, Rocket, ArrowRight, Sparkles } from "lucide-react";

export default function CommunityPage() {
  const features = [
    {
      title: "Global Network",
      desc: "Connect with builders from 50+ countries. Share ideas, get feedback, and find your tribe.",
      icon: Globe,
    },
    {
      title: "Hackathons & Events",
      desc: "Participate in weekly challenges and hackathons. Win prizes and build your portfolio.",
      icon: Rocket,
    },
    {
      title: "Peer Learning",
      desc: "Join study groups and project squads. Learn faster by building together.",
      icon: Users,
    },
  ];

  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      {/* 🌌 Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[800px] h-[800px] bg-brand-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full" />
      </div>

      <div className="container px-6 md:px-12 lg:px-20">
        {/* Hero */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-secondary/15 to-brand-accent/15 border border-brand-secondary/30 text-sm font-bold text-brand-secondary mb-8 shadow-lg shadow-brand-secondary/10"
          >
            <Sparkles size={16} /> Join the Movement
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-8 leading-[1.05]"
          >
            Join the <br />
            <span className="bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary bg-clip-text text-transparent">Revolution</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Project Pals is more than a platform. It's a movement of ambitious students building the future.
            <br className="hidden md:block" />
            Don't just watch from the sidelines.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 p-10 hover:border-brand-secondary/50 transition-all duration-500 shadow-xl hover:shadow-brand-secondary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/0 to-brand-secondary/0 group-hover:from-brand-secondary/10 group-hover:to-brand-accent/10 transition-all duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-secondary/20 to-brand-accent/20 border border-brand-secondary/30 flex items-center justify-center text-brand-secondary mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-brand-secondary/10">
                  <f.icon size={32} />
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-4">{f.title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-16 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/10 via-brand-accent/10 to-brand-primary/10" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8 leading-tight">
              Ready to start your journey?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
              Join thousands of students who are already building, learning, and growing on Project Pals.
            </p>
            <Link href="/signup">
              <button className="group relative px-10 py-5 rounded-2xl bg-white text-slate-900 font-black text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-white/10 flex items-center gap-3 mx-auto overflow-hidden">
                <span className="relative z-10">Get Started Now</span>
                <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
