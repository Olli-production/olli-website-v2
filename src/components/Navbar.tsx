"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className={`fixed top-6 w-full z-50 flex ${isMobile ? 'justify-start px-6' : 'justify-center px-6'} pointer-events-none`}>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    width: isMobile && !isOpen ? "56px" : "auto"
                }}
                className="pointer-events-auto flex items-center bg-white/40 backdrop-blur-2xl border border-black/5 p-1 md:p-1.5 rounded-full overflow-hidden"
            >
                {/* Logo / Trigger */}
                <div
                    onClick={() => isMobile && setIsOpen(!isOpen)}
                    className="flex-shrink-0 cursor-pointer"
                >
                    <Magnetic strength={0.2}>
                        <Link href="/" onClick={(e) => isMobile && e.preventDefault()} className="group/logo block">
                            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-lime rounded-full flex items-center justify-center group-hover/logo:scale-105 transition-transform duration-300">
                                <div className="relative w-6 h-6 md:w-9 md:h-9">
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </Link>
                    </Magnetic>
                </div>

                {/* Navigation Links */}
                <AnimatePresence>
                    {(!isMobile || isOpen) && (
                        <motion.div
                            initial={isMobile ? { opacity: 0, x: -20, width: 0 } : { opacity: 1 }}
                            animate={{ opacity: 1, x: 0, width: "auto" }}
                            exit={{ opacity: 0, x: -20, width: 0 }}
                            className="flex items-center gap-6 md:gap-20 pr-4 md:pr-6 ml-4 md:ml-12"
                        >
                            <div className="flex gap-6 md:gap-12 text-[9px] md:text-[10px] items-center font-sans font-bold tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
                                <Magnetic strength={0.3}>
                                    <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors uppercase py-2">Portfolio</Link>
                                </Magnetic>
                                <Magnetic strength={0.3}>
                                    <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors uppercase py-2">Background</Link>
                                </Magnetic>
                                <Magnetic strength={0.3}>
                                    <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-black transition-colors uppercase py-2">Chi sono</Link>
                                </Magnetic>
                            </div>

                            {!isMobile && (
                                <Magnetic strength={0.3}>
                                    <Link
                                        href="mailto:ciao@oliviero.me"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2.5 md:px-6 md:py-3 border border-black hover:bg-black hover:text-white transition-all duration-300 rounded-full text-[8px] md:text-[9px] font-sans font-bold tracking-widest backdrop-blur-md"
                                    >
                                        SCRIVIMI
                                    </Link>
                                </Magnetic>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
