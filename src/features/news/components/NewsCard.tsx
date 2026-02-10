import { useTranslations } from "next-intl";

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export default function NewsCard({ item }: { item: NewsItem }) {
  const t = useTranslations("news");

  return (
    <div className="flex flex-col">
      {/* Image Placeholder */}
      <div className="w-full aspect-4/3 bg-neutral-200" />

      {/* Content */}
      <h3 className="font-bold text-text-primary mt-4 mb-1">{item.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{item.date}</p>
      <p className="text-sm text-text-primary leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Read More Button */}
      <div className="mt-auto">
        <button className="px-6 py-2 border border-text-primary text-text-primary text-sm font-medium hover:bg-text-primary hover:text-white transition-colors cursor-pointer">
          {t("readMore")}
        </button>
      </div>
    </div>
  );
}
