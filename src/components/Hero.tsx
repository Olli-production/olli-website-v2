"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-noise border-b border-black">
            {/* Animated Gradient Blobs - Distinct Lime Shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Top Left Blob */}
                <motion.div
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, 30, -30, 0],
                        scale: [1, 1.1, 0.95, 1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-lime rounded-full blur-[80px] opacity-70 mix-blend-multiply"
                />

                {/* Center Right Blob */}
                <motion.div
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, 50, -50, 0],
                        scale: [1, 1.2, 0.9, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[-15%] w-[45vw] h-[45vw] bg-lime rounded-full blur-[90px] opacity-60 mix-blend-multiply"
                />

                {/* Bottom Left Blob */}
                <motion.div
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -40, 40, 0],
                        scale: [0.9, 1.1, 1, 0.9]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] bg-lime rounded-full blur-[100px] opacity-50 mix-blend-multiply"
                />
            </div>

            {/* Grid Layout */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 h-screen pt-20">

                {/* Grid Lines */}
                <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-black/80 animate-draw-y"></div>
                <div className="hidden md:block absolute right-1/4 top-0 bottom-0 w-px bg-black animate-draw-y"></div>
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black animate-draw-y"></div>
                <div className="absolute top-[40%] left-0 right-0 h-px bg-black w-3/4 animate-draw-x"></div>
                <div className="absolute top-[65%] right-0 h-px bg-black w-1/2 animate-draw-x"></div>

                {/* Content Areas */}

                {/* Top Left - Intro */}
                <div className="col-span-1 md:col-span-6 p-6 md:p-12 relative border-r border-black flex flex-col justify-start pt-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-xs font-medium text-lg md:text-xl leading-tight pl-20"
                    >
                        <p>Ciao</p>
                        <p>sono Oliviero</p>
                        <p>ma puoi chiamarmi Olli</p>
                    </motion.div>
                </div>

                {/* Top Right - Thinker */}
                <div className="col-span-1 md:col-span-6 relative p-6 md:p-0 flex items-center justify-center md:items-start md:justify-start md:pl-12 md:pt-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-[8vw] font-bold tracking-tight leading-none z-20 font-sans"
                    >
                        Thinker
                    </motion.h1>
                </div>

                {/* Middle - Designer */}
                <div className="md:absolute top-[30%] left-[10%] z-20 pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-7xl md:text-[10vw] font-serif italic text-black leading-none"
                    >
                        Designer
                    </motion.h1>
                </div>

                {/* Bottom Right - Builder */}
                <div className="col-span-1 md:col-span-12 relative h-full flex items-end justify-end p-6 md:p-12 pb-32">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-6xl md:text-[9vw] font-bold tracking-tighter text-black leading-none z-20 font-sans"
                    >
                        Builder
                    </motion.h1>
                </div>

                {/* CTA Area */}
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-8 z-30">
                    <Link href="#projects" className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-[--color-lime] transition-colors uppercase tracking-widest text-xs font-bold bg-white/20 backdrop-blur-sm">PROGETTI</Link>
                    <Link href="mailto:email@example.com" className="px-8 py-3 text-black uppercase tracking-widest text-xs font-bold hover:text-[--color-lime] transition-colors">CONTATTAMI</Link>
                </div>

            </div>
        </section>
    );
}
