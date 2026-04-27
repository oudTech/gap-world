"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, staggerContainer } from "@/lib/animations";

const cards = [
  {
    image: "/images/carousel-2.jpg",
    caption: "Structural Framing Delivered for Rapid Exterior Assembly",
  },
  {
    image: "/images/carousel-1.jpg",
    caption:
      "Modular Architectural Envelopes with High-Performance External Finishes",
  },
  {
    image: "/images/carousel-2.jpg",
    caption:
      "Engineered Facades Designed for Structural Integrity and Scalability",
  },
  {
    image: "/images/carousel-4.jpg",
    caption:
      "Precision Exterior Detailing Tailored for Modern Urban Landscapes",
  },
];

const marqueeItems = [...cards, ...cards];

export default function Technology() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="relative py-12 md:py-16 bg-[#F4F4F4] overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 max-w-6xl mx-auto mb-14" ref={headerRef}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
            >
              Exceptional Structures
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="technology-heading"
              className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight"
            >
              Designed With Precision. Built With Quality.
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-start gap-5"
          >
            <p className="text-[#101010] text-base leading-relaxed">
              Discover how we turn ideas into beautifully executed spaces, built
              with integrity, precision, and exceptional standards.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
              >
                Explore our works
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee — bleeds full width, no padding */}
      <div className="overflow-hidden">
        <div
          className="animate-marquee flex gap-4"
          style={{ width: "max-content" }}
        >
          {marqueeItems.map((card, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden"
              style={{
                width: "680px",
                aspectRatio: "2033 / 1207",
                /* Diagonal cut on bottom-right corner */
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 72px), calc(100% - 72px) 100%, 0 100%)",
              }}
            >
              <Image
                src={card.image}
                alt={card.caption}
                fill
                className="object-cover"
                sizes="680px"
                draggable={false}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="text-white text-lg font-semibold leading-snug max-w-[320px]">
                  {card.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="px-6 max-w-6xl mx-auto mt-12">
        <div className="flex">
          <div className="h-0.5 bg-orange-500 flex-1" />
          <div className="h-0.5 bg-gray-200 flex-[2]" />
        </div>
      </div>
    </section>
  );
}
