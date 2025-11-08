"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#121629_0%,_#0b0f1c_45%,_#06080f_100%)]">
      {/* 🔮 Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[20%] w-[800px] h-[800px] bg-[rgba(124,92,255,0.12)] blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[700px] h-[700px] bg-[rgba(0,194,255,0.12)] blur-[140px] rounded-full" />
      </div>

      <div className="relative text-center px-6 md:px-12 lg:px-20">
        {/* 🧠 Subheading / Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-sky-400/90 bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full tracking-wider shadow-[0_0_15px_rgba(0,194,255,0.15)]"
        >
          🌍 Empower. Connect. Create.
        </motion.div>

        {/* 🪩 Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-6xl md:text-7xl font-extrabold leading-tight text-white tracking-tight"
        >
          Empower <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c5cff] to-[#00c2ff]">Students</span>. <br />
          Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#4fd1c5]">Future</span>.
        </motion.h1>

        {/* 💬 Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          SkillSync is the next-gen network for students and mentors — where collaboration drives innovation, and learning meets opportunity.
        </motion.p>

        {/* 🚀 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 flex justify-center flex-wrap gap-4"
        >
          <Link
            href="/features"
            className="relative inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-lg text-white bg-gradient-to-r from-[#7c5cff] via-[#5ea0ff] to-[#00c2ff] 
                      shadow-[0_0_35px_rgba(0,194,255,0.25)] hover:shadow-[0_0_45px_rgba(0,194,255,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Explore Platform
          </Link>

          <Link
            href="/community"
            className="px-7 py-3 rounded-xl font-semibold text-lg text-slate-200 border border-white/15 bg-white/[0.04] backdrop-blur-lg hover:bg-white/[0.08]
                      hover:border-sky-400/40 hover:text-white transition-all duration-300"
          >
            Join the Community
          </Link>
        </motion.div>

        {/* 🌈 Visual Accent Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 mx-auto w-52 h-[1.5px] bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] rounded-full opacity-60"
        />

        {/* ❤️ Footer Credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-6 text-sm text-slate-500"
        >
          Built with passion by <span className="text-brand-gradient font-semibold">Krish Gupta</span>
        </motion.p>
      </div>

      {/* 🧊 Floating Decorative Light */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-t from-[#00c2ff]/10 to-transparent blur-[120px]"
      />
    </section>
  );
}
