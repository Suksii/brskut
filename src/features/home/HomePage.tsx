import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div className="h-screen w-full bg-tertiary">
      <div className="flex justify-center items-center w-full h-full">
        <Image src="/logo_hero.png" alt="Brskut Logo" width={200} height={400}/>
      </div>
    </div>
  );
}
