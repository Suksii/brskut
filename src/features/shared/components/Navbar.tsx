"use client";

import { useState, useEffect } from "react";
import { Link } from "@/src/i18n/navigation";
import Logo from "./Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Почетна", href: "/" },
    { name: "О нама", href: "/o-nama" },
    { name: "Производи", href: "/proizvodi" },
    { name: "Рецепти & гастрономија", href: "/recepti" },
    { name: "Новости", href: "/novosti" },
    { name: "Контакт", href: "/kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Navigation height offset
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <Link
                  //@ts-expect-error: link error
                  href={item.href}
                  key={item.name}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm transition-all duration-200 hover:opacity-70 ${
                    isScrolled ? "text-gray-800" : "text-white"
                  } ${isActive ? "font-bold" : "font-normal"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block">
            <button
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-gray-600"
                  : "text-white hover:text-gray-200"
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
