"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;

    gsap.fromTo(
      logo,
      { y: 0, scale: 1, opacity: 1 },
      {
        y: -150,
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={heroRef} className="h-screen w-full bg-neutral-500 relative overflow-hidden">
      <div className="flex justify-center items-center w-full h-full">
        <Image
          ref={logoRef}
          src="/logo_hero.png"
          alt="Brskut Logo"
          width={200}
          height={400}
        />
      </div>
    </div>
  );
}
