"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif italic">Let's build<br />something essential.</h2>
                        <a href="mailto:contact@oli.design" className="text-2xl border-b border-white pb-2 hover:opacity-70 transition-opacity">
                            contact@oli.design
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-sm">
                        <div className="space-y-4">
                            <p className="opacity-50 uppercase tracking-widest">Social</p>
                            <a href="#" className="block hover:text-[--color-lime] transition-colors">LinkedIn</a>
                            <a href="#" className="block hover:text-[--color-lime] transition-colors">GitHub</a>
                            <a href="#" className="block hover:text-[--color-lime] transition-colors">Instagram</a>
                        </div>
                        <div className="space-y-4">
                            <p className="opacity-50 uppercase tracking-widest">Sitemap</p>
                            <Link href="#home" className="block hover:text-[--color-lime] transition-colors">Home</Link>
                            <Link href="#projects" className="block hover:text-[--color-lime] transition-colors">Projects</Link>
                            <Link href="#about" className="block hover:text-[--color-lime] transition-colors">About</Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-end border-t border-white/20 pt-8">
                    <div>
                        <p className="text-[12rem] leading-none font-bold tracking-tighter opacity-10">OLLI</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm opacity-50">&copy; 2024 Oliviero.Design</p>
                        <p className="text-sm opacity-50">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
