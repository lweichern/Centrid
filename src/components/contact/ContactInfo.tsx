"use client";

import { CONTACT } from "@/lib/constants";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactInfo() {
  return (
    <div>
      {/* WhatsApp CTA — primary action */}
      <RevealOnScroll>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white rounded-2xl py-5 flex items-center justify-center gap-3 font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-[#25D366]/20"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with Us on WhatsApp
        </a>
      </RevealOnScroll>

      {/* Contact Details Grid */}
      <div className="grid grid-cols-1 gap-4 mt-12">
        {/* Phone */}
        <RevealOnScroll delay={0.05}>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="1.5">
                <path d="M21.97 18.33c0 .36-.08.73-.25 1.09s-.42.7-.77 1.02c-.6.55-1.25.95-1.98 1.2a6.82 6.82 0 01-2.43.39c-1.27 0-2.62-.3-4.03-.91a22.15 22.15 0 01-4.3-2.74 35.1 35.1 0 01-3.87-3.86A21.77 21.77 0 011.6 10.2c-.6-1.4-.91-2.74-.91-4 0-.83.13-1.63.38-2.39.26-.76.66-1.46 1.22-2.08.67-.74 1.41-1.11 2.2-1.11.3 0 .6.07.87.2.28.13.53.33.73.63l2.53 3.57c.2.27.35.52.45.77.1.24.16.47.16.69 0 .28-.08.55-.25.82-.16.27-.38.54-.66.82l-.9.93a.64.64 0 00-.18.47c0 .09.01.17.04.26.04.09.07.16.1.22.2.36.54.83 1.02 1.4.49.57 1.01 1.16 1.58 1.73.59.57 1.16 1.1 1.74 1.58.58.48 1.05.81 1.41 1.01.05.03.12.06.2.1.1.03.18.04.28.04a.66.66 0 00.48-.2l.9-.89c.29-.29.57-.5.83-.66.27-.17.54-.25.83-.25.22 0 .45.05.69.16.24.1.5.25.77.45l3.62 2.56c.3.2.5.44.63.72.12.27.19.55.19.86z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Phone</p>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium text-navy hover:text-primary transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </RevealOnScroll>

        {/* Email */}
        <RevealOnScroll delay={0.1}>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="1.5">
                <path d="M2 7l8.16 5.72a3 3 0 003.68 0L22 7" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2" y="4" width="20" height="16" rx="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Email</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm font-medium text-navy hover:text-primary transition-colors break-all"
            >
              {CONTACT.email}
            </a>
          </div>
        </RevealOnScroll>

        {/* Address */}
        <RevealOnScroll delay={0.15}>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="1.5">
                <path d="M12 13.5a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2.25c-4.97 0-9 3.81-9 8.51 0 5.84 7.88 11.54 8.22 11.77a1.26 1.26 0 001.56 0C13.12 22.3 21 16.6 21 10.76c0-4.7-4.03-8.51-9-8.51z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Address</p>
            <p className="text-navy leading-relaxed text-sm">{CONTACT.address}</p>
          </div>
        </RevealOnScroll>

        {/* Working Hours */}
        <RevealOnScroll delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Working Hours</p>
            <div className="space-y-0.5 text-navy text-sm">
              <p>{CONTACT.workingHours.weekday}</p>
              <p>{CONTACT.workingHours.saturday}</p>
              <p>{CONTACT.workingHours.sunday}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Social Links */}
      <RevealOnScroll delay={0.25}>
        <div className="mt-12 text-center">
          <p className="text-base uppercase tracking-wider text-primary-400 font-semibold mb-5">Follow Us</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
