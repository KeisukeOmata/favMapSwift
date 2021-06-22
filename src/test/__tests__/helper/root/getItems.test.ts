import { GetItem } from 'lib/Type'
import { getItems } from 'lib/helper/root'

import { products } from '../../../mock/products'

describe('getDetail', () => {
  test('return item', () => {
    const items = getItems(products as unknown as GetItem[])
    expect(items[0].id).toBe('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDgxNzE4NjAxNDc=')
    expect(items[0].images).toStrictEqual([
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black2.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white2.jpg?v=1617433045',
    ])
    expect(items[0].price).toBe('9350')
    expect(items[0].productType).toBe('CUTSEW')
    expect(items[0].title).toBe('Europe bouquet LONG-T')
    expect(items[1].id).toBe('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MDgxNzE4NjAxNDc=')
    expect(items[1].images).toStrictEqual([
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black2.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white2.jpg?v=1617433045',
    ])
    expect(items[1].price).toBe('9350')
    expect(items[1].productType).toBe('CUTSEW')
    expect(items[1].title).toBe('Europe bouquet LONG-T')
  })
})
