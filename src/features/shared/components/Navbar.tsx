"use client";

import { useState, useEffect } from "react";
import { Link, usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { routing } from "@/src/i18n/routing";
import Image from "next/image";

type Pathname = (typeof routing.pathnames)[keyof typeof routing.pathnames];

const Navbar = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { name: string; href: Pathname }[] = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/o-nama" },
    { name: t("products"), href: "/proizvodi" },
    { name: t("recipes"), href: "/recepti" },
    { name: t("news"), href: "/novosti" },
    { name: t("contact"), href: "/kontakt" },
  ];

  const locales = [
    { code: "sr", label: "SR" },
    { code: "en", label: "EN" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Hamburger animation variants
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const middleLineVariants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x: -20 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  const navItemVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-34">
            {/* Logo */}
            <div>
              <Link href={{ pathname: "/" }} className="shrink-0">
                <Image
                  src={"/logo_header.png"}
                  alt="Brskut logo"
                  width={60}
                  height={200}
                  className="w-auto h-30"
                />
              </Link>
            </div>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    variants={navItemVariants}
                    whileHover="hover"
                  >
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium transition-all duration-200 text-gray-800 ${isActive ? "font-bold" : ""}`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-800"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Language Switcher */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <div
                className={`relative flex items-center p-1 rounded-full ${
                  isScrolled ? "bg-gray-100" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <motion.div
                  className={`absolute h-7 w-10 rounded-full ${
                    isScrolled ? "bg-white shadow-md" : "bg-white/30"
                  }`}
                  initial={false}
                  animate={{
                    x: locale === "sr" ? 0 : 40,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
                {locales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => switchLanguage(loc.code)}
                    className={`relative z-10 w-10 h-7 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
                      locale === loc.code
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <motion.span
                variants={topLineVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className={`block w-6 h-0.5 origin-center ${
                  isMobileMenuOpen
                    ? "bg-gray-800"
                    : isScrolled
                      ? "bg-gray-800"
                      : "bg-white"
                }`}
              />
              <motion.span
                variants={middleLineVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className={`block w-6 h-0.5 ${
                  isMobileMenuOpen
                    ? "bg-gray-800"
                    : isScrolled
                      ? "bg-gray-800"
                      : "bg-white"
                }`}
              />
              <motion.span
                variants={bottomLineVariants}
                animate={isMobileMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className={`block w-6 h-0.5 origin-center ${
                  isMobileMenuOpen
                    ? "bg-gray-800"
                    : isScrolled
                      ? "bg-gray-800"
                      : "bg-white"
                }`}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8">
              {/* Mobile Nav Items */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.li
                        key={item.name}
                        custom={index}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-3 px-4 text-lg rounded-xl transition-all duration-200 ${
                            isActive
                              ? "bg-gray-100 text-gray-900 font-semibold"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile Language Switcher */}
              <motion.div
                custom={navItems.length}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                className="pt-6 border-t border-gray-100"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
                  {locale === "sr" ? "Jezik" : "Language"}
                </p>
                <div className="relative flex items-center p-1 bg-gray-100 rounded-full">
                  <motion.div
                    className="absolute h-10 rounded-full bg-white shadow-md"
                    initial={false}
                    animate={{
                      x: locale === "sr" ? 4 : "calc(100% - 4px)",
                      width: "calc(50% - 8px)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                  {locales.map((loc) => (
                    <button
                      key={loc.code}
                      onClick={() => {
                        switchLanguage(loc.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`relative z-10 flex-1 h-10 text-sm font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
                        locale === loc.code
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {loc.code === "sr" ? "Srpski" : "English"}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
