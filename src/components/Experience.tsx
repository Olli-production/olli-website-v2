"use client";
import { motion } from "framer-motion";

interface TimelineItem {
    type: "work" | "hackathon";
    title: string;
    organization: string;
    period: string;
    description: string;
}

const journey: TimelineItem[] = [
    {
        type: "work",
        title: "UX/UI Designer & Software Engineer",
        organization: "ESG Enterprise Software",
        period: "2023 - Present",
        description: "Designing and building complex data visualization and reporting systems for enterprise sustainability.",
    },
    {
        type: "hackathon",
        title: "Winner @ Tech Innovation Hack",
        organization: "Major Tech Event",
        period: "2024",
        description: "Built a functional prototype for emergency response coordination in 48 hours.",
    },
    {
        type: "work",
        title: "Junior Product Designer",
        organization: "Fintech Startup",
        period: "2022 - 2023",
        description: "Developed and maintained a scalable design system used across 3 financial products.",
    },
    {
        type: "hackathon",
        title: "Finalist @ AI for Good",
        organization: "Global Hackathon Series",
        period: "2023",
        description: "Developed an AI-driven tool for optimizing resource distribution in non-profits.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-12 mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.2em] text-[10px] font-bold text-[--color-text-secondary] mb-6 block font-sans"
                    >
                        BACKGROUND
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl"
                    >
                        <span className="font-sans font-bold tracking-tighter">Esperienze & </span>
                        <span className="font-serif italic">Hackathon</span>
                    </motion.h2>
                </div>

                <div className="md:col-span-4 lg:col-span-3">
                    <p className="text-[--color-text-secondary] text-base leading-relaxed">
                        Un percorso che unisce la solidità della crescita professionale alla sfida continua delle competizioni tech.
                    </p>
                </div>

                <div className="md:col-span-8 lg:col-span-7 lg:col-start-6 space-y-16">
                    {journey.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l border-black/10 hover:border-black/30 transition-colors pb-4"
                        >
                            {/* Marker */}
                            <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${item.type === 'work' ? 'bg-black' : 'bg-[--color-lime]'}`} />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                <span className="text-sm font-mono text-[--color-text-secondary] uppercase tracking-tighter">{item.period}</span>
                            </div>

                            <p className="text-sm font-bold mb-4 flex items-center gap-2">
                                <span className="opacity-50">@</span> {item.organization}
                                <span className={`text-[10px] px-2 py-0.5 rounded-full border border-black/10 uppercase tracking-widest ${item.type === 'hackathon' ? 'bg-[--color-lime]/10' : ''}`}>
                                    {item.type}
                                </span>
                            </p>

                            <p className="text-[--color-text-secondary] leading-relaxed max-w-xl">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
