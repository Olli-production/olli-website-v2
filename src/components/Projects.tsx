"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    link: string;
}

const projects: Project[] = [
    {
        id: "1",
        title: "Enterprise ESG System",
        category: "SaaS / Product Design",
        year: "2024",
        link: "#",
    },
    {
        id: "2",
        title: "Fintech Design System",
        category: "Design Systems",
        year: "2023",
        link: "#",
    },
    {
        id: "3",
        title: "Workflow Automator",
        category: "Development Tool",
        year: "2023",
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black">
            <div className="flex justify-between items-baseline mb-16">
                <h2 className="text-sm font-bold uppercase tracking-widest">Selected Works</h2>
                <span className="text-sm font-mono">(03)</span>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group border-t border-black py-12 hover:bg-white hover:px-8 transition-all duration-300 cursor-pointer"
                    >
                        <Link href={project.link} className="grid md:grid-cols-12 gap-4 items-center">
                            <div className="md:col-span-6">
                                {/* Changed to Manrope (sans) as requested */}
                                <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:text-[--color-lime] transition-colors font-sans">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="md:col-span-3">
                                <span className="font-mono text-sm uppercase text-[--color-text-secondary]">{project.category}</span>
                            </div>
                            <div className="md:col-span-2">
                                <span className="font-mono text-sm text-[--color-text-secondary]">{project.year}</span>
                            </div>
                            <div className="md:col-span-1 flex justify-end">
                                <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
                <div className="border-t border-black"></div>
            </div>
        </section>
    );
}
