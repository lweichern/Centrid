import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageTransition from "@/components/layout/PageTransition";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Centrid Hub | Premium Interior Design & Build Studio",
    template: "%s | Centrid Hub",
  },
  description:
    "Premium interior design & build studio in Selangor, Malaysia. Authorized Signature Kitchen partner with 150+ completed projects.",
  metadataBase: new URL("https://centridhub.com"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Centrid Hub",
    title: "Centrid Hub | Premium Interior Design & Build Studio",
    description:
      "Premium interior design & build studio in Selangor, Malaysia. Authorized Signature Kitchen partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Centrid Hub | Premium Interior Design & Build Studio",
    description:
      "Premium interior design & build studio in Selangor, Malaysia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
