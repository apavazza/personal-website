import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer className="bg-blue-950 dark:bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <Link
            href={"/privacy"}
            className="text-sm text-gray-200 hover:text-gray-300 mb-2 lg:mb-0 lg:absolute lg:left-4"
          >
            {t("privacy")}
          </Link>
          <p className="text-sm w-full text-center">&copy; 2025 Amadeo Pavazza. {t("notice")}</p>
        </div>
      </div>
    </footer>
  )
}