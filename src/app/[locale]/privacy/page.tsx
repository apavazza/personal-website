import { getTranslations, setRequestLocale } from "next-intl/server";
import PrivacyNotice from "./_components/PrivacyNotice"
import { LocaleParams } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: LocaleParams }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({locale, namespace: 'Metadata'});
  const title = t.raw('privacy').title
 
  return {
    title: title
  }
}

export default function PrivacyPage() {
  return (<PrivacyNotice />)
}