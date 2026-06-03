"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMobileOpen
            ? "bg-navy"
            : isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Centrid Hub"
                width={140}
                height={40}
                className={`h-10 w-auto transition-all duration-300 ${
                  isMobileOpen || !isScrolled ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isScrolled
                        ? isActive
                          ? "text-primary"
                          : "text-navy hover:text-primary"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div
                        className={`absolute bottom-0 left-4 right-4 h-0.5 ${
                          isScrolled ? "bg-primary" : "bg-white"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary-600 shadow-md shadow-primary/20"
                    : "bg-white text-navy hover:bg-white/90 shadow-md"
                }`}
              >
                Get a Quote
              </Link>
            </div>

            <button
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4">
                <span
                  className={`absolute left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                    isMobileOpen
                      ? "bg-white top-1/2 -translate-y-1/2 rotate-45"
                      : `${isScrolled ? "bg-navy" : "bg-white"} top-0`
                  }`}
                />
                <span
                  className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 rounded-full transition-all duration-200 ${
                    isMobileOpen
                      ? "bg-white opacity-0"
                      : `${isScrolled ? "bg-navy" : "bg-white"} opacity-100`
                  }`}
                />
                <span
                  className={`absolute left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                    isMobileOpen
                      ? "bg-white bottom-1/2 translate-y-1/2 -rotate-45"
                      : `${isScrolled ? "bg-navy" : "bg-white"} bottom-0`
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-3xl font-serif py-3 transition-colors ${
                  isActive ? "text-primary-400" : "text-white hover:text-primary-300"
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
          <div className="mt-12 text-white/50 text-sm">
            {CONTACT.phone} &bull; {CONTACT.email}
          </div>
        </div>
      </div>
    </>
  );
}
