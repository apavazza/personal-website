import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactCard from "./_components/ContactCard";

type Params = Promise<{ locale: string }>

export async function generateMetadata({ params }: { params: Params }) {
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