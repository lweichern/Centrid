export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Kitchen";
  sqft: string;
  location: string;
  year: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  gridSpan?: "tall" | "wide";
}

export const projects: Project[] = [
  {
    id: "aetas-residence",
    title: "Aetas Residence",
    category: "Residential",
    sqft: "",
    location: "Selangor",
    year: 2024,
    image: "/projects/aetas-residence.webp",
    gallery: Array.from({ length: 8 }, (_, i) => `/projects/aetas-residence/${i + 1}.webp`),
    description:
      "A refined residential project showcasing bespoke kitchen design with marble island countertops, custom cabinetry, and elegant wainscoting throughout.",
    features: ["Marble kitchen island", "Custom cabinetry", "Wainscoting details", "Designer lighting"],
    gridSpan: "tall",
  },
  {
    id: "alix-residence",
    title: "Alix Residence",
    category: "Residential",
    sqft: "",
    location: "Selangor",
    year: 2024,
    image: "/projects/alix-residence.webp",
    gallery: Array.from({ length: 7 }, (_, i) => `/projects/alix-residence/${i + 1}.webp`),
    description:
      "A luxury residence featuring statement lighting, premium marble dining surfaces, and a curated palette of dark tones balanced with gold accents.",
    features: ["Sculptural lighting", "Marble dining", "Gold accent palette", "Designer furniture"],
  },
  {
    id: "mont-kiara-damai",
    title: "Mont Kiara Damai",
    category: "Residential",
    sqft: "",
    location: "Mont Kiara",
    year: 2024,
    image: "/projects/mont-kiara-damai.webp",
    gallery: Array.from({ length: 8 }, (_, i) => `/projects/mont-kiara-damai/${i + 1}.webp`),
    description:
      "A grand residential transformation with dark timber flooring, crystal chandelier centerpiece, and a harmonious blend of traditional and contemporary design elements.",
    features: ["Dark timber flooring", "Crystal chandelier", "Traditional-modern fusion", "Open dining layout"],
    gridSpan: "wide",
  },
  {
    id: "park-place-desa-park-city",
    title: "Park Place Desa Park City",
    category: "Residential",
    sqft: "",
    location: "Desa Park City",
    year: 2025,
    image: "/projects/park-place-desa-park-city.webp",
    gallery: Array.from({ length: 8 }, (_, i) => `/projects/park-place-desa-park-city/${i + 1}.webp`),
    description:
      "A contemporary home design featuring warm wood tones, Japanese-inspired elements, and thoughtful spatial planning across bedrooms, foyer, and living areas.",
    features: ["Japanese-inspired design", "Warm wood tones", "Custom built-ins", "Ambient lighting"],
  },
  {
    id: "the-eighth-elmina-green",
    title: "The Eighth Elmina Green",
    category: "Residential",
    sqft: "",
    location: "Elmina",
    year: 2025,
    image: "/projects/the-eighth-elmina-green.webp",
    gallery: Array.from({ length: 7 }, (_, i) => `/projects/the-eighth-elmina-green/${i + 1}.webp`),
    description:
      "A modern residential interior with a light Scandinavian-inspired palette, natural textures, and layered lighting that creates a warm, inviting atmosphere.",
    features: ["Scandinavian palette", "Natural textures", "Layered lighting", "Feature wall design"],
    gridSpan: "tall",
  },
  {
    id: "eco-ardence-amber",
    title: "Eco Ardence Amber",
    category: "Residential",
    sqft: "",
    location: "Setia Alam",
    year: 2025,
    image: "/projects/eco-ardence-amber.webp",
    gallery: Array.from({ length: 8 }, (_, i) => `/projects/eco-ardence-amber/${i + 1}.webp`),
    description:
      "A creative residential project with standout features including an arched coffee bar with timber slat detailing, a spa room, and playful kids' room designs.",
    features: ["Arched coffee bar", "Timber slat detailing", "Spa room", "Creative kids' rooms"],
    gridSpan: "wide",
  },
  {
    id: "the-pulse-residence",
    title: "The Pulse Residence",
    category: "Residential",
    sqft: "",
    location: "Selangor",
    year: 2025,
    image: "/projects/the-pulse-residence.webp",
    gallery: Array.from({ length: 7 }, (_, i) => `/projects/the-pulse-residence/${i + 1}.webp`),
    description:
      "A clean, modern living space with minimalist design, walnut wood accents, and an open-plan layout that maximizes natural light and comfort.",
    features: ["Minimalist design", "Walnut wood accents", "Open-plan layout", "Dressing wardrobe"],
  },
  {
    id: "regent-residence",
    title: "Regent Residence",
    category: "Residential",
    sqft: "",
    location: "Selangor",
    year: 2025,
    image: "/projects/regent-residence.webp",
    gallery: Array.from({ length: 8 }, (_, i) => `/projects/regent-residence/${i + 1}.webp`),
    description:
      "An elegant home featuring glass pendant lighting, contemporary dining spaces, and a cohesive design language across kitchen, study, and living areas.",
    features: ["Glass pendant lighting", "Contemporary dining", "Custom kitchen", "Study room design"],
  },
  {
    id: "north-garden",
    title: "North Garden",
    category: "Residential",
    sqft: "",
    location: "Selangor",
    year: 2025,
    image: "/projects/north-garden.webp",
    gallery: Array.from({ length: 10 }, (_, i) => `/projects/north-garden/${i + 1}.webp`),
    description:
      "A sophisticated residence with a statement curved sofa, arc floor lamp, textured area rug, and refined material selections throughout bedrooms and bathrooms.",
    features: ["Statement curved sofa", "Designer arc lamp", "Textured finishes", "Master suite design"],
  },
  {
    id: "polo-residence",
    title: "Polo Residence",
    category: "Residential",
    sqft: "",
    location: "Selangor",
    year: 2025,
    image: "/projects/polo-residence.webp",
    gallery: Array.from({ length: 18 }, (_, i) => `/projects/polo-residence/${i + 1}.webp`),
    description:
      "A modern residence featuring warm cove lighting, rich walnut wood panelling, and a neutral cream palette that creates an inviting yet sophisticated atmosphere across living, dining, and bedroom spaces.",
    features: ["Cove ceiling lighting", "Walnut wood panelling", "Custom TV console", "Master bedroom suite"],
    gridSpan: "tall",
  },
  {
    id: "gamuda-gardens",
    title: "Gamuda Gardens",
    category: "Residential",
    sqft: "",
    location: "Gamuda Gardens",
    year: 2025,
    image: "/projects/gamuda-gardens.webp",
    gallery: Array.from({ length: 14 }, (_, i) => `/projects/gamuda-gardens/${i + 1}.webp`),
    description:
      "A minimalist home with soaring double-height ceilings, clean concrete textures, and natural light flooding through sheer curtains — complemented by a landscaped garden, playhouse, and thoughtfully designed utility spaces.",
    features: ["Double-height living", "Minimalist palette", "Landscaped garden", "Playhouse design"],
  },
  {
    id: "pj-midtown-office",
    title: "PJ Midtown Office",
    category: "Commercial",
    sqft: "",
    location: "Petaling Jaya",
    year: 2025,
    image: "/projects/pj-midtown-office.webp",
    gallery: Array.from({ length: 10 }, (_, i) => `/projects/pj-midtown-office/${i + 1}.webp`),
    description:
      "A sleek corporate office featuring an industrial-modern reception with concrete-effect walls, timber slat accents, and ambient cove lighting — complemented by a director's suite, multipurpose room, and treatment rooms.",
    features: ["Concrete reception lobby", "Timber slat accents", "Director's suite", "Treatment rooms"],
    gridSpan: "wide",
  },
  {
    id: "wongkok-bloomsvale",
    title: "Wong Kok Bloomsvale",
    category: "Commercial",
    sqft: "",
    location: "Bloomsvale",
    year: 2025,
    image: "/projects/wongkok-bloomsvale.webp",
    gallery: Array.from({ length: 4 }, (_, i) => `/projects/wongkok-bloomsvale/${i + 1}.webp`),
    description:
      "A Hong Kong-inspired restaurant facade design for Wong Kok, featuring warm timber cladding, traditional Chinese signage, and a welcoming storefront with textured glass and neon accents.",
    features: ["Timber facade cladding", "Traditional signage", "Textured glass panels", "Neon accents"],
  },
  {
    id: "wongkok-leisure-mall",
    title: "Wong Kok Leisure Mall",
    category: "Commercial",
    sqft: "",
    location: "Leisure Mall",
    year: 2025,
    image: "/projects/wongkok-leisure-mall.webp",
    gallery: Array.from({ length: 9 }, (_, i) => `/projects/wongkok-leisure-mall/${i + 1}.webp`),
    description:
      "A contemporary restaurant interior for Wong Kok featuring a signature circular backlit wall feature, rattan-backed seating, lush vertical greenery, and arched alcove booths in a warm neutral palette.",
    features: ["Circular light feature", "Rattan seating", "Vertical greenery", "Arched alcove booths"],
    gridSpan: "tall",
  },
];

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: "design" | "build" | "kitchen";
}

export const services: Service[] = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "From concept to completion, we craft spaces that reflect your personality. Our design team blends aesthetics with functionality to create interiors that inspire daily living.",
    icon: "design",
  },
  {
    number: "02",
    title: "Build & Renovation",
    description:
      "We bring designs to life with precision craftsmanship. Our in-house build team ensures every detail is executed flawlessly, from structural work to finishing touches.",
    icon: "build",
  },
  {
    number: "03",
    title: "Kitchen Design",
    description:
      "As an authorized Signature Kitchen partner, we deliver Malaysia's finest kitchen solutions — premium materials, smart storage, and layouts tailored to how you live and cook.",
    icon: "kitchen",
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2009",
    title: "Where It All Began",
    description: "James Leow and Simon Siew first met working in the same industry, beginning a decade-long friendship and professional collaboration.",
  },
  {
    year: "2019",
    title: "Centrid Design Founded",
    description: "After 10 years side by side, James and Simon combined their expertise to establish Centrid Design Sdn. Bhd. in Selangor, Malaysia.",
  },
  {
    year: "2020",
    title: "Surviving the Pandemic",
    description: "The global pandemic tested our resilience but deepened our gratitude for the trust our customers placed in us. We emerged stronger than before.",
  },
  {
    year: "2021",
    title: "Signature Kitchen & Baagus Partnership",
    description: "Became an authorized dealer for Signature Kitchen and Baagus, expanding our service range with Malaysia's leading kitchen and blinds manufacturers.",
  },
  {
    year: "2025",
    title: "150+ Projects & Growing",
    description: "Expanded our team and portfolio to over 150 completed projects, serving families and businesses across the Klang Valley and beyond.",
  },
];

export interface Value {
  title: string;
  description: string;
  icon: "craftsmanship" | "innovation" | "client" | "sustainability";
}

export const values: Value[] = [
  {
    title: "Compassion",
    description:
      "Every project is approached with heart. We believe a house is where life unfolds, memories are made, and futures are built — and we treat every space with that care.",
    icon: "client",
  },
  {
    title: "Craftsmanship",
    description:
      "Every joint, every finish, every detail matters. We partner with skilled artisans and use premium materials to ensure lasting quality in every project we deliver.",
    icon: "craftsmanship",
  },
  {
    title: "Dedication",
    description:
      "With passion as our foundation and customer fulfillment as our goal, we push boundaries and deliver excellence — turning visions into reality, no matter the challenge.",
    icon: "innovation",
  },
  {
    title: "Trust",
    description:
      "Built through years of delivering on our promises. The trust our customers placed in us — even through the toughest times — continues to inspire everything we do.",
    icon: "sustainability",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 20, suffix: "+", label: "Awards & Features" },
];

export interface KitchenFeature {
  title: string;
  description: string;
  icon: "materials" | "layout" | "storage" | "installation" | "warranty" | "support";
}

export const kitchenFeatures: KitchenFeature[] = [
  {
    title: "Premium Materials",
    description: "Imported countertops, high-grade laminates, and solid wood options built to last a lifetime.",
    icon: "materials",
  },
  {
    title: "Custom Layouts",
    description: "Every kitchen is designed to your exact specifications — L-shape, U-shape, island, or galley.",
    icon: "layout",
  },
  {
    title: "Smart Storage",
    description: "Innovative pull-out systems, corner carousels, and hidden compartments that maximize every inch.",
    icon: "storage",
  },
  {
    title: "Professional Installation",
    description: "Factory-trained installers ensure a perfect fit and finish, every single time.",
    icon: "installation",
  },
  {
    title: "10-Year Warranty",
    description: "Backed by Signature Kitchen's industry-leading warranty for total peace of mind.",
    icon: "warranty",
  },
  {
    title: "After-Sales Support",
    description: "Dedicated service team for maintenance, adjustments, and any post-installation needs.",
    icon: "support",
  },
];
