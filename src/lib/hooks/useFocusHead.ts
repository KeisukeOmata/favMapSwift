import { useRouter } from 'next/router'
import { useEffect, useCallback } from 'react'

export const useFocusHead = (): void => {
  const router = useRouter()
  const handleRouteChange = useCallback((): void => {
    const main = document.getElementById('head')
    main?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  })
}
