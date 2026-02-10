import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");

  return (
    <div>
      {/* Description Text */}
      <div className="mb-12">
        <p className="text-text-primary leading-relaxed mb-4">
          {t("description1")}
        </p>
        <p className="text-text-primary leading-relaxed">
          {t("description2")}
        </p>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder={t("formTitle")}
          className="w-full px-4 py-3 bg-white border-none outline-none text-text-primary placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
        />
        <input
          type="email"
          placeholder={t("formEmail")}
          className="w-full px-4 py-3 bg-white border-none outline-none text-text-primary placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
        />
        <input
          type="text"
          placeholder={t("formName")}
          className="w-full px-4 py-3 bg-white border-none outline-none text-text-primary placeholder-gray-500 focus:ring-1 focus:ring-gray-400"
        />
        <textarea
          rows={8}
          className="w-full px-4 py-3 bg-white border-none outline-none text-text-primary placeholder-gray-500 resize-none focus:ring-1 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="px-12 py-3 bg-tertiary text-text-primary font-medium hover:bg-tertiary/80 transition-colors cursor-pointer rounded-xl"
        >
          {t("formSubmit")}
        </button>
      </form>
    </div>
  );
}
