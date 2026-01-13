"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white py-6 px-6 md:px-12 flex justify-between items-center backdrop-blur-sm">
        <Link href="/" className="text-xl font-bold tracking-tight z-50">
          OLIVIERO.Design
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="hover:opacity-70 transition-opacity">
            Progetti
          </Link>
          <Link href="#about" className="hover:opacity-70 transition-opacity">
            Chi Sono
          </Link>
          <Link href="#contact" className="hover:opacity-70 transition-opacity">
            Contatti
          </Link>
          <a
            href="mailto:contact@oli.design"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            Parliamo?
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-2xl md:hidden"
          >
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[--color-accent]"
            >
              Progetti
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[--color-accent]"
            >
              Chi Sono
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[--color-accent]"
            >
              Contatti
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
