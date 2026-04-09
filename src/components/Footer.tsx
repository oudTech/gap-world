"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      id="contact"
      ref={ref}
      aria-label="Site footer"
      className="relative bg-white w-full"
    >
      {/* ── Row 1: Quick Links | Head Office | Contact ──
          Mobile: stacked, no borders
          Desktop: horizontal with full-width border lines  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row w-full md:border-t md:border-b md:border-[#BDBDBD]"
      >
        {/* Left gutter — desktop only */}
        <div className="hidden md:block md:w-[5%] md:border-r md:border-[#BDBDBD]" />

        {/* Quick Links */}
        <motion.div
          variants={fadeUp}
          className="flex-1 px-6 md:px-8 py-8 md:py-12 md:border-r md:border-[#BDBDBD]"
        >
          <h4 className="text-sm font-semibold text-[#848484] uppercase mb-3">
            Quick Links
          </h4>
          <ul className="space-y-3 md:space-y-1">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm md:text-xs text-[#101010] hover:text-orange-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Head Office */}
        <motion.div
          variants={fadeUp}
          className="md:w-[22%] px-6 md:px-8 py-8 md:py-12"
        >
          <h4 className="text-sm font-semibold text-[#848484] uppercase mb-4">
            Head Office
          </h4>
          <address className="not-italic text-sm md:text-xs text-[#101010] leading-relaxed mb-6">
            24 Reverend Samson Chukwu
          </address>
          <h4 className="text-sm font-semibold text-[#848484] uppercase">
            Mauritius
          </h4>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={fadeUp}
          className="md:w-[22%] px-6 md:px-8 py-8 md:py-12 md:border-r md:border-[#BDBDBD]"
        >
          <h4 className="text-sm font-semibold text-[#848484] uppercase mb-4">
            Contact
          </h4>
          <a
            href="tel:08107355412"
            className="block text-sm md:text-xs text-[#101010] hover:text-orange-500 transition-colors mb-3"
          >
            08107355412
          </a>
          <a
            href="mailto:enquiries.india@modulex.in"
            className="block text-sm md:text-xs text-[#101010] hover:text-orange-500 transition-colors break-all"
          >
            enquiries.india@modulex.in
          </a>
        </motion.div>

        {/* Right gutter — desktop only */}
        <div className="hidden md:block md:w-[5%]" />
      </motion.div>

      {/* ── Row 2: Follow Us | Policies ──
          Mobile: stacked, no borders
          Desktop: horizontal with border  */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row w-full md:border-b md:border-[#BDBDBD]"
      >
        {/* Left gutter — desktop only */}
        <div className="hidden md:block md:w-[5%] md:border-r md:border-[#BDBDBD]" />

        {/* Follow Us */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex items-center gap-5 px-6 md:px-8 py-6 md:border-r md:border-[#BDBDBD]"
        >
          <span className="text-xs font-semibold tracking-widest text-[#BDBDBD] uppercase">
            Follow Us
          </span>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15 }}
            className="text-[#BDBDBD] hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            aria-label="YouTube"
            whileHover={{ scale: 1.15 }}
            className="text-[#BDBDBD] hover:text-red-500 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Policies */}
        <motion.div
          variants={fadeUp}
          className="md:w-[44%] flex flex-wrap items-center gap-6 md:gap-8 px-6 md:px-8 py-6 md:justify-end md:border-r md:border-[#BDBDBD]"
        >
          {["Privacy Policy", "Cookie Policy", "Terms and Conditions"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#848484] hover:text-[#101010] transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ),
          )}
        </motion.div>

        {/* Right gutter — desktop only */}
        <div className="hidden md:block md:w-[5%]" />
      </motion.div>

      {/* ── Modulex note ── */}
      <div className="py-6 px-6 md:px-8 flex justify-start md:justify-end">
        <p className="text-xs text-[#848484] leading-relaxed max-w-xl text-left">
          Modulex is an incubation by Red Ribbon Asset Management Plc, a
          Mainstream Impact Investment company following the principles of the
          &quot;Triple P Bottom Line&quot; of Planet, People and Profit.
        </p>
      </div>
    </footer>
  );
}
