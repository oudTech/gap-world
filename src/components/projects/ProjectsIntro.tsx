"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ProjectsIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="projects-intro-heading"
      className="relative py-24 px-6 bg-white text-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-2xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h2
          variants={fadeUp}
          id="projects-intro-heading"
          className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight mb-6"
        >
          Our Works
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[#101010] text-base leading-relaxed"
        >
          Our projects speak through quality, detail, and client-focused
          execution.
        </motion.p>
      </motion.div>
    </section>
  );
}
