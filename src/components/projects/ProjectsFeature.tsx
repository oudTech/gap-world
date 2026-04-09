"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ProjectsFeature() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="projects-feature-heading"
      className="relative py-12 md:py-24 px-6 bg-[#F5F5F5]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
            >
              Technology
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="projects-feature-heading"
              className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight"
            >
              Built With Precision.
              <br />
              Design To Scale.
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <p className="text-[#101010] text-base leading-relaxed">
              Our projects speak through quality, detail, and client-focused
              execution.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="self-start">
              <Link
                href="/projects"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                Explore our portfolio
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
