"use client";
import TerminalBlock from "./TerminalBlock";
import { motion } from "framer-motion";

export default function FoundersLog() {
    return (
        <section className="py-24 relative">
            <div className="container px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-mono font-bold text-white mb-8 text-center">
                            <span className="text-signal-blue">root@projectpals</span>:~/vision $ cat README.md
                        </h2>

                        <TerminalBlock title="vision.md">
                            We built Project Pals because we were tired of "networking" on LinkedIn.
                            <br /><br />
                            Real connections happen when you <span className="text-white font-bold">build things together</span>.
                            When you stay up late debugging a race condition. When you ship a product that users actually love.
                            <br /><br />
                            This isn't just a platform. It's an operating system for your ambition.
                            <br /><br />
                            <span className="text-signal-green">Ready to upgrade?</span>
                        </TerminalBlock>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
