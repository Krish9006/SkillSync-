"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function JoinBetaModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  // 🧠 Disable body scroll when modal opens
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 700);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-[12px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 🌈 Glowing background */}
          <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-[#7c5cff]/40 via-[#00c2ff]/40 to-transparent blur-[200px] rounded-full" />

          {/* 🌌 Main Modal Box */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-[100000] w-[90%] max-w-lg bg-[rgba(14,17,35,0.95)] border border-white/10
                       backdrop-blur-2xl rounded-[24px] p-10 shadow-[0_0_80px_rgba(0,194,255,0.35)] flex flex-col justify-center"
          >
            {/* ❌ Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition"
            >
              <X size={22} />
            </button>

            {/* ✨ Content */}
            {!submitted ? (
              <>
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] text-center mb-4">
                  Join SkillSync Beta 🚀
                </h2>
                <p className="text-slate-400 text-center mb-8 text-sm leading-relaxed">
                  Be among the first to explore SkillSync — the network where
                  students, mentors, and innovators collaborate and grow.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  {/* Full Name */}
                  <div>
                    <label className="text-slate-300 text-sm">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full mt-2 bg-white/10 border border-white/10 rounded-lg px-3 py-2.5
                                 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-slate-300 text-sm">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full mt-2 bg-white/10 border border-white/10 rounded-lg px-3 py-2.5
                                 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="text-slate-300 text-sm">Your Role</label>
                    <div className="relative mt-2">
                      <select
                        required
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="appearance-none w-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10
                                   rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none pr-10 cursor-pointer
                                   z-[100001] relative"
                      >
                        <option value="">Select your role...</option>
                        <option value="Student">🎓 Student</option>
                        <option value="Mentor">🧠 Mentor</option>
                        <option value="Recruiter">💼 Recruiter</option>
                      </select>
                      <span className="absolute top-3 right-3 text-sky-400 pointer-events-none">▼</span>
                    </div>
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="mt-3 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5]
                               shadow-[0_0_30px_rgba(0,194,255,0.4)] hover:shadow-[0_0_60px_rgba(0,194,255,0.6)] transition-all duration-300"
                  >
                    Join Beta
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  You’re on the list!
                </h3>
                <p className="text-slate-400">
                  Thanks for joining <span className="text-[#00c2ff]">SkillSync Beta</span>.
                  You'll receive early access details soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-white/10 rounded-lg text-slate-300 hover:bg-white/20 transition"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
