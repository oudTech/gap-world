"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const MissionIcon = () => (
  <svg
    width="51"
    height="60"
    viewBox="0 0 51 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.978027 59.2176V0.521973H49.891L43.2127 15.6353L49.891 30.7478H5.86934V59.2176H0.978027ZM5.86934 25.8565H42.4978L37.8952 15.6353L42.4978 5.41328H5.86934V25.8565Z"
      fill="#101010"
    />
  </svg>
);

const VisionIcon = () => (
  <svg
    width="49"
    height="32"
    viewBox="0 0 49 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.4119 24.9682C26.9106 24.9682 29.0309 24.0936 30.7728 22.3444C32.5145 20.5952 33.3854 18.4712 33.3854 15.9725C33.3854 13.4737 32.5109 11.3535 30.7617 9.61161C29.0125 7.86984 26.8885 6.99895 24.3898 6.99895C21.891 6.99895 19.7707 7.87347 18.0289 9.62272C16.2871 11.3719 15.4162 13.4959 15.4162 15.9946C15.4162 18.4934 16.2907 20.6136 18.04 22.3555C19.7891 24.0973 21.9131 24.9682 24.4119 24.9682ZM24.4009 22.6229C22.5566 22.6229 20.9889 21.9774 19.6979 20.6864C18.407 19.3954 17.7615 17.8279 17.7615 15.9836C17.7615 14.1393 18.407 12.5717 19.6979 11.2807C20.9889 9.9897 22.5566 9.34426 24.4009 9.34426C26.2451 9.34426 27.8127 9.9897 29.1037 11.2807C30.3947 12.5717 31.0402 14.1393 31.0402 15.9836C31.0402 17.8279 30.3947 19.3954 29.1037 20.6864C27.8127 21.9774 26.2451 22.6229 24.4009 22.6229ZM24.4076 31.9672C19.0813 31.9672 14.2272 30.5178 9.84526 27.619C5.46329 24.7202 2.18156 20.8417 0 15.9836C2.18156 11.1254 5.46103 7.24692 9.83857 4.34813C14.216 1.44934 19.0679 0 24.3941 0C29.7203 0 34.5744 1.44934 38.9564 4.34813C43.3383 7.24692 46.62 11.1254 48.8017 15.9836C46.62 20.8417 43.3406 24.7202 38.9632 27.619C34.5856 30.5178 29.7338 31.9672 24.4076 31.9672ZM24.4009 29.5082C29.032 29.5082 33.284 28.2889 37.157 25.8504C41.0299 23.4118 43.991 20.1229 46.0402 15.9836C43.991 11.8442 41.0299 8.55531 37.157 6.11675C33.284 3.6782 29.032 2.45902 24.4009 2.45902C19.7697 2.45902 15.5176 3.6782 11.6447 6.11675C7.77172 8.55531 4.81067 11.8442 2.76148 15.9836C4.81067 20.1229 7.77172 23.4118 11.6447 25.8504C15.5176 28.2889 19.7697 29.5082 24.4009 29.5082Z"
      fill="#101010"
    />
  </svg>
);

const items = [
  {
    icon: <MissionIcon />,
    title: "Our Mission",
    body: "Our mission is to consistently deliver exceptional architecture and construction projects by upholding integrity, focusing on achievable solutions, and ensuring every structure meets the highest standards, creating spaces that inspire confidence, comfort, and long-term value for our clients.",
  },
  {
    icon: <VisionIcon />,
    title: "Our Vision",
    body: "Our vision is to build a reputation for excellence by creating durable, beautiful, and functional spaces, treating every project uniquely, working transparently within budgets, and consistently delivering results that reflect integrity, quality, and long-term value.",
  },
];

export default function MissionVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="mission-heading"
      className="relative pb-12 md:py-16 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              {/* Icon */}
              <div className="mb-8 h-16 flex items-end">{item.icon}</div>

              <h2
                id={
                  item.title === "Our Mission" ? "mission-heading" : undefined
                }
                className="text-2xl md:text-3xl font-medium text-[#101010] mb-5"
              >
                {item.title}
              </h2>
              <p className="text-[#101010] text-base leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
