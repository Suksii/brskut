import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="w-full h-100 bg-neutral-300">
      <Image
        src="/contact_hero.jpg"
        alt="Contact"
        width={1920}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
