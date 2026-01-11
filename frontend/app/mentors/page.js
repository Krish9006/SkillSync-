// app/mentors/page.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Linkedin, Twitter } from "lucide-react";

const mentors = [
  {
    name: "Aarav Sharma",
    title: "Senior SWE @ Microsoft",
    img: "https://i.pravatar.cc/300?img=32",
    quote: "Mentorship helps you ask the right questions.",
    tags: ["System Design", "Cloud"],
  },
  {
    name: "Ishita Rao",
    title: "Data Scientist @ Google",
    img: "https://i.pravatar.cc/300?img=44",
    quote: "Curiosity + consistency = growth.",
    tags: ["AI/ML", "Python"],
  },
  {
    name: "Rahul Verma",
    title: "Product Designer @ Figma",
    img: "https://i.pravatar.cc/300?img=45",
    quote: "Design is empathy. Teach with care.",
    tags: ["UX/UI", "Figma"],
  },
  {
    name: "Priya Patel",
    title: "Founder @ TechStart",
    img: "https://i.pravatar.cc/300?img=5",
    quote: "Build what you love, the rest follows.",
    tags: ["Startup", "Leadership"],
  },
  {
    name: "Arjun Singh",
    title: "Frontend Lead @ Airbnb",
    img: "https://i.pravatar.cc/300?img=11",
    quote: "Details matter. Craftsmanship is key.",
    tags: ["React", "Performance"],
  },
  {
    name: "Neha Gupta",
    title: "PM @ Uber",
    img: "https://i.pravatar.cc/300?img=9",
    quote: "Solve real problems for real people.",
    tags: ["Product", "Strategy"],
  },
];

export default function MentorsPage() {
  return (
    <section className="min-h-screen py-32 relative overflow-hidden">
      {/* 🌌 Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/8 blur-[150px] rounded-full" />
      </div>

      <div className="container px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-primary/15 to-brand-secondary/15 border border-brand-primary/30 text-sm font-bold text-brand-primary mb-8 shadow-lg shadow-brand-primary/10"
          >
            <Sparkles size={16} /> World-Class Mentorship
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-8 leading-[1.05]"
          >
            Learn from the <br />
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">Best Minds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Connect with experienced professionals who have walked the path.
            <br className="hidden md:block" />
            Get guidance, code reviews, and career advice.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 p-8 hover:border-brand-primary/50 transition-all duration-500 shadow-2xl hover:shadow-brand-primary/20 flex flex-col"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:via-transparent group-hover:to-brand-secondary/10 transition-all duration-700" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-brand-primary transition-colors shadow-lg">
                    <Image src={m.img} alt={m.name} fill className="object-cover" />
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all border border-white/5 hover:border-[#0077b5]/30">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:bg-brand-primary hover:text-white transition-all border border-white/5 hover:border-brand-primary/30">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all">
                  {m.name}
                </h3>
                <p className="text-base text-brand-primary font-bold mb-6">{m.title}</p>

                <p className="text-slate-300 text-lg italic mb-8 leading-relaxed font-medium">"{m.quote}"</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {m.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300 group-hover:border-brand-primary/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
