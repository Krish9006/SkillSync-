"use client";
import { motion } from "framer-motion";
import { Terminal, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import CyberButton from "./CyberButton";
import GlitchText from "./GlitchText";
import OSWindow from "./OSWindow";
import CountUp from "./CountUp";

export default function Hero() {
  const { user } = useAuth();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* 🌌 Background Grid & Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-signal-blue/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-signal-purple/10 blur-[120px] rounded-full animate-pulse-slow delay-1000" />
      </div>

      <div className="container px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* 📝 Left Column: Text & CTA */}
          <div className="text-left">
            {/* System Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-signal-green/10 border border-signal-green/20 text-signal-green text-xs font-mono mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-signal-green animate-pulse" />
              LIVE: 2,000+ Students Online
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-white mb-6 leading-[1.1]"
            >
              Build Real Projects. <br />
              <GlitchText text="Get Hired." />
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              The best way to learn is by building. <br />
              <span className="text-white font-medium">Stop watching tutorials. Start shipping code.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {user ? (
                <>
                  <Link href="/teamfinder">
                    <CyberButton icon={Terminal}>
                      Start Building
                    </CyberButton>
                  </Link>
                  <Link href="/mentors">
                    <CyberButton variant="secondary" icon={ShieldCheck}>
                      Find a Mentor
                    </CyberButton>
                  </Link>
                </>
              ) : (
                <Link href="/sign-in">
                  <CyberButton icon={Zap}>
                    Get Started
                  </CyberButton>
                </Link>
              )}
            </motion.div>

            {/* Stats (Mini) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 flex gap-8 border-t border-white/5 pt-8"
            >
              <div>
                <div className="text-2xl font-bold text-white font-mono"><CountUp value="2,000+" /></div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Active Nodes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono"><CountUp value="150+" /></div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Projects Deployed</div>
              </div>
            </motion.div>
          </div>

          {/* 🖥️ Right Column: OS Window Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <OSWindow title="terminal.sh" className="h-[500px] w-full max-w-lg mx-auto bg-black/90">
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="text-slate-500">Last login: {new Date().toDateString()} on ttys001</div>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-signal-green">➜</span>
                    <span className="text-signal-blue">~</span>
                    <span className="text-white">project-buddies --init</span>
                  </div>

                  <div className="text-slate-300 pl-4 space-y-1">
                    <div>[INFO] Loading modules...</div>
                    <div className="text-signal-green">[SUCCESS] TeamFinder v2.0 loaded</div>
                    <div className="text-signal-green">[SUCCESS] Mentorship Protocol active</div>
                    <div className="text-signal-green">[SUCCESS] Community Uplink established</div>
                    <div>[INFO] Scanning for ambitious students...</div>
                    <div className="text-signal-blue animate-pulse">_ Found YOU.</div>
                  </div>
                </div>

                <div className="mt-8 p-4 border border-white/10 rounded bg-white/5">
                  <div className="text-xs text-slate-500 mb-2">SUGGESTED ACTION</div>
                  <div className="text-white font-bold">Deploy your first project</div>
                  <div className="text-slate-400 text-xs mt-1">Connect with 3 other builders</div>
                </div>
              </div>
            </OSWindow>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 top-20 bg-os-surface border border-os-border p-4 rounded-lg shadow-xl backdrop-blur-md z-20"
            >
              <Zap className="text-signal-purple mb-2" size={24} />
              <div className="text-xs text-slate-400">Energy Level</div>
              <div className="text-lg font-bold text-white">100%</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
