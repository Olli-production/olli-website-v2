"use client";
import { motion } from "framer-motion";
import { Camera, Trophy } from "lucide-react";

export default function OffScreen() {
    return (
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif italic text-[--color-text-secondary]">Off-screen</h2>
                <p className="text-xl max-w-xl">
                    Quando non sono davanti a un monitor, cerco ispirazione nel mondo analogico e nella competizione.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="group relative h-[400px] rounded-3xl overflow-hidden bg-[--color-background-secondary] p-8 flex flex-col justify-end"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors z-0"></div>

                    <div className="relative z-20 text-white">
                        <Camera className="w-8 h-8 mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">Fotografia</h3>
                        <p className="opacity-80">Osservare la luce e la composizione allena il mio occhio per l'UI Design.</p>
                    </div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="group relative h-[400px] rounded-3xl overflow-hidden bg-[--color-background-secondary] p-8 flex flex-col justify-end"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors z-0"></div>

                    <div className="relative z-20 text-white">
                        <Trophy className="w-8 h-8 mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold mb-2">Pallacanestro</h3>
                        <p className="opacity-80">Il campo mi insegna che il talento individuale non batte mai la strategia di squadra.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
