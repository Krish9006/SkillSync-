"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CommunityPage() {
  const cards = [
    {
      title: "Create. Build. Evolve.",
      desc: "Start projects, join hackathons, and collaborate in real-time with passionate learners worldwide.",
      icon: "🚀",
      bg: "from-[#7c5cff]/10 to-[#00c2ff]/20",
    },
    {
      title: "Mentorship Reimagined",
      desc: "Connect with experts, alumni, and peers who guide you from curiosity to mastery — step by step.",
      icon: "🧠",
      bg: "from-[#00c2ff]/10 to-[#4fd1c5]/20",
    },
    {
      title: "Impact That Scales",
      desc: "Transform ideas into meaningful change. Every collaboration you start here echoes beyond the campus.",
      icon: "🌍",
      bg: "from-[#4fd1c5]/10 to-[#7c5cff]/20",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen text-slate-100 bg-gradient-to-b from-[#030614] via-[#0a0f24] to-[#10172a]">
      {/* 💫 Brand Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-300px] left-[10%] w-[1000px] h-[1000px] bg-gradient-to-r from-[#7c5cff]/30 via-[#00c2ff]/25 to-[#4fd1c5]/20 rounded-full blur-[240px]" />
        <div className="absolute bottom-[-250px] right-[15%] w-[800px] h-[800px] bg-gradient-to-r from-[#00c2ff]/25 via-[#7c5cff]/20 to-[#4fd1c5]/20 rounded-full blur-[220px]" />
      </div>

      {/* 🌐 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto pt-40 pb-20 px-6"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-brand-gradient">
          The Future of <br /> Connected Learning 🌍
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          <span className="text-white font-semibold">SkillSync</span> — founded by{" "}
          <span className="text-[#00c2ff] font-semibold">Krish Gupta</span>, is more than a network.  
          It’s a <span className="text-[#7c5cff] font-semibold">movement</span> — where students, mentors,
          and creators unite to build the next generation of innovation.
        </p>
      </motion.div>

      {/* 🧩 Feature Pods */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-8 pb-32">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 180 }}
            className={`rounded-3xl bg-gradient-to-br ${card.bg} border border-[#ffffff1a] p-10 shadow-xl hover:shadow-[0_0_50px_rgba(124,92,255,0.3)] relative overflow-hidden backdrop-blur-xl`}
          >
            {/* Glow Strip */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] opacity-70 animate-pulse" />

            <div className="relative z-10 text-center">
              <div className="text-6xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{card.desc}</p>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[#7c5cff]/10 via-[#00c2ff]/10 to-transparent blur-[70px] transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      {/* ✨ Vision Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center px-6 max-w-3xl mx-auto mb-28"
      >
        <blockquote className="text-3xl italic font-semibold text-slate-200 leading-relaxed">
          “SkillSync is the next evolution of learning —  
          a space where ambition meets opportunity, and students build the future together.”
        </blockquote>
        <p className="mt-4 text-slate-400 font-medium">— Krish Gupta, Founder</p>
      </motion.div>

      {/* 🌍 CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-[#0d1220]/70 backdrop-blur-xl border border-[#1e293b]/60 rounded-3xl shadow-[0_0_60px_rgba(124,92,255,0.15)] max-w-4xl mx-auto mb-32 p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7c5cff]/20 via-transparent to-transparent opacity-60" />
        <h2 className="text-4xl font-bold text-brand-gradient mb-4">
          Join a Global Network of Builders 🌐
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          From hackathons to mentorships — SkillSync is where creators, engineers, and thinkers collaborate to bring world-changing ideas to life.
        </p>
        <Link
          href="/signup"
          className="inline-block px-10 py-4 rounded-2xl bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] text-white font-semibold shadow-[0_0_35px_rgba(124,92,255,0.25)] hover:shadow-[0_0_50px_rgba(0,194,255,0.4)] hover:scale-[1.05] transition-all text-lg"
        >
          Join the Revolution 🚀
        </Link>
      </motion.div>
    </section>
  );
}
