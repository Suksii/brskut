"use client";

import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      title: "Дестилерија & воћни еликсири",
      description:
        "Природни дестилати, сокови и сирупи, настали од пажљиво бираног воћа и традиционалних рецепата.",
      image: "/product1.png",
    },
    {
      title: "Деликатеси од воћа и поврћа",
      description:
        "Џемови, слатка, зимница и прерађевине које чувају праву арому и укус природних плодова.",
      image: "/product2.png",
    },
    {
      title: "Домаћа трпеза",
      description:
        "Традиционално сушени и димљени сухомеснати производи, уз пажљиво одабрано свеже сезонско поврће.",
      image: "/product3.png",
    },
    {
      title: "Природна козметика",
      description:
        "Природна биљна козметика и лековити препарати за свакодневну негу.",
      image: "/product4.png",
    },
  ];

  return (
    <section className="w-full bg-suggestion py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">
            Избор производа
          </h2>
          <p className="mt-4 text-gray-600">
            Пажљиво развијен асортиман природних производа, прожет
            традицијом и квалитетом.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image box */}
              <div className="w-full h-80 bg-gray-300 relative mb-6">
                {/* <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="border border-gray-400 px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
            Цјеновник производа
          </button>
        </div>
      </div>
    </section>
  );
}
