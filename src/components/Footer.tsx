"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Github } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Footer() {
    return (
        <section className="bg-black text-white pt-32 md:pt-48 pb-12 px-6 md:px-12 overflow-hidden">
            {/* OffScreen Content */}
            <div className="max-w-[1400px] mx-auto mb-32">
                <div className="mb-20 px-4 md:px-0">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.2em] text-[10px] font-bold text-neutral-500 mb-6 block font-sans"
                    >
                        INTERESSI <span className="text-[--color-lime]">/</span>
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl mb-12"
                    >
                        <span className="font-sans font-bold tracking-tighter">Off-</span>
                        <span className="font-serif italic">screen</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl text-neutral-400 font-medium leading-relaxed font-sans"
                    >
                        La mia ricerca della qualità non si ferma al software. Questi interessi alimentano il mio occhio compositivo e la mia capacità di operare in sistemi complessi.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-[2px] bg-neutral-900 border-y border-neutral-900">
                    {/* Photography Card */}
                    <div className="group relative bg-black p-8 md:p-16 flex flex-col min-h-[500px] md:min-h-[700px]">
                        <div className="mb-12">
                            <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                                Fotografia<span className="text-[--color-lime]">.</span>
                            </h3>
                        </div>

                        <div className="flex-1 flex items-center justify-center py-6 md:py-12">
                            <div className="relative w-48 h-48 md:w-64 h:64">
                                <Image
                                    src="/assets/camera_3d_black.png"
                                    alt="Photography"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-auto pt-8 md:pt-12 space-y-4 md:space-y-6">
                            <p className="text-white font-bold text-base md:text-xl font-sans">Visione, Composizione e Luce.</p>
                            <p className="text-neutral-500 text-sm md:text-base font-sans leading-relaxed max-w-sm">
                                Studio della luce e della composizione. Un esercizio continuo per affinare l'equilibrio visivo e la gerarchia nelle interfacce digitali.
                            </p>
                        </div>
                    </div>

                    {/* Basketball Card */}
                    <div className="group relative bg-black p-8 md:p-16 flex flex-col min-h-[500px] md:min-h-[700px]">
                        <div className="mb-12">
                            <h3 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                                Pallacanestro<span className="text-[--color-lime]">.</span>
                            </h3>
                        </div>

                        <div className="flex-1 flex items-center justify-center py-6 md:py-12">
                            <div className="relative w-56 h-56 md:w-72 md:h-72">
                                <Image
                                    src="/assets/basketball_3d_black.png"
                                    alt="Basketball"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="mt-auto pt-8 md:pt-12 space-y-4 md:space-y-6">
                            <p className="text-white font-bold text-base md:text-xl font-sans">Precisione, Squadra e Metodo.</p>
                            <p className="text-neutral-500 text-sm md:text-base font-sans leading-relaxed max-w-sm">
                                Pratica del gesto atletico e della strategia di squadra. Un promemoria costante che il successo sistemico dipende dalla coerenza del collettivo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modern Footer Content */}
            <div className="max-w-[1400px] mx-auto border-t border-neutral-800 pt-20">
                <div className="grid md:grid-cols-12 gap-16 mb-20">
                    <div className="md:col-span-6 lg:col-span-5">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic font-serif">
                            Let's build <br />the next.
                        </h2>
                        <Magnetic strength={0.3}>
                            <Link
                                href="mailto:ciao@oliviero.me"
                                className="group inline-flex items-center gap-4 text-xl md:text-2xl hover:text-[--color-lime] transition-colors py-4 pr-6"
                            >
                                <span className="pb-1 border-b-2 border-neutral-700 group-hover:border-[--color-lime] transition-colors font-mono">ciao@oliviero.me</span>
                                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </Magnetic>
                    </div>

                    <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-8 block font-mono">Connect</span>
                            <ul className="space-y-4">
                                <li>
                                    <Magnetic strength={0.2}>
                                        <Link href="#" className="inline-flex items-center gap-3 text-sm hover:text-[--color-lime] transition-colors group text-neutral-400 py-2 pr-4">
                                            <Linkedin className="w-4 h-4 text-neutral-600 group-hover:text-[--color-lime]" /> LinkedIn
                                        </Link>
                                    </Magnetic>
                                </li>
                                <li>
                                    <Magnetic strength={0.2}>
                                        <Link href="#" className="inline-flex items-center gap-3 text-sm hover:text-[--color-lime] transition-colors group text-neutral-400 py-2 pr-4">
                                            <Instagram className="w-4 h-4 text-neutral-600 group-hover:text-[--color-lime]" /> Instagram
                                        </Link>
                                    </Magnetic>
                                </li>
                                <li>
                                    <Magnetic strength={0.2}>
                                        <Link href="#" className="inline-flex items-center gap-3 text-sm hover:text-[--color-lime] transition-colors group text-neutral-400 py-2 pr-4">
                                            <Github className="w-4 h-4 text-neutral-600 group-hover:text-[--color-lime]" /> GitHub
                                        </Link>
                                    </Magnetic>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-8 block font-mono">Navigation</span>
                            <ul className="space-y-4 font-mono">
                                <li>
                                    <Magnetic strength={0.2}>
                                        <Link href="#projects" className="inline-block text-xs hover:text-[--color-lime] transition-colors text-neutral-400 uppercase tracking-tighter py-2 pr-4">/ Work</Link>
                                    </Magnetic>
                                </li>
                                <li>
                                    <Magnetic strength={0.2}>
                                        <Link href="#experience" className="inline-block text-xs hover:text-[--color-lime] transition-colors text-neutral-400 uppercase tracking-tighter py-2 pr-4">/ Journey</Link>
                                    </Magnetic>
                                </li>
                                <li>
                                    <Magnetic strength={0.2}>
                                        <Link href="#about" className="inline-block text-xs hover:text-[--color-lime] transition-colors text-neutral-400 uppercase tracking-tighter py-2 pr-4">/ About</Link>
                                    </Magnetic>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-neutral-900/50">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-neutral-600 uppercase">© 2026 Oliviero</span>
                        <div className="w-1 h-1 rounded-full bg-neutral-800" />
                        <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">Locally sourced pixels</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="#" className="text-[10px] font-mono text-neutral-600 hover:text-white transition-colors uppercase">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
