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
    thumbnail: "/images/jevenus.png",
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    rooms: [
      {
        name: "Living Room",
        heading: "Spaces Designed for Comfort and Character",
        body: "The living area blends natural textures with clean architectural lines, creating a space that feels both expansive and intimate. Every material was selected to age gracefully and complement the surrounding environment.",
        images: [
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
        ],
      },
      {
        name: "Bathroom",
        heading: "Refined Finishes, Every Detail Considered",
        body: "Premium fittings and bespoke tiling define a bathroom that prioritises function without sacrificing elegance. Warm lighting and carefully positioned mirrors enhance the sense of space throughout.",
        images: [
          "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80",
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80",
        ],
      },
      {
        name: "Kitchen",
        heading: "Built for Living, Crafted for Precision",
        body: "The kitchen is designed around the way people actually cook — intuitive flow, generous surfaces, and durable materials that look as good on day one as they do five years later.",
        images: [
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
        ],
      },
    ],
  },
  {
    slug: "sunlight-home",
    title: "Sunlight Home.",
    thumbnail: "/images/sunlight.png",
    hero: "/images/sunlight.png",
    rooms: [
      {
        name: "Living Room",
        heading: "Natural Light as a Design Element",
        body: "Floor-to-ceiling glazing draws the outside in, flooding each room with daylight at every hour. The open-plan layout encourages flow between spaces while maintaining distinct zones for living and dining.",
        images: [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80",
        ],
      },
      {
        name: "Bathroom",
        heading: "Calm, Spa-Inspired Retreats",
        body: "Stone surfaces and soft ambient lighting create a bathroom that feels like a private retreat. Every fixture was chosen for longevity and tactile quality.",
        images: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=80",
        ],
      },
      {
        name: "Kitchen",
        heading: "Where Functionality Meets Warmth",
        body: "Warm timber cabinetry paired with stone countertops brings a grounded, natural feel to the heart of the home. The layout optimises movement and storage without cluttering the visual space.",
        images: [
          "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1600&q=80",
        ],
      },
    ],
  },
  {
    slug: "praise-home",
    title: "Praise Home.",
    thumbnail: "/images/praise.png",
    hero: "/images/praise.png",
    rooms: [
      {
        name: "Living Room",
        heading: "Architecture That Feels Like Home",
        body: "High ceilings and considered proportions give the living area a sense of openness, while carefully placed joinery keeps the space feeling warm and grounded.",
        images: [
          "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1600&q=80",
        ],
      },
      {
        name: "Bathroom",
        heading: "Precision in Every Detail",
        body: "Seamless surfaces and recessed lighting define a bathroom where quality is evident at every point of contact. The layout maximises usability within a compact footprint.",
        images: [
          "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=80",
          "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=900&q=80",
        ],
      },
      {
        name: "Kitchen",
        heading: "The Social Heart of the Home",
        body: "An island bench anchors the kitchen as the social centre of daily life, inviting conversation while meals are prepared. The selection of finishes was guided by durability and timeless appeal.",
        images: [
          "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&q=80",
        ],
      },
    ],
  },
  {
    slug: "marshal-home",
    title: "Marshal Home.",
    thumbnail: "/images/marshal.png",
    hero: "/images/marshal.png",
    rooms: [
      {
        name: "Living Room",
        heading: "Bold Form, Quiet Elegance",
        body: "Strong geometric lines on the exterior give way to a refined, calm interior palette. The living space is designed to support both everyday life and formal entertaining with equal ease.",
        images: [
          "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80",
        ],
      },
      {
        name: "Bathroom",
        heading: "Monolithic Surfaces, Serene Atmosphere",
        body: "Large-format tiles and a neutral palette create a bathroom where materiality does the work. Clean lines and hidden storage maintain the sense of uncluttered calm.",
        images: [
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
          "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?w=900&q=80",
        ],
      },
      {
        name: "Kitchen",
        heading: "Refined Utility",
        body: "A handleless kitchen in matte finishes delivers visual restraint without compromising on function. Integrated appliances and concealed ventilation keep the design cohesive from every angle.",
        images: [
          "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=1600&q=80",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
