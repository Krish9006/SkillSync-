// app/mentors/page.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "Aarav Sharma",
    title: "Senior SWE • Microsoft",
    img: "https://i.pravatar.cc/300?img=32",
    quote: "Mentorship helps you ask the right questions.",
  },
  {
    name: "Ishita Rao",
    title: "Data Scientist • Google",
    img: "https://i.pravatar.cc/300?img=44",
    quote: "Curiosity + consistency = growth.",
  },
  {
    name: "Rahul Verma",
    title: "Product Designer • Figma",
    img: "https://i.pravatar.cc/300?img=45",
    quote: "Design is empathy. Teach with care.",
  },
];

export default function MentorsPage() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030614] via-[#0a0f24] to-[#030614]" />

      <div className="container text-center px-6 md:px-12 lg:px-20 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-white mb-4"
        >
          Meet Our Mentors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Experienced professionals ready to guide the next generation of builders.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
        {mentors.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-3xl text-center hover:scale-[1.03] transition-transform"
          >
            <div className="mx-auto w-28 h-28 mb-4 relative">
              <Image src={m.img} alt={m.name} width={112} height={112} className="rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white">{m.name}</h3>
            <p className="text-sm text-slate-400 mb-4">{m.title}</p>
            <p className="text-slate-300 italic leading-relaxed">“{m.quote}”</p>
            <div className="mt-6">
              <button className="btn btn-primary">Connect</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
