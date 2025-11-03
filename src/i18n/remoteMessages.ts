const REMOTE_BASE = process.env.REMOTE_BASE

export async function fetchRemoteMessages(locale: string) {
  const url = `${REMOTE_BASE}/messages/${locale}.json`
  const res = await fetch(url, { cache: 'force-cache' })
  if (!res.ok) throw new Error(`Failed to fetch remote messages: ${res.status}`)
  const json = await res.json()
  return json
}

export function makeTranslationsFromMessages(messages: any) {
  return {
    raw: (key: string) => {
      return key.split('.').reduce((obj: any, k: string) => (obj ? obj[k] : undefined), messages)
    },
  }
}
