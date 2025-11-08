export default function Footer() {
  return (
    <footer className="relative bg-[#05070E] text-white overflow-hidden border-t border-white/[0.08] mt-0">
      {/* 🔮 Background Glow Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-200px] left-[15%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(124,92,255,0.18)_0%,_transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[15%] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(0,194,255,0.18)_0%,_transparent_70%)] blur-[120px]" />
      </div>

      {/* 🧊 Top Gradient Strip */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5]" />

      {/* 🌐 Main Footer Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-14 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* 🔹 Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] flex items-center justify-center font-bold text-lg shadow-[0_0_25px_rgba(124,92,255,0.5)]">
              S
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#7c5cff] via-[#00c2ff] to-[#4fd1c5] bg-clip-text text-transparent">
              SkillSync
            </h3>
          </div>
          <p className="text-slate-400 mt-3 text-sm leading-relaxed">
            Where collaboration meets innovation. SkillSync empowers students, mentors, and creators to build together, grow faster, and shape the future.
          </p>
        </div>

        {/* 🔗 Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm text-slate-400">
          <div className="space-y-2">
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <a href="/features" className="block hover:text-[#00c2ff] transition">Features</a>
            <a href="/community" className="block hover:text-[#00c2ff] transition">Community</a>
            <a href="/mentors" className="block hover:text-[#00c2ff] transition">Mentors</a>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <a href="/about" className="block hover:text-[#00c2ff] transition">About</a>
            <a href="/signup" className="block hover:text-[#00c2ff] transition">Join Beta</a>
            <a href="#" className="block hover:text-[#00c2ff] transition">Blog</a>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <a href="https://linkedin.com/in/krish-gupta" target="_blank" className="block hover:text-[#00c2ff] transition">LinkedIn</a>
            <a href="https://github.com/" target="_blank" className="block hover:text-[#00c2ff] transition">GitHub</a>
            <a href="https://discord.com/" target="_blank" className="block hover:text-[#00c2ff] transition">Discord</a>
          </div>
        </div>
      </div>

      {/* ✨ Divider Glow */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#00c2ff]/40 to-transparent">
        <div className="absolute left-1/2 -translate-x-1/2 w-56 h-[2px] bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] blur-[2px]" />
      </div>

      {/* ⚡ Bottom Copyright Section */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-3">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#00c2ff] font-semibold">SkillSync</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <span>Built with</span>
          <span className="text-pink-500 animate-pulse">❤️</span>
          <span>by</span>
          <a
            href="https://linkedin.com/in/krish-gupta"
            target="_blank"
            className="text-[#7c5cff] hover:text-[#00c2ff] font-semibold transition-all"
          >
            Krish Gupta
          </a>
        </div>
      </div>

      {/* 🌈 Floating Accent Glows */}
      <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-[#7c5cff]/25 to-[#00c2ff]/25 blur-[100px] rounded-full opacity-60" />
      <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] bg-gradient-to-tl from-[#00c2ff]/25 to-[#7c5cff]/25 blur-[100px] rounded-full opacity-60" />
    </footer>
  );
}
