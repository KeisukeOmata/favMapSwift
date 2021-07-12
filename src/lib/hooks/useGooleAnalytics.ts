import { gooleAnalyticsId, pageview } from 'lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useGooleAnalytics = (): void => {
  const router = useRouter()

  useEffect(() => {
    if (!gooleAnalyticsId) return
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
