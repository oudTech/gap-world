"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ContactHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Contact Us hero"
      className="relative h-[70vh] min-h-125 overflow-hidden flex items-center justify-center"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <Image
          src="/images/carousel-1.jpg"
          alt="Modern residential building exterior — Azariah Arch Contact Us"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black/50" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.1] tracking-tight mb-6"
        >
          Contact us
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-white/80 text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          We&apos;re open to every opportunity—whether it&apos;s a new project,
          partnership, or collaboration
        </motion.p>
      </motion.div>

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
          className="w-0.5 h-8 bg-linear-to-b from-white/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
