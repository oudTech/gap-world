"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const sectors = [
  { label: "Hospitals And Clinics", href: "#" },
  { label: "Retail, Restaurants, QSRs, Clubs, Clubhouses", href: "#" },
  { label: "Educational Institutions", href: "#" },
  { label: "Residential (Apartments & Villas)", href: "#" },
  {
    label: "Hotels, Co-Living Spaces, Student Accommodations, Hostels",
    href: "#",
  },
  { label: "Corporate Offices", href: "#" },
];

export default function UseCases() {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="use-cases"
      ref={ref}
      aria-labelledby="use-cases-heading"
      className="relative py-16 md:py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-start"
        >
          {/* Heading — spans both cols on desktop (col 1), row 1 on mobile */}
          <div className="lg:col-start-1 lg:row-start-1">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
            >
              Use Cases
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="use-cases-heading"
              className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight"
            >
              Solving Sector Challenges At Scale.
            </motion.h2>
          </div>

          {/* Image — row 3 on mobile, col 1 row 2 on desktop */}
          <motion.div
            variants={fadeUp}
            className="lg:col-start-1 lg:row-start-2 relative overflow-hidden aspect-4/3 shadow-lg"
          >
            <Image
              src="/images/use-case.png"
              alt="Modern hospital or clinic building demonstrating modular construction at scale"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Right — text + sector list: row 2 on mobile, col 2 rows 1-2 on desktop */}
          <motion.div
            variants={fadeUp}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 pt-0 lg:pt-16"
          >
            <p className="text-[#101010] text-base leading-tight mb-8">
              GAB World provides modular pods and structures built for speed,
              quality, and scalability. Our plug-and-play approach enables
              high-growth sectors to deploy tailored, durable, and fully
              compliant solutions with confidence.
            </p>

            {/* Sector list */}
            <ul className="divide-y divide-[#BDBDBD]">
              {sectors.map((sector, i) => (
                <motion.li
                  key={sector.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.1 * i + 0.3,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group"
                >
                  <a
                    href={sector.href}
                    className="flex items-center justify-between py-4 gap-3 transition-colors duration-200"
                  >
                    <span
                      className={`text-base transition-colors duration-200 ${
                        hovered === i ? "text-orange-500" : "text-gray-800"
                      }`}
                    >
                      {sector.label}
                    </span>
                    <motion.div
                      animate={hovered === i ? { x: 2 } : { x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2"
                    >
                      {i === 0 && (
                        <span className="text-sm font-medium text-[#101010]">
                          Know More
                        </span>
                      )}
                      {/* 34×34 square border box */}
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: 34,
                          height: 34,
                          border: "1px solid #E5E5E5",
                        }}
                      >
                        <ArrowUpRight
                          className="w-4 h-4"
                          style={{ color: i === 0 ? "#101010" : "#848484" }}
                        />
                      </div>
                    </motion.div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
