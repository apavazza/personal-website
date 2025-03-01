import Projects from './_components/Projects'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const title = t.raw('projects').title
 
  return {
    title: title
  }
}

type Params = Promise<{ locale: string }>;

export default async function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  )
}