"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    link: string;
    images: string[];
}

const projects: Project[] = [
    {
        id: "1",
        title: "Enterprise ESG System",
        category: "SaaS / Product Design",
        year: "2024",
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2340&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543286386-2e671330cc58?q=80&w=2340&auto=format&fit=crop"
        ]
    },
    {
        id: "2",
        title: "Fintech Design System",
        category: "Design Systems",
        year: "2023",
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2340&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2340&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2328&auto=format&fit=crop"
        ]
    },
    {
        id: "3",
        title: "Workflow Automator",
        category: "Development Tool",
        year: "2023",
        link: "#",
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2428&auto=format&fit=crop"
        ]
    },
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="py-32 md:py-48 border-t border-black/10 relative">
            {/* Hidden Preload Images */}
            <div className="hidden">
                {projects.flatMap(p => p.images).map((img, i) => (
                    <Image key={i} src={img} alt="preload" width={100} height={100} priority />
                ))}
            </div>

            {/* Header Content - Centered */}
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="uppercase tracking-[0.2em] text-[10px] font-bold text-[--color-text-secondary] mb-6 block font-sans"
                >
                    PORTFOLIO <span className="text-[--color-lime]">/</span>
                </motion.span>
                <div className="flex justify-between items-baseline">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl"
                    >
                        <span className="font-sans font-bold tracking-tighter">Progetti </span>
                        <span className="font-serif italic">selezionati</span>
                    </motion.h2>
                </div>
            </div>

            {/* Full-width Project Rows */}
            <div className="flex flex-col w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                        className="group w-full border-t border-black/20 hover:bg-white transition-all duration-500 cursor-pointer relative z-40"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Centered Content Wrapper */}
                        <div className="px-6 md:px-12 max-w-[1400px] mx-auto py-12">
                            <Link href={project.link} className="grid md:grid-cols-12 gap-4 items-center">
                                <div className="md:col-span-6">
                                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-[--color-lime] transition-colors font-sans uppercase">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="md:col-span-3">
                                    <span className="font-mono text-xs uppercase text-[--color-text-secondary] tracking-widest">{project.category}</span>
                                </div>
                                <div className="md:col-span-2 text-right md:text-left">
                                    <span className="font-mono text-sm text-[--color-text-secondary]">{project.year}</span>
                                </div>
                                <div className="md:col-span-1 flex justify-end">
                                    <div className="relative">
                                        {/* Project Preview Stack - Centered over the arrow */}
                                        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]">
                                            <AnimatePresence>
                                                {hoveredIndex === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.5 }}
                                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                                        className="relative w-[400px] h-[280px]"
                                                    >
                                                        <div className="relative w-full h-full">
                                                            {project.images.map((img, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ rotate: 0, x: 0, y: 0 }}
                                                                    animate={{
                                                                        rotate: (i - 1) * 8,
                                                                        x: (i - 1) * 35,
                                                                        y: (i - 1) * 12,
                                                                        zIndex: 3 - i
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.2,
                                                                        ease: "easeOut",
                                                                        delay: i * 0.03
                                                                    }}
                                                                    className="absolute inset-0 overflow-hidden border border-[var(--color-lime)] bg-gray-200"
                                                                >
                                                                    <Image
                                                                        src={img}
                                                                        alt={project.title}
                                                                        fill
                                                                        className="object-cover"
                                                                        sizes="400px"
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/10" />
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <Magnetic strength={0.2}>
                                            <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[--color-lime] group-hover:border-transparent transition-all duration-500">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </Magnetic>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                ))}
                <div className="border-t border-black/20 w-full"></div>
            </div>
        </section>
    );
}
