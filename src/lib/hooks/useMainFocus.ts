import { useRouter } from 'next/router'
import { useEffect, useCallback } from 'react'

export const useMainFocus = (): void => {
  const router = useRouter()
  const handleRouteChange = useCallback(() => {
    const main = document.getElementById('main')
    main?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  })
}
