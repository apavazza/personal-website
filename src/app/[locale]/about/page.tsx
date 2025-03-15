import { LocaleParams } from "@/i18n/routing"
import Bio from "./_components/Bio"
import EducationCard from "./_components/EducationCard"
import { getTranslations, setRequestLocale } from "next-intl/server"

export async function generateMetadata({ params }: { params: LocaleParams }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const title = t.raw('about').title
 
  return {
    title: title
  }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto">
      <Bio />
      <EducationCard />
    </div>
  )
}