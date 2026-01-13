"use client";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set(clientX / innerWidth - 0.5);
            mouseY.set(clientY / innerHeight - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Parallax transforms for each blob - increased range for visibility
    const blob1X = useTransform(mouseXSpring, [-0.5, 0.5], [-120, 120]);
    const blob1Y = useTransform(mouseYSpring, [-0.5, 0.5], [-120, 120]);

    const blob2X = useTransform(mouseXSpring, [-0.5, 0.5], [150, -150]);
    const blob2Y = useTransform(mouseYSpring, [-0.5, 0.5], [150, -150]);

    const blob3X = useTransform(mouseXSpring, [-0.5, 0.5], [-200, 200]);
    const blob3Y = useTransform(mouseYSpring, [-0.5, 0.5], [200, -200]);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#F3F3F3] border-b border-black">
            <motion.div style={{ y }} className="relative w-full h-full">
                {/* Background Grainy Blobs - Custom CSS version with SVG Texture */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <svg className="hidden">
                        <filter id="grainy-displace">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                            <feDisplacementMap in="SourceGraphic" scale="80" />
                        </filter>
                    </svg>

                    {/* Top Left Corner Blob */}
                    <motion.div
                        initial={{ opacity: 0, x: -600, y: -600 }}
                        animate={{
                            opacity: [0.4, 0.6, 0.4],
                            x: 0,
                            y: 0,
                        }}
                        style={{
                            x: blob1X,
                            y: blob1Y,
                            background: `radial-gradient(circle at center, var(--color-lime) 0%, transparent 45%)`,
                            filter: "url(#grainy-displace) blur(8px)",
                            opacity: 0.6
                        }}
                        transition={{
                            opacity: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                            x: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
                            y: { duration: 2.5, ease: [0.16, 1, 0.3, 1] }
                        }}
                        className="absolute -top-[10%] md:-top-[15%] -left-[15%] md:-left-[10%] w-[80vw] md:w-[55vw] h-[80vw] md:h-[55vw] rounded-full"
                    />

                    {/* Bottom Right Corner Blob */}
                    <motion.div
                        initial={{ opacity: 0, x: 600, y: 600 }}
                        animate={{
                            opacity: [0.4, 0.65, 0.4],
                            x: 0,
                            y: 0,
                        }}
                        style={{
                            x: blob2X,
                            y: blob2Y,
                            background: `radial-gradient(circle at center, var(--color-lime) 0%, transparent 45%)`,
                            filter: "url(#grainy-displace) blur(12px)",
                            opacity: 0.6
                        }}
                        transition={{
                            opacity: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            x: { duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                            y: { duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
                        }}
                        className="absolute -bottom-[10%] md:-bottom-[30%] -right-[20%] md:-right-[15%] w-[90vw] md:w-[60vw] h-[90vw] md:h-[60vw] rounded-full"
                    />

                    {/* Top Right Center Accent Blob */}
                    <motion.div
                        initial={{ opacity: 0, x: 400, y: -400 }}
                        animate={{
                            opacity: 0.4,
                            x: 0,
                            y: 0
                        }}
                        style={{
                            x: blob3X,
                            y: blob3Y,
                            background: `radial-gradient(circle at center, var(--color-lime) 0%, transparent 45%)`,
                            filter: "url(#grainy-displace) blur(4px)",
                            opacity: 0.4
                        }}
                        transition={{
                            duration: 2.5,
                            delay: 0.4,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="absolute top-[5%] md:top-[2%] right-[5%] md:right-[30%] w-[35vw] md:w-[18vw] h-[35vw] md:h-[18vw] rounded-full"
                    />
                </div>

                {/* Incomplete Animated Grid Lines */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                    {/* Vertical through Thinker */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "45vh" }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                        className="absolute left-[50%] top-0 w-px bg-black origin-top"
                    />
                    {/* Horizontal above Thinker */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "50%" }}
                        transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                        className="absolute right-0 top-[18%] h-px bg-black origin-right"
                    />
                    {/* Vertical crossing Designer and Builder */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100vh" }}
                        transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}
                        className="absolute left-[28%] top-0 w-px bg-black origin-top"
                    />
                    {/* Horizontal through Designer */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1.6, ease: "easeInOut" }}
                        className="absolute left-0 top-[48%] h-px bg-black origin-left"
                    />
                    {/* Bottom horizontal line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "45%" }}
                        transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                        className="absolute right-[5%] bottom-[12%] h-px bg-black origin-right"
                    />
                </div>

                {/* Grid Content */}
                <div className="relative z-10 flex flex-col justify-center h-screen px-6 md:px-12 md:grid md:grid-cols-12 md:h-screen">


                    {/* Intro Text - Desktop */}
                    <div className="hidden md:block absolute top-[18%] left-[28%] pl-8 z-30">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="max-w-[260px] font-medium text-lg md:text-xl tracking-tight leading-tight text-text-secondary"
                        >
                            <p>Ciao</p>
                            <p>sono Oliviero</p>
                            <p>ma puoi chiamarmi Olli<span className="text-[--color-lime]">.</span></p>
                        </motion.div>
                    </div>

                    {/* Mobile Intro - Smaller text, positioned at top */}
                    <div className="md:hidden mb-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-medium text-base tracking-tight text-text-secondary leading-tight"
                        >
                            <p>Ciao, sono Oliviero,</p>
                            <p>ma puoi chiamarmi Olli<span className="text-[--color-lime]">.</span></p>
                        </motion.div>
                    </div>

                    {/* Main Words Stack */}
                    <div className="flex flex-col md:block md:col-span-12 h-fit md:h-full relative">
                        {/* Thinker */}
                        <div className="md:absolute top-0 right-0 md:right-[10%] md:pt-32 z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-[18vw] md:text-[10vw] font-bold tracking-tight leading-[0.85] md:leading-none font-sans"
                            >
                                Thinker
                            </motion.h1>
                        </div>

                        {/* Designer */}
                        <div className="md:absolute top-[42%] left-[10%] z-20">
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.1 }}
                                className="text-[18vw] md:text-[11vw] font-serif italic text-black leading-[0.85] md:leading-none tracking-tight"
                            >
                                Designer
                            </motion.h1>
                        </div>

                        {/* Builder */}
                        <div className="md:absolute bottom-[25%] md:bottom-[10%] right-0 z-10">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="text-[18vw] md:text-[11vw] font-bold tracking-tighter text-black leading-[0.85] md:leading-none font-sans"
                            >
                                Builder
                            </motion.h1>
                        </div>
                    </div>

                    {/* Description Text */}
                    <div className="static md:absolute md:top-[48%] md:right-[5%] z-30 max-w-md mt-6 md:mt-0">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.8 }}
                            className="text-base md:text-xl text-[--color-text-secondary] font-medium text-left md:text-right leading-relaxed"
                        >
                            Progetto sistemi complessi coniugando rigore tecnico, raffinatezza estetica e un'esperienza utente funzionale.
                        </motion.p>
                    </div>

                    {/* CTA Area */}
                    <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-30">
                        <Magnetic strength={0.2}>
                            <Link href="#projects" className="group flex items-center gap-4 py-4 pr-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 2.2, type: "spring" }}
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-lime transition-all duration-300"
                                >
                                    <span className="text-sm">↓</span>
                                </motion.div>
                                <span className="uppercase tracking-widest text-[9px] md:text-[10px] font-bold">PROGETTI</span>
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
