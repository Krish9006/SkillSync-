"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      {/* 🌌 Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-secondary/8 blur-[150px] rounded-full" />
      </div>

      <div className="container px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-10 tracking-tight leading-[1.05]"
          >
            The Vision Behind <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Project Pals</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium"
          >
            We're building the operating system for student ambition.
            <br className="hidden md:block" />
            A place where your potential isn't limited by your network.
          </motion.p>
        </div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 p-12 mb-32 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/15 blur-[100px] rounded-full" />

          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-primary/15 to-brand-secondary/15 text-brand-primary text-sm font-black mb-8 border border-brand-primary/30 shadow-lg shadow-brand-primary/10">
                <Target size={16} /> OUR MISSION
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8 leading-tight">
                Democratizing Opportunity for Builders
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                Talent is evenly distributed, but opportunity is not. Project Pals bridges that gap by connecting ambitious students with the right teammates and mentors, regardless of their university or location.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                We believe that the <span className="text-brand-primary font-bold">best way to learn is by building</span>. And the best way to build is <span className="text-brand-secondary font-bold">together</span>.
              </p>
            </div>
            <div className="relative h-80 md:h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-brand-primary/15 via-brand-secondary/10 to-brand-accent/15 border border-brand-primary/30 flex items-center justify-center overflow-hidden shadow-lg shadow-brand-primary/10">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-primary/40 blur-[80px] rounded-full animate-pulse-slow" />

              {/* Icon with Glow */}
              <div className="relative z-10">
                <Zap size={100} className="text-brand-primary drop-shadow-[0_0_40px_rgba(124,58,237,0.8)]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Build in Public", desc: "Share your journey. Learn from failures. Celebrate wins.", icon: Zap },
            { title: "Community First", desc: "We grow by lifting others up. Mentorship is our core.", icon: Users },
            { title: "Obsessive Quality", desc: "We care about the details. Excellence is a habit.", icon: Heart },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 p-10 text-center group hover:border-brand-primary/50 transition-all duration-500 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:to-brand-secondary/10 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center text-brand-primary mb-6 border border-brand-primary/30 shadow-lg shadow-brand-primary/10 group-hover:scale-110 transition-transform duration-500">
                  <v.icon size={28} />
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-4">{v.title}</h3>
                <p className="text-slate-300 text-base leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 p-16 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5" />
          <div className="relative z-10">
            <p className="text-3xl md:text-4xl font-heading font-bold text-white italic mb-10 leading-relaxed">
              "I'm not just building a platform — I'm building the space I wish I had when I started coding."
            </p>
            <div className="flex items-center justify-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-brand-primary/30">
                KG
              </div>
              <div className="text-left">
                <div className="text-white font-black text-lg">Krish Gupta</div>
                <div className="text-slate-400 text-sm font-semibold">Founder, Project Pals</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


