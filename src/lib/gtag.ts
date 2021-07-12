export const gooleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

export const pageview = (url: string): void => {
  if (!gooleAnalyticsId) return
  window.gtag('config', gooleAnalyticsId, {
    page_path: url,
  })
}
