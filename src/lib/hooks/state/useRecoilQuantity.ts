import { useCallback } from 'react'
import { selector, useRecoilValue } from 'recoil'
import { cartAtom } from './useRecoilCart'

type useRecoilQuantityType = {
  getQuantityState: () => number
}

const quantityAtom = selector({
  key: 'quantityStateKey',
  get: ({ get }) =>
    get(cartAtom)?.lineItems.reduce(
      (acc, lineItem) => acc + lineItem.quantity,
      // Initial value
      0
    ) ?? 0,
})

export const useRecoilQuantity = (): useRecoilQuantityType => {
  const quantityState = useRecoilValue(quantityAtom)
  const getQuantityState = useCallback((): number => {
    return quantityState
  }, [quantityState])

  return {
    getQuantityState,
  }
}
