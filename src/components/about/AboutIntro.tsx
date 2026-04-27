"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, slideRight, staggerContainer } from "@/lib/animations";

export default function AboutIntro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="about-intro-heading"
      className="relative py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
            >
              About Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="about-intro-heading"
              className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight mb-6"
            >
              Innovation Meets Purpose
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#101010] text-base leading-relaxed"
            >
              GAP-World Nigeria Limited is a full-service architecture and
              construction firm built on integrity, reliability, and trust. We
              deliver realistic, budget-conscious solutions without
              overpromising. Every project is treated uniquely, with
              uncompromising standards. We create beautiful, functional spaces
              and prioritize consistency, choosing quality always—even if it
              means declining projects that don&apos;t meet our standards.
            </motion.p>
          </motion.div>

          {/* Right image with diagonal clip */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative overflow-hidden aspect-4/3"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
            }}
          >
            <Image
              src="/images/innovation-img.jpg"
              alt="Modular building module being lifted by a crane on a construction site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
