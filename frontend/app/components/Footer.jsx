"use client";
import { motion } from "framer-motion";
import { Power, Github, Twitter, Linkedin, Heart } from "lucide-react";
import Link from "next/link";
import CyberButton from "./CyberButton";

export default function Footer() {
  return (
    <footer className="bg-os-surface border-t border-os-border pt-16 pb-8 relative overflow-hidden">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-0 bg-[length:100%_2px,3px_100%] opacity-10" />

      <div className="container px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand & Shutdown */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-signal-blue/20 rounded flex items-center justify-center border border-signal-blue/50">
                <Power size={18} className="text-signal-blue" />
              </div>
              <span className="font-heading font-bold text-xl text-white">Project Buddies</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm">
              The platform for ambitious builders.
              <br />
              Status: <span className="text-signal-green">All Systems Operational</span>
            </p>
            <div className="flex gap-4">
              <CyberButton variant="danger" icon={Power} className="text-xs">
                Log Out
              </CyberButton>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-xs text-signal-blue mb-6 uppercase tracking-wider">/navigation</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/teamfinder" className="hover:text-white hover:translate-x-1 transition-all inline-block">TeamFinder</Link></li>
              <li><Link href="/mentors" className="hover:text-white hover:translate-x-1 transition-all inline-block">Mentors</Link></li>
              <li><Link href="/community" className="hover:text-white hover:translate-x-1 transition-all inline-block">Community</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-mono text-xs text-signal-purple mb-6 uppercase tracking-wider">/connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-signal-blue transition-colors border border-white/5">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-signal-blue transition-colors border border-white/5">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-signal-blue transition-colors border border-white/5">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Project Buddies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart size={12} className="text-signal-red fill-signal-red animate-pulse" />
            <span>by Builders</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
