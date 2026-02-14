"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-suggestion">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xl text-gray-900 leading-relaxed">
              <span className="font-semibold">Брскут</span> је породични бренд
              настао из потребе да се сачува домаћи укус и природан начин
              производње.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              У срцу планинског краја, стварамо органске делиције, воћне
              еликсире и природну козметику.
            </p>

            <p className="mt-4 font-medium text-gray-900">
              Без индустријских пречица. Без компромиса.
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="border border-gray-400 px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
              Наша прича
            </button>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[40vh] lg:h-[45vh] bg-gray-300"
        />
      </div>
    </section>
  );
}
