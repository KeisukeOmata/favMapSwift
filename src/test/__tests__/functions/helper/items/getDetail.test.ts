import { GetDetail } from 'lib/Type'
import { getDetail } from 'lib/helper/items'

import { item } from '../../../../mock/item'

describe('getDetail', () => {
  test('return item', () => {
    const detail = getDetail(item as unknown as GetDetail)
    expect(detail.descriptionHtml).toBe(
      '<p>サイズ</p>\n<p>S</p>\n<p><meta charset="utf-8"><span>着丈：<meta charset="utf-8">65cm</span></p>\n<p><span><meta charset="utf-8">身幅：49cm</span></p>\n<p><span>袖丈：59cm</span></p>\n<p>L</p>\n<p><span>着丈：73cm</span></p>\n<p><span><meta charset="utf-8">身幅：55cm</span></p>\n<p><span>袖丈：62cm</span></p>'
    )
    expect(detail.images).toStrictEqual([
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/black2.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white1.jpg?v=1617433045',
      'https://cdn.shopify.com/s/files/1/0560/2797/1763/products/white2.jpg?v=1617433045',
    ])
    expect(detail.price).toBe('9350')
    expect(detail.title).toBe('Europe bouquet LONG-T')
    expect(detail.variants).toStrictEqual([
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzc5MDM4Nw==',
        available: true,
        color: 'Black',
        size: 'S',
      },
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzgyMzE1NQ==',
        available: true,
        color: 'White',
        size: 'S',
      },
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzkyMTQ1OQ==',
        available: true,
        color: 'Black',
        size: 'L',
      },
      {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTUyODQxMzk1NDIyNw==',
        available: false,
        color: 'White',
        size: 'L',
      },
    ])
    expect(detail.vendor).toBe('keisukeomata')
  })
})
