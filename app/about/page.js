"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden text-slate-200">
      {/* 🌌 Background with Balanced Darkness */}
      <div className="absolute inset-0 -z-20">
        {/* Soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030614] via-[#0a0f24] to-[#030614]" />
        {/* Violet glow */}
        <div className="absolute top-[-200px] left-[10%] w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.25),transparent_70%)] blur-[180px]" />
        {/* Cyan glow */}
        <div className="absolute bottom-[-250px] right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.25),transparent_70%)] blur-[180px]" />
        {/* Extra subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[2px]" />
      </div>

      {/* 🧠 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] bg-clip-text text-transparent leading-tight drop-shadow-[0_0_30px_rgba(124,92,255,0.4)]"
      >
        The Vision.<br />
        <span className="text-[#00c2ff]">Krish Gupta’s Mission.</span>
      </motion.h1>

      {/* 💬 Intro */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-6 max-w-3xl text-lg md:text-xl text-slate-200 leading-relaxed"
      >
        Hey 👋 I’m <span className="font-semibold text-white">Krish Gupta</span> — a learner, builder, and creator.  
        Currently shaping my journey in{" "}
        <span className="text-[#00c2ff] font-semibold">Computer Science and AI</span>,  
        I built <span className="text-[#7c5cff] font-bold">SkillSync</span> to make learning{" "}
        <span className="text-[#4fd1c5] font-semibold">collaborative</span>, not lonely.
      </motion.p>

      {/* 💡 Mission */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 relative bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.3)] p-10 max-w-4xl text-left overflow-hidden group hover:scale-[1.02] transition-transform duration-700"
      >
        {/* Glow border */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c5cff]/20 via-[#00c2ff]/15 to-transparent opacity-70 blur-2xl group-hover:opacity-90 transition-opacity duration-500"></div>

        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] bg-clip-text text-transparent">
            The Mission Behind SkillSync 🚀
          </h2>
          <p className="text-slate-100 text-lg leading-relaxed">
            SkillSync is more than a platform — it’s a{" "}
            <span className="font-semibold text-white">movement</span> for students.
            A place where learners connect with mentors, form real teams,
            and grow <span className="text-[#00c2ff] font-semibold">together</span>.  
            <br /><br />
            My goal is to make SkillSync the home of opportunity —  
            where ambition meets community, and every student can shine. 🌍
          </p>
        </div>
      </motion.div>

      {/* 💭 Quote */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-3xl"
      >
        <blockquote className="text-2xl italic font-medium text-slate-100 leading-relaxed drop-shadow-[0_0_15px_rgba(124,92,255,0.3)]">
          “I’m not just building a platform — I’m building a space where every student feels seen, supported, and unstoppable.”
        </blockquote>
        <p className="mt-4 text-slate-400">— Krish Gupta, Founder of SkillSync</p>
      </motion.div>

      {/* 🌍 Founder’s Note */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-4xl bg-gradient-to-br from-[#7c5cff]/10 via-[#00c2ff]/10 to-[#4fd1c5]/10 border border-white/10 rounded-3xl p-10 backdrop-blur-lg text-left shadow-[0_0_40px_rgba(0,194,255,0.15)] hover:shadow-[0_0_60px_rgba(0,194,255,0.3)] transition-all duration-700"
      >
        <h3 className="text-2xl font-bold mb-3 text-white">
          My Promise 🔥
        </h3>
        <p className="text-slate-200 text-lg leading-relaxed">
          I’ll keep building SkillSync with honesty, transparency, and purpose.  
          No noise — just genuine growth.  
          Every student deserves a space that feels *real*, and that’s what SkillSync stands for.
        </p>
      </motion.div>

      {/* ✨ CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Link
          href="/features"
          className="relative inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:shadow-[0_0_50px_rgba(0,194,255,0.4)] hover:scale-[1.05] transition-all text-lg"
        >
          <span>Explore What We’re Building</span>
          <span className="text-xl">🚀</span>
        </Link>
      </motion.div>
    </section>
  );
}
