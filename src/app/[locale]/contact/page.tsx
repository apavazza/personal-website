import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactCard from "./_components/ContactCard";
import { LocaleParams } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: LocaleParams }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const title = t.raw('contact').title
 
  return {
    title: title
  }
}

export default async function ContactPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <ContactCard />
    </div>
  )
}