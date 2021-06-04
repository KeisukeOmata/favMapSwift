/**
 * @jest-environment jsdom
 */

import { act, renderHook } from '@testing-library/react-hooks'
import { useLoading } from 'lib/hooks/state'

describe('useLoading', () => {
  test('The initial value of loadingState is false', () => {
    const { result } = renderHook(() => useLoading())

    expect(result.current.loadingState).toBe(false)
  })

  test('When setLoadingState is set to true, loadingState is true', () => {
    const { result } = renderHook(() => useLoading())

    act(() => {
      result.current.setLoadingState(true)
    })

    expect(result.current.loadingState).toBe(true)
  })
})
