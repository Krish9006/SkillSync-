// app/features/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Collaborative Learning",
    desc: "Connect with driven peers to share skills, learn faster, and grow through real-world collaboration.",
    emoji: "👥",
  },
  {
    title: "Hackathons & Projects",
    desc: "Work on live projects, participate in hackathons and showcase your talent.",
    emoji: "💡",
  },
  {
    title: "Mentorship Network",
    desc: "Get guidance from professionals and alumni who’ve been where you want to go.",
    emoji: "🎓",
  },
  {
    title: "Career Opportunities",
    desc: "Find referrals, internships and project exposure to get noticed.",
    emoji: "🚀",
  },
];

export default function FeaturesPage() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030614] via-[#0a0f24] to-[#030614]" />

      <div className="container px-6 md:px-12 lg:px-20 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-white"
        >
          Explore <span className="text-brand-gradient">SkillSync</span> Features
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-slate-400 max-w-2xl mx-auto"
        >
          A platform where collaboration meets growth — built for students, mentors, and innovators.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl glass-card hover:scale-[1.03] transition-transform"
          >
            <div className="text-4xl mb-4">{f.emoji}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/" className="btn btn-outline">
          Back to Home
        </Link>
      </div>
    </section>
  );
}