export interface RecipeItem {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export default function RecipeCard({ item }: { item: RecipeItem }) {
  return (
    <div className="flex flex-col">
      {/* Image Placeholder */}
      <div className="w-full aspect-3/4 bg-neutral-300" />

      {/* Gold line ~1cm below image */}
      <div className="w-full h-0.5 bg-secondary mt-6" />

      {/* Content */}
      <h3 className="font-bold text-text-primary text-center mt-4 mb-2">
        {item.title}
      </h3>
      <p className="text-sm text-text-primary text-center leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
