import { getRequestConfig, setRequestLocale } from 'next-intl/server'
import { Locale, routing } from './routing'
import { fetchRemoteMessages } from './remoteMessages'

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale
  
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  
  setRequestLocale(locale)
 
  const messages = await fetchRemoteMessages(locale)

  return {
    locale,
    messages,
  }
})