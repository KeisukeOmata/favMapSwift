/**
 * @jest-environment jsdom
 */

/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ColorAndSize } from 'components/items'
import { Detail } from 'lib/Type'

type Props = {
  detail: Detail
  setVariantIdState: (variantIdState: string) => void
  setAvailableState: (availableState: boolean) => void
}

describe('ColorAndSize', () => {
  test('should render correctly', async () => {
    // Arrange
    const mockProduct: Detail = {
      title: '商品名',
      images: [
        'https://cdn.shopify.com/s/files/1/1312/0893/products/001_425d2f71-9606-4ac7-90d5-6b90b8ea33c4.jpg?v=1491851061',
        'https://cdn.shopify.com/s/files/1/1312/0893/products/002_b0a0a135-111f-479c-974d-d12dcffe7846.jpg?v=1491851061',
        'https://cdn.shopify.com/s/files/1/1312/0893/products/003_326f92a1-bb9f-43f7-93e1-8b6e9a1d022a.jpg?v=1491851061',
      ],
      vendor: 'ベンダ名',
      price: '98.000',
      descriptionHtml: '<div>ここにHTML形式でdescriptionが入ります。</div>',
      variants: [
        {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjYwNzc0MzU1NQ==',
          color: 'Grey',
          size: 'S',
          available: true,
        },
        {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjYwNzc0MzY4Mw==',
          color: 'Grey',
          size: 'M',
          available: true,
        },
        {
          id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjYwNzc0Mzc0Nw==',
          color: 'Grey',
          size: 'L',
          available: true,
        },
      ],
    }
    const mockSetItemIdState = () => {}
    const mockSetAvailableState = () => {}

    const mock: Props = {
      detail: mockProduct,
      setVariantIdState: mockSetItemIdState,
      setAvailableState: mockSetAvailableState,
    }

    // Act
    render(<ColorAndSize {...mock} />)

    // Assert
    // When you want to debug, remove comment out
    // screen.debug();

    // Color Title
    const colorTitle = screen.getByText('Color')
    expect(colorTitle).toBeInTheDocument()

    // Grey Color Button
    const greyColorButton = screen.getByLabelText(
      'Grey色を選択する'
    ) as HTMLButtonElement
    expect(greyColorButton).toBeInTheDocument()

    // Size Title
    const sizeTitle = screen.getByText('Size')
    expect(sizeTitle).toBeInTheDocument()

    // L Size Button
    const lSizeButton = screen.getByLabelText(
      'Lサイズを選択する'
    ) as HTMLButtonElement
    expect(lSizeButton).toBeInTheDocument()
    expect(lSizeButton.innerHTML).toBe('L')

    // M Size Button
    const mSizeButton = screen.getByLabelText(
      'Mサイズを選択する'
    ) as HTMLButtonElement
    expect(mSizeButton).toBeInTheDocument()
    expect(mSizeButton.innerHTML).toBe('M')

    // S Size Button
    const sSizeButton = screen.getByLabelText(
      'Sサイズを選択する'
    ) as HTMLButtonElement
    expect(sSizeButton).toBeInTheDocument()
    expect(sSizeButton.innerHTML).toBe('S')
  })
})
