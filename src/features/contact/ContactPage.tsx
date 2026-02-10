"use client";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-34 bg-primary">
      <ContactHero />

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_2fr] gap-8 md:gap-12">
          <ContactInfo />

          {/* Vertical Divider */}
          <div className="hidden md:block bg-gray-300" />

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
