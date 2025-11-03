import { LocaleParams } from '@/i18n/routing';
import Projects from './_components/Projects'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: { params: LocaleParams }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const projects = await getTranslations({locale, namespace: 'Projects'});
  const title = t.raw('projects').title
  const description = projects.raw('tagline')

  return {
    title: title,
    description: description,
  }
}

export default async function ProjectsPage() {
  return (
    <>
      <Projects />
    </>
  )
}