import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"


export default function Footer() {
  const t = useTranslations("Footer")
  return (
    <footer id="page-footer" className="py-2 lg:py-4 relative bg-blue-950 dark:bg-black text-white">
      <div className="px-4">
        <div className="flex flex-col lg:flex-row lg:relative items-center">
          <div className="order-2 lg:mx-auto">
            <p className="text-sm text-center">
              &copy; {t("notice")}
            </p>
          </div>

          <div className="order-1 lg:absolute lg:left-0">
            <div className="flex flex-row space-x-5 items-center">
              <Link
                href={"/privacy"}
                className="text-sm text-gray-200 hover:text-gray-300"
              >
                {t("privacy")}
              </Link>
            </div>
          </div>

          <div className="order-3 lg:absolute lg:right-0">
            <p className="text-sm text-gray-200">
              {t("version")}: {process.env.NEXT_PUBLIC_GIT_HASH ? (
                <Link
                  href={`https://github.com/apavazza/personal-website/commits/${process.env.NEXT_PUBLIC_GIT_HASH}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-300"
                >
                  {process.env.NEXT_PUBLIC_GIT_HASH}
                </Link>
              ) : "development"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}