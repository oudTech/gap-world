export type Room = {
  name: string;
  heading: string;
  body: string;
  images: string[];
};

export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  hero: string;
  rooms: Room[];
};

export const projects: Project[] = [
  {
    slug: "jevenus-home",
    title: "Jevenus Home.",
    thumbnail: "/images/about-hero.jpg",
    hero: "/images/about-hero.jpg",
    rooms: [
      {
        name: "Architectural Form",
        heading: "A Dialogue Between Structure and Nature",
        body: "The exterior silhouette features a bold interplay of geometric volumes and natural materials. Designed to harmonize with the site's topography, the facade presents a modern identity that remains timeless and inviting.",
        images: ["/images/porfolio-hero.jpg"],
      },
      {
        name: "Facade Details",
        heading: "Textural Depth and Refined Craftsmanship",
        body: "Every external finish was selected for its tactile quality and ability to weather beautifully over time. From the bespoke stonework to the precision-engineered cladding, the exterior showcases a commitment to durable elegance.",
        images: ["/images/hero-img.jpg", "/images/jevenus.jpg"],
      },
      {
        name: "Landscaping",
        heading: "Curated Surroundings for Outdoor Living",
        body: "The perimeter is defined by thoughtful landscaping that balances privacy with openness. Native flora and structured pathways create an intuitive flow around the property, extending the home’s footprint into the natural environment.",
        images: ["/images/about-hero.jpg"],
      },
    ],
  },
  {
    slug: "sunlight-home",
    title: "Sunlight Home.",
    thumbnail: "/images/carousel-4.jpg",
    hero: "/images/carousel-4.jpg",
    rooms: [
      {
        name: "Luminous Facade",
        heading: "Harnessing Light Through Materiality",
        body: "The exterior is designed to interact with the sun's path, utilizing reflective surfaces and expansive glazing to illuminate the structure. The clean, white finishes emphasize the home’s minimalist ethos and vibrant energy.",
        images: ["/images/carousel-1.jpg"],
      },
      {
        name: "Outdoor Sanctuary",
        heading: "A Seamless Transition to the Outdoors",
        body: "Large-scale patio areas and cantilevered overhangs create sheltered outdoor spaces that function as a natural extension of the home. It is a sanctuary designed for both quiet reflection and open-air social gatherings.",
        images: ["/images/carousel-2.jpg", "/images/10.jpg"],
      },
      {
        name: "Quality Architecture",
        heading: "Precision Greens and Geometric Vistas",
        body: "The garden design mirrors the precision of the architecture, featuring tiered levels and sculptural plant choices. This grounded approach ensures that the heart of the property remains connected to its lush, sun-drenched setting.",
        images: ["/images/sunshine.jpg"],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
