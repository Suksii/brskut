"use client";

import { useState } from "react";
import { RotateCcw, RotateCw } from "lucide-react";

export interface FeaturedItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

interface FeaturedSectionProps {
  items: FeaturedItem[];
}

export default function FeaturedSection({ items }: FeaturedSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Left side - Dark content (3/5 width) */}
        <div className="lg:col-span-2 bg-tertiary p-8 lg:p-12 flex flex-col items-center justify-center min-h-125">
          <h3 className="text-2xl lg:text-3xl font-light mb-6">
            {currentItem.title}
          </h3>
          <div className="w-24 mx-auto h-0.5 bg-secondary mb-6" />
          <h4 className="font-bold mb-4">{currentItem.subtitle}</h4>
          <p className="text-sm leading-relaxed mb-8 text-center">
            {currentItem.description}
          </p>
          <div>
            <button className="px-8 py-3 text-sm font-medium bg-primary hover:bg-white rounded-xl transition-colors cursor-pointer">
              Сазнај више
            </button>
          </div>
        </div>

        {/* Right side - Image placeholder (2/5 width) */}
        <div className="lg:col-span-2 bg-neutral-300 min-h-75 lg:min-h-0" />
      </div>

      {/* Navigation arrows - centered at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex bg-tertiary rounded-xl overflow-hidden">
        <button
          onClick={handlePrev}
          className="w-12 h-12 text-text-primary flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
          aria-label="Previous"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <div className="w-px bg-secondary" />
        <button
          onClick={handleNext}
          className="w-12 h-12 text-text-primary flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
          aria-label="Next"
        >
          <RotateCw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
