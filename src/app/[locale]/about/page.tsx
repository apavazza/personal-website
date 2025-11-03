import { LocaleParams } from "@/i18n/routing"
import Bio from "./_components/Bio"
import EducationCard from "./_components/EducationCard"
import { getTranslations, setRequestLocale } from "next-intl/server"

export async function generateMetadata({ params }: { params: LocaleParams }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const bio = await getTranslations({locale, namespace: 'Bio'});
  const title = t.raw('about').title
  const description = bio.raw('text')
 
  return {
    title: title,
    description: description,
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