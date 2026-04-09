"use client";

import Image from "next/image";

export default function ImageBanner() {
  return (
    <section aria-label="Project image banner" className="w-full">
      <div className="relative w-full h-60 md:h-120">
        <Image
          src="/images/img-banner.png"
          alt="Architectural project showcase"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
