"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-[--color-background]">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <p className="uppercase tracking-widest text-xs font-bold mb-4">CHI SONO</p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif italic mb-8"
                    >
                        Oltre <br /> l'interfaccia
                    </motion.h2>
                </div>

                <motion.div
                    className="md:col-span-6 md:col-start-6 text-lg md:text-xl leading-relaxed space-y-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p>
                        La mia formazione presso l'Universit Statale di Milano mi ha insegnato che un buon software non deve solo eseguire istruzioni, ma deve comunicare.
                    </p>
                    <p>
                        Non mi considero solo un programmatore o solo un designer: sono un risolutore di problemi che usa il codice come struttura e il design come linguaggio.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
