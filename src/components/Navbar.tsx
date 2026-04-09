"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 30);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[815px] transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-lg shadow-lg shadow-black/5"
          : "bg-white backdrop-blur-md"
      } rounded-full px-6 py-3 flex items-center justify-between`}
    >
      {/* Logo */}
      <Link href="/" className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Azariah Arch"
          className="h-10 w-auto"
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-[#101010] hover:text-gray-900 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="hidden md:inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
      >
        Talk to an expert
      </motion.a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-1"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-5 h-0.5 bg-gray-900 rounded-full origin-center transition-all"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-5 h-0.5 bg-gray-900 rounded-full"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-5 h-0.5 bg-gray-900 rounded-full origin-center transition-all"
        />
      </button>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          menuOpen
            ? { opacity: 1, y: 0, pointerEvents: "auto" }
            : { opacity: 0, y: -10, pointerEvents: "none" }
        }
        transition={{ duration: 0.25 }}
        className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 md:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/contact"
          className="inline-flex justify-center bg-orange-500 text-white text-sm px-5 py-2.5 rounded-full"
        >
          Talk to an expert
        </a>
      </motion.div>
    </motion.header>
  );
}
