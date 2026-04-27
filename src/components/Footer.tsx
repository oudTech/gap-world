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
            24 Reverend Samson Chukwu, Woji, PortHarcourt
          </address>
          <h4 className="text-sm font-semibold text-[#848484] uppercase">
            Nigeria
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
            href="tel:08063443970"
            className="block text-sm md:text-xs text-[#101010] hover:text-orange-500 transition-colors mb-3"
          >
            08063443970
          </a>
          <a
            href="tel:07082666407"
            className="block text-sm md:text-xs text-[#101010] hover:text-orange-500 transition-colors mb-3"
          >
            07082666407
          </a>
          <a
            href="mailto:enquiries.india@modulex.in"
            className="block text-sm md:text-xs text-[#101010] hover:text-orange-500 transition-colors break-all"
          >
            godwinsazariah2017@gmail.com
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
            aria-label="Whatsapp"
            whileHover={{ scale: 1.15 }}
            className="text-[#BDBDBD] hover:text-blue-600 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_224_51)">
                <path
                  d="M7.99977 9.53251e-08C9.23029 0.000427291 10.4441 0.284706 11.5469 0.830727C12.6496 1.37675 13.6115 2.16979 14.3578 3.14817C15.1041 4.12655 15.6146 5.2639 15.8497 6.47176C16.0847 7.67961 16.038 8.92541 15.7131 10.1123C15.3882 11.2991 14.7939 12.395 13.9764 13.3147C13.1589 14.2345 12.1403 14.9532 10.9998 15.4151C9.85922 15.8769 8.6275 16.0695 7.40041 15.9777C6.17332 15.886 4.98394 15.5124 3.92477 14.886L0.65777 15.974C0.569753 16.0032 0.47535 16.0073 0.385112 15.986C0.294875 15.9646 0.212358 15.9186 0.146785 15.853C0.0812126 15.7874 0.0351676 15.7049 0.0137969 15.6147C-0.00757388 15.5244 -0.00342838 15.43 0.02577 15.342L1.11477 12.076C0.395426 10.8611 0.0104036 9.47753 -0.00119482 8.06572C-0.0127932 6.6539 0.349446 5.26417 1.04873 4.03765C1.74802 2.81113 2.75945 1.79151 3.98029 1.08236C5.20113 0.373212 6.58791 -0.000217827 7.99977 9.53251e-08ZM5.21377 4.004C5.11203 4.00742 5.01225 4.033 4.92141 4.07894C4.83056 4.12488 4.75083 4.19008 4.68777 4.27C4.50777 4.481 3.99977 4.995 3.99977 6.037C3.99977 7.081 4.70477 8.091 4.80377 8.233C4.90177 8.371 6.19177 10.513 8.16677 11.433C8.53344 11.603 8.90677 11.7517 9.28677 11.879C9.75877 12.039 10.1888 12.018 10.5288 11.964C10.9078 11.904 11.6928 11.451 11.8578 10.954C12.0208 10.461 12.0208 10.036 11.9708 9.947C11.9218 9.859 11.7908 9.805 11.5928 9.697C11.3968 9.592 10.4278 9.079 10.2478 9.01C10.0678 8.937 9.93577 8.904 9.80477 9.115C9.67277 9.328 9.29777 9.806 9.18177 9.947C9.06877 10.086 8.95177 10.106 8.75677 10C8.55877 9.895 7.92577 9.67 7.17277 8.946C6.58777 8.385 6.19277 7.688 6.07877 7.477C5.96277 7.264 6.06577 7.151 6.16377 7.044C6.25377 6.95 6.36177 6.798 6.45977 6.673C6.55677 6.551 6.59177 6.463 6.65777 6.32C6.72177 6.179 6.68877 6.054 6.63977 5.949C6.59077 5.844 6.19677 4.797 6.03277 4.372C5.87277 3.959 5.70977 4.017 5.58977 4.009C5.47577 4.004 5.34477 4.004 5.21377 4.004Z"
                  fill="#848484"
                />
              </g>
              <defs>
                <clipPath id="clip0_224_51">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </motion.a>
          <motion.a
            href="#"
            aria-label="YouTube"
            whileHover={{ scale: 1.15 }}
            className="text-[#BDBDBD] hover:text-red-500 transition-colors"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.3667 2.86667 15.725 6.66667 16.5V10.8333H5V8.33333H6.66667V6.25C6.66667 4.64167 7.975 3.33333 9.58333 3.33333H11.6667V5.83333H10C9.54167 5.83333 9.16667 6.20833 9.16667 6.66667V8.33333H11.6667V10.8333H9.16667V16.625C13.375 16.2083 16.6667 12.6583 16.6667 8.33333Z"
                fill="#848484"
              />
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
          GAP-World Nigeria Limited is a full-package architecture and
          construction firm, built on the values of integrity, reliability, and
          trustworthiness.
        </p>
      </div>
    </footer>
  );
}
