"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const IntegrityIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_37_246)">
      <g clipPath="url(#clip1_37_246)">
        <g clipPath="url(#clip2_37_246)">
          <mask
            id="mask0_37_246"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="60"
            height="61"
          >
            <path
              d="M60 0.000488281H0V60.0005H60V0.000488281Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_37_246)">
            <path
              d="M16.2499 42.5006V22.5006H18.7499V42.5006H16.2499ZM28.7499 42.5006V22.5006H31.2499V42.5006H28.7499ZM8.84619 17.5006V15.3849L29.9999 5.28931L51.1537 15.3849V17.5006H8.84619ZM15.4662 15.0006H44.5337L29.9999 8.12556L15.4662 15.0006ZM8.84619 50.0006V47.5006H36.6155C36.6347 47.9589 36.6747 48.386 36.7355 48.7818C36.7964 49.1776 36.8716 49.5839 36.9612 50.0006H8.84619ZM41.2499 35.6737V22.5006H43.7499V34.4237L41.2499 35.6737ZM49.9999 58.0774C47.5416 57.4653 45.5168 56.0656 43.9255 53.8781C42.3343 51.6906 41.5387 49.2539 41.5387 46.5681V41.1543L49.9999 36.9237L58.4612 41.1543V46.5681C58.4612 49.2539 57.6655 51.6906 56.0743 53.8781C54.483 56.0656 52.4582 57.4653 49.9999 58.0774ZM48.1874 51.4431L55.7693 43.8756L54.2018 42.3081L48.1874 48.2937L45.7499 45.8562L44.1824 47.4381L48.1874 51.4431Z"
              fill="#101010"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_37_246">
        <rect width="60" height="60" fill="white" />
      </clipPath>
      <clipPath id="clip1_37_246">
        <rect width="60" height="60" fill="white" />
      </clipPath>
      <clipPath id="clip2_37_246">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const QualityIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_37_262)">
      <g clipPath="url(#clip1_37_262)">
        <mask
          id="mask0_37_262"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="60"
          height="61"
        >
          <path d="M60 0.000488281H0V60.0005H60V0.000488281Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_37_262)">
          <path
            d="M28.7497 51.2504V31.5054C26.4035 31.5054 24.1614 31.067 22.0235 30.1904C19.886 29.3137 17.9918 28.05 16.341 26.3991C14.6906 24.7487 13.4374 22.845 12.5816 20.6879C11.7258 18.5308 11.2979 16.2825 11.2979 13.9429V11.4429H13.7979C16.0924 11.4429 18.3139 11.8906 20.4622 12.786C22.611 13.6814 24.5049 14.9516 26.1441 16.5966C27.4679 17.9204 28.5408 19.4252 29.3629 21.111C30.1849 22.7968 30.7289 24.5789 30.9947 26.4572C31.3635 25.7489 31.777 25.0831 32.2354 24.4597C32.6937 23.836 33.2129 23.2341 33.7929 22.6541C35.4391 21.0095 37.3416 19.7393 39.5004 18.8435C41.6587 17.9481 43.9084 17.5004 46.2496 17.5004H48.7496V20.0004C48.7496 22.3429 48.3014 24.5937 47.4047 26.7529C46.5085 28.9125 45.2367 30.8158 43.5896 32.4629C41.943 34.1095 40.0613 35.3608 37.9446 36.2166C35.8276 37.0725 33.596 37.5004 31.2497 37.5004V51.2504H28.7497ZM28.7979 28.9429C28.7979 26.9429 28.4124 25.0366 27.6416 23.2241C26.8708 21.4116 25.777 19.797 24.3604 18.3804C22.9437 16.9637 21.3291 15.87 19.5166 15.0991C17.7041 14.3283 15.7979 13.9429 13.7979 13.9429C13.7979 15.9429 14.1729 17.8595 14.9229 19.6929C15.6729 21.5262 16.7562 23.1512 18.1729 24.5679C19.5895 25.9845 21.2145 27.0679 23.0479 27.8179C24.8812 28.5679 26.7979 28.9429 28.7979 28.9429ZM31.2497 35.0004C33.2497 35.0004 35.1559 34.6254 36.9684 33.8754C38.7809 33.1254 40.3955 32.042 41.8121 30.6254C43.2288 29.2087 44.3226 27.5837 45.0934 25.7504C45.8643 23.917 46.2496 22.0004 46.2496 20.0004C44.2496 20.0004 42.333 20.3858 40.4996 21.1566C38.6663 21.9275 37.0413 23.0212 35.6246 24.4379C34.208 25.8545 33.1246 27.4691 32.3746 29.2816C31.6246 31.0941 31.2497 33.0004 31.2497 35.0004Z"
            fill="#101010"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_37_262">
        <rect width="60" height="60" fill="white" />
      </clipPath>
      <clipPath id="clip1_37_262">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const InnovationIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_37_277)">
      <g clipPath="url(#clip1_37_277)">
        <mask
          id="mask0_37_277"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="60"
          height="61"
        >
          <path d="M60 0.000488281H0V60.0005H60V0.000488281Z" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_37_277)">
          <path
            d="M13.4519 17.0199H46.5L43.1731 13.0292C43.0127 12.8692 42.8283 12.7411 42.62 12.6449C42.4117 12.5486 42.1954 12.5005 41.9712 12.5005H17.9806C17.7565 12.5005 17.5402 12.5486 17.3319 12.6449C17.1235 12.7411 16.9392 12.8692 16.7787 13.0292L13.4519 17.0199ZM25 32.4042L30 29.9042L35 32.4042V19.5199H25V32.4042ZM14.0387 50.0005C12.92 50.0005 11.9671 49.6072 11.18 48.8205C10.3933 48.0334 10 47.0805 10 45.9617V18.7167C10 18.2297 10.0777 17.7713 10.2331 17.3417C10.3885 16.9122 10.6217 16.5163 10.9325 16.1542L14.8269 11.4767C15.189 10.9892 15.6417 10.6213 16.185 10.373C16.7283 10.1247 17.3108 10.0005 17.9325 10.0005H41.9712C42.5929 10.0005 43.1833 10.1247 43.7425 10.373C44.3021 10.6213 44.7629 10.9892 45.125 11.4767L49.0675 16.2505C49.3783 16.6126 49.6115 17.0163 49.7669 17.4617C49.9223 17.9076 50 18.374 50 18.8611V24.6642C49.5417 24.6959 49.1098 24.7503 48.7044 24.8274C48.299 24.9044 47.8975 25.0182 47.5 25.1686V19.5199H37.5V34.1592L35.9569 35.7024L30 32.7411L22.5 36.4911V19.5199H12.5V45.9617C12.5 46.4105 12.6442 46.7792 12.9325 47.068C13.2212 47.3563 13.59 47.5005 14.0387 47.5005H29.6156V50.0005H14.0387ZM35.5769 50.0005V44.4767L48.9087 31.2074C49.1554 30.9603 49.4119 30.7936 49.6781 30.7074C49.944 30.6207 50.21 30.5774 50.4762 30.5774C50.7517 30.5774 51.0304 30.6311 51.3125 30.7386C51.5946 30.8457 51.8429 31.0067 52.0575 31.2217L54.37 33.5824C54.5754 33.829 54.7317 34.0855 54.8387 34.3517C54.9462 34.6176 55 34.8834 55 35.1492C55 35.4155 54.9487 35.684 54.8462 35.9549C54.7437 36.2257 54.585 36.4844 54.37 36.7311L41.1012 50.0005H35.5769ZM37.7888 47.7892H40.1637L48.8319 39.1061L47.6587 37.9186L46.5194 36.6974L37.7888 45.4142V47.7892ZM47.6587 37.9186L46.5194 36.6974L48.8319 39.1061L47.6587 37.9186Z"
            fill="#101010"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_37_277">
        <rect width="60" height="60" fill="white" />
      </clipPath>
      <clipPath id="clip1_37_277">
        <rect width="60" height="60" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const values = [
  {
    icon: <IntegrityIcon />,
    title: "Integrity",
    body: "We conduct our business with honesty, transparency, and accountability, building trust with clients, partners, and stakeholders at all times.",
  },
  {
    icon: <QualityIcon />,
    title: "Quality Excellence",
    body: "We are committed to delivering superior architectural designs and construction services that meet and exceed industry standards and client expectations.",
  },
  {
    icon: <InnovationIcon />,
    title: "Innovation",
    body: "We embrace creativity and modern technologies to develop unique, functional, and sustainable design and construction solutions.",
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-labelledby="core-values-heading"
      className="relative py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-widest text-[#101010] uppercase mb-4"
          >
            Core Values
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="core-values-heading"
            className="text-4xl md:text-5xl font-medium text-[#101010] leading-tight"
          >
            Built On Strong Values
          </motion.h2>
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={fadeUp}>
              {/* Icon */}
              <div className="mb-6 h-12 flex items-end">{value.icon}</div>

              <h3 className="text-xl font-semibold text-[#101010] mb-4">
                {value.title}
              </h3>
              <p className="text-[#101010] text-sm leading-relaxed">
                {value.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
