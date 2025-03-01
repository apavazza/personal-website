import { Metadata } from "next"
import { useTranslations } from "next-intl";
import Image from "next/image"
import { Link}  from "@/i18n/routing"

export const metadata: Metadata = {
  title: "404",
}

export default function NotFound() {
  const t = useTranslations('not-found')
  return (
    <div className="flex justify-center mt-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">{t('t1')}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-100 mb-8">{t('t2')}</p>
        <Image
          src="/images/robot-3256109_1280.png"
          alt="Confused robot"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />
        <p className="text-lg text-gray-600 dark:text-gray-100 mb-8">
          {t('t3')}
        </p>
        <Link
          href="/"
          className="bg-brand-primary dark:bg-gray-600 hover:bg-brand-secondary dark:hover:bg-gray-500 active:bg-brand-tertiary dark:active:bg-gray-400 text-white dark:text-gray-100 font-bold py-2 px-4 rounded transition duration-300"
        >
          {t('t4')}
        </Link>
      </div>
    </div>
  )
}