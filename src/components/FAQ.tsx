"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question:
      "What is modular construction, and how is it different from traditional construction?",
    answer:
      "Modular construction involves building sections (modules) off-site in a controlled factory environment, then assembling them on-site. This approach reduces construction time by up to 50%, minimizes on-site waste, ensures higher quality control, and dramatically reduces weather-related delays compared to traditional methods.",
  },
  {
    question: "Why use Azariah-Arch?",
    answer:
      "Azariah-Arch combines cutting-edge design with precision engineering. Our factory-built approach guarantees consistent quality, faster delivery, and cost predictability—without compromising on aesthetics or functionality.",
  },
  {
    question: "What types of projects can Azariah-Arch handle?",
    answer:
      "We handle a wide range of projects including bathroom pods, kitchen units, hospital modules, educational facilities, residential apartments, co-living spaces, retail units, and corporate office fit-outs. If it can be built, we can modularize it.",
  },
  {
    question: "How long does a typical modular project take?",
    answer:
      "Project timelines vary based on complexity and scale, but modular construction is typically 30–50% faster than traditional builds. A standard bathroom pod can be factory-completed in days, while large multi-module projects are typically delivered within weeks.",
  },
  {
    question: "Can Azariah-Arch support projects outside India?",
    answer:
      "Yes. While our head office is based in Nigeria, we have the capacity and logistics network to support projects across Africa, the Middle East, and beyond. Contact us to discuss your specific requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faqs"
      ref={ref}
      aria-labelledby="faq-heading"
      className="relative py-12 md:py-20 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
          >
            FAQS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="faq-heading"
            className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight"
          >
            Everything You Want To Know About Building Smart
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="border border-[#E5E5E5] overflow-hidden divide-y divide-[#E5E5E5]"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              variants={fadeUp}
              className="bg-white"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#101010] leading-snug">
                  {faq.question}
                </span>
                <div className="shrink-0 mt-0.5">
                  {openIndex === i ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask-up"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <path d="M0 20L20 20L20 0L0 0L0 20Z" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask-up)">
                        <path
                          d="M10.4617 5.0563L18 12.595L16.595 14L10.4617 7.887L4.3283 14L2.9233 12.595L10.4617 5.0563Z"
                          fill="#101010"
                        />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask-down"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                      >
                        <path d="M20 0H0V20H20V0Z" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask-down)">
                        <path
                          d="M9.53833 14.9437L2 7.405L3.405 6L9.53833 12.113L15.6717 6L17.0767 7.405L9.53833 14.9437Z"
                          fill="#101010"
                        />
                      </g>
                    </svg>
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-[#101010] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
