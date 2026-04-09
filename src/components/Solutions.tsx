"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, slideRight, staggerContainer } from "@/lib/animations";

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="solutions"
      ref={ref}
      aria-labelledby="solutions-heading"
      className="relative py-16 md:py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left text — second on mobile, first on desktop */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="order-last lg:order-first"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
            >
              Solutions
            </motion.p>

            <motion.h2
              variants={fadeUp}
              id="solutions-heading"
              className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight mb-6"
            >
              From Bathroom Pods
              <br /> To Kitchen Units, All Factory-Built.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#101010] text-base leading-relaxed mb-8 max-w-md"
            >
              At GAB World Nigeria Limited, every project is handled with
              precision and integrity—delivering durable, functional, and
              well-crafted spaces. Our approach ensures each solution is
              tailored, achievable, and built to meet the highest standards.
            </motion.p>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
              >
                Explore our portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image — first on mobile, second on desktop */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative overflow-hidden aspect-625/678 shadow-xl order-first lg:order-last"
          >
            <Image
              src="/images/bathroom-pod.png"
              alt="Factory-built bathroom pod with modern fixtures and integrated services"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent p-5">
              <p className="text-white text-sm font-medium">
                Utility Pods — Bathroom Pods
              </p>
            </div>

            {/* Animated shine sweep */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={inView ? { x: "200%" } : { x: "-100%" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
