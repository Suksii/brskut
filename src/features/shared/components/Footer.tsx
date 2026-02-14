"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="border-t-3 border-b-3 border-secondary py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Section - Newsletter */}
            <div className="">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Будите у току
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Пишите нам и ступите у контакт са Брскутом.
                <br />
                Радо ћемо одговорити на сва ваша питања,
                <br />
                било да вас занимају наши производи,
                <br />
                могућности сарадње или дистрибуције.
              </p>
              <div className="h-1 w-2/3 rounded-full bg-secondary my-8" />
              <div className="relative">
                <button className="px-6 py-3 rounded-full bg-white transition-all duration-300">
                  Додај у букмарк
                </button>
              </div>
            </div>

            {/* Center Section - Logo */}
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/logo_footer.png"
                alt="Brskut Logo"
                width={125}
                height={125}
              />

              {/* Social Icons */}
              <div className="flex items-center gap-6 mt-8">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Instagram size={24} strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Facebook size={24} strokeWidth={1.5} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <Linkedin size={24} strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Right Section - Contact */}
            <div className="text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Контакт
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <a
                    href="mailto:office@brskut.me"
                    className="hover:text-gray-900 transition-colors"
                  >
                    office@brskut.me
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+38267836248"
                    className="hover:text-gray-900 transition-colors"
                  >
                    +382 67 836 248
                  </a>
                </p>
                <div className="mt-6 space-y-1">
                  <p className="font-semibold">Брскут д.о.о.</p>
                  <p>Улица артиљеријског официра</p>
                  <p>Радоње Вељевог Ђарића,</p>
                  <p>Подгорица</p>
                </div>
                <p className="mt-4">ПИБ:123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section - Credits */}
      <div className="pt-8">
        <p className="text-center text-sm text-gray-600">
          Designed by Kata Design Studio
          <br />
          <a
            href="https://www.kataagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
          >
            www.kataagency.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
