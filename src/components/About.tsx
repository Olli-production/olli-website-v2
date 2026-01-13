"use client";
import { motion } from "framer-motion";
import { Camera, Dribbble, Cpu, Figma, Code2 } from "lucide-react";

const skills = [
    { name: "UX/UI Designer", icon: <Figma className="w-6 h-6 text-[--color-lime]" />, items: ["Figma", "Design Systems", "Prototyping", "User Research"] },
    { name: "Software Engineering", icon: <Code2 className="w-6 h-6 text-[--color-lime]" />, items: ["React / TS", "HTML / CSS", "API REST", "SQL Databases"] },
    { name: "AI", icon: <Cpu className="w-6 h-6 text-[--color-lime]" />, items: ["Antigravity", "Figma Maker", "Google AI Suite", "AI Engineering"] }
];

const hobbies = [
    { name: "Photography", icon: <Camera className="w-5 h-5" />, description: "Visual storytelling and composition." },
    { name: "Basketball", icon: <Dribbble className="w-5 h-5" />, description: "Team dynamics and spatial strategy." }
];

export default function About() {
    return (
        <section id="about" className="bg-white py-32 md:py-48 border-t border-black/5">
            <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Intro Section - Oltre l'interfaccia */}
                    <div className="lg:col-span-12">
                        <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-[--color-text-secondary] mb-6 block font-sans">CHI SONO</span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-5xl md:text-7xl mb-12"
                        >
                            <span className="font-sans font-bold tracking-tighter">Oltre l'</span>
                            <span className="font-serif italic">interfaccia</span>
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <p className="text-xl md:text-2xl leading-relaxed text-black/80 font-medium">
                                Laureato in Informatica per la Comunicazione Digitale presso l'Università degli Studi di Milano. Ho integrato questo percorso tecnico con uno studio autonomo e appassionato di UX/UI Design, consolidando la mia esperienza su sistemi enterprise B2B nei settori ESG e della Mobilità.
                            </p>
                            <p className="text-xl md:text-2xl leading-relaxed text-black/80 font-medium">
                                Il mio mindset è quello di un designer che pensa come un informatico: affronto il progetto con rigore analitico, tenendo sempre in considerazione la logica del codice, i vincoli strutturali e l'efficienza dei sistemi complessi che vado a ideare.
                            </p>
                        </div>
                    </div>

                    {/* Skills - Full Width & Centered style */}
                    <div className="lg:col-span-12 mt-12">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-bold uppercase tracking-widest mb-10 pb-4 border-b border-[--color-lime]/30 font-mono"
                        >
                            Skills
                        </motion.h3>
                        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="space-y-4 md:space-y-6"
                                >
                                    <div className="flex items-center gap-4 text-black">
                                        {skill.icon}
                                        <span className="font-bold text-base uppercase tracking-tight font-sans">{skill.name}</span>
                                    </div>
                                    <ul className="space-y-2 md:space-y-3">
                                        {skill.items.map((item, j) => (
                                            <li key={j} className="text-[13px] font-mono text-black/60 uppercase tracking-tighter">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
