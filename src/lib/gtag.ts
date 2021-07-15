export const gooleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

export const pageview = (url: string): void => {
  if (!gooleAnalyticsId) return
  if (typeof window !== 'undefined') {
    window.gtag('config', gooleAnalyticsId, {
      page_path: url,
    })
  }
}
