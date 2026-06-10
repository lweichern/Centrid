export const SITE_NAME = "Centrid Hub";
export const SITE_TAGLINE = "Interior Design & Build Studio";
export const SITE_DESCRIPTION =
  "Centrid Hub is a premium interior design & build studio based in Selangor, Malaysia. Authorized Signature Kitchen partner with 150+ completed projects.";

export const CONTACT = {
  phone: "+60 12-393 7345",
  email: "simonsiew.centridhub@gmail.com",
  address: "Lot 24, Jalan Teknologi, Taman Sains, Selangor 1, PJU 5 Kota Damansara, 47810 Petaling Jaya, Selangor",
  whatsapp: "https://wa.me/60123937345",
  facebook: "https://www.facebook.com/profile.php?id=61580293599280",
  instagram: "https://www.instagram.com/centrid.design",
  workingHours: {
    weekday: "Mon - Fri: 10:00 AM - 6:00 PM",
    saturday: "Sat: 10:00 AM - 2:00 PM",
    sunday: "Sun: Closed",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Kitchen",
  "Other",
] as const;

export const DESIGN_THEMES = [
  "Muji",
  "Modern",
  "Cream",
  "Luxury",
  "Others",
] as const;

export const COMPANY_INFO = {
  name: "Centrid Design Sdn Bhd",
  tin: "C25940831100",
  msic: "74101",
} as const;

export const ANIMATION = {
  duration: 0.6,
  stagger: 0.1,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 100, damping: 20 },
} as const;
