import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="bg-blue-950 dark:bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 Amadeo Pavazza. {t('notice')}</p>
      </div>
    </footer>
  )
}