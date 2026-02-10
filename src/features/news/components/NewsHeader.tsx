import { useTranslations } from "next-intl";

export default function NewsHeader() {
  const t = useTranslations("news");

  return (
    <div className="text-center mb-16">
      <h1 className="text-xl font-bold text-text-primary mb-2">
        {t("brand")}
      </h1>
      <h2 className="text-lg tracking-widest text-gray-400 uppercase mb-6">
        {t("title")}
      </h2>
      <div className="w-12 h-px bg-text-primary mx-auto" />
    </div>
  );
}
