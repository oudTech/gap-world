"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Room } from "@/lib/projects";

interface RoomSectionProps {
  room: Room;
  index: number;
}

export default function RoomSection({ room }: RoomSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby={`room-${room.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="relative py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start"
        >
          <motion.h2
            variants={fadeUp}
            id={`room-${room.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-5xl md:text-6xl font-medium text-[#101010] leading-tight"
          >
            {room.name}
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#101010] leading-snug">
              {room.heading}
            </h3>
            <p className="text-[#101010] text-base leading-relaxed">
              {room.body}
            </p>
          </motion.div>
        </motion.div>

        {/* Image(s) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`grid gap-4 ${room.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}
        >
          {room.images.map((src, i) => (
            <motion.div
              key={src}
              variants={fadeUp}
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: room.images.length > 1 ? "4/3" : "16/7",
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%)",
              }}
            >
              <Image
                src={src}
                alt={`${room.name} view ${i + 1}`}
                fill
                className="object-cover"
                sizes={
                  room.images.length > 1
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "100vw"
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
