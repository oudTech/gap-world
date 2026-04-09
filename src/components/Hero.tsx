"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: image scrolls slower than content
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Hero"
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <Image
          src="/images/hero-img.png"
          alt="Modern architectural house with a yellow car in the garage surrounded by autumn trees"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-8"
        >
          Azariah Arch—
          <br />
          Rethinking construction
          <br className="hidden sm:block" /> for a changing world
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="w-auto inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-sm transition-colors duration-200 shadow-lg shadow-orange-500/30"
            >
              Explore our portfolio
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="w-auto inline-flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/30 text-white font-medium px-6 py-2.5 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-sm transition-all duration-200 hover:bg-white/25"
            >
              Talk to an expert
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
