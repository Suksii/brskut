import { useTranslations } from "next-intl";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col justify-end">
      <div className="mb-8">
        <p className="font-bold text-text-primary">{t("emailLabel")}</p>
        <a
          href={`mailto:${t("email")}`}
          className="text-text-primary hover:underline"
        >
          {t("email")}
        </a>
      </div>

      <div className="mb-8">
        <p className="font-bold text-text-primary">{t("phoneLabel")}</p>
        <a
          href={`tel:${t("phone").replace(/\s/g, "")}`}
          className="text-text-primary hover:underline"
        >
          {t("phone")}
        </a>
      </div>

      <div className="mb-8">
        <p className="font-bold text-text-primary">{t("companyName")}</p>
        <p className="text-text-primary">{t("address1")}</p>
        <p className="text-text-primary">{t("address2")}</p>
        <p className="text-text-primary">{t("address3")}</p>
      </div>

      <div className="mb-12">
        <p className="text-text-primary">
          <span className="font-bold">ПИБ:</span> {t("pib")}
        </p>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-primary hover:opacity-70 transition-opacity"
        >
          <FaInstagram size={22} />
          <span>{t("instagram")}</span>
        </Link>

        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-primary hover:opacity-70 transition-opacity"
        >
          <FaFacebook size={22} />
          <span>{t("facebook")}</span>
        </Link>

        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-text-primary hover:opacity-70 transition-opacity"
        >
          <FaLinkedin size={22} />
          <span>{t("linkedin")}</span>
        </Link>
      </div>
    </div>
  );
}
