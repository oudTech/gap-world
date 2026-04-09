"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

interface ShowcaseHeroProps {
  title: string;
  src: string;
}

export default function ShowcaseHero({ title, src }: ShowcaseHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label={`${title} hero`}
      className="relative h-[70vh] min-h-125 overflow-hidden flex items-end"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        <Image
          src={src}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-8 pb-10 md:px-16 md:pb-14 max-w-6xl w-full mx-auto"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.1] tracking-tight"
        >
          {title}
        </motion.h1>
      </motion.div>
    </section>
  );
}
