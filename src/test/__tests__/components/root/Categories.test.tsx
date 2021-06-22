/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Categories } from 'components/root'
import { RecoilRoot } from 'recoil'

describe('Categories', () => {
  test('should render correctly', async () => {
    // Arrange

    // Act
    render(
      <RecoilRoot>
        <Categories />
      </RecoilRoot>
    )

    // Assert
    // When you want to debug, remove comment out
    // screen.debug();

    // Category1 Button
    const Category1Button = screen.getByLabelText('NEW ARRIVALを表示する') as HTMLButtonElement
    expect(Category1Button).toBeInTheDocument()
    expect(Category1Button.innerHTML).toBe('NEW ARRIVAL')

    // Category2 Button
    const Category2Button = screen.getByLabelText('DRESSを表示する') as HTMLButtonElement
    expect(Category2Button).toBeInTheDocument()
    expect(Category2Button.innerHTML).toBe('DRESS')

    // Category3 Button
    const Category3Button = screen.getByLabelText('SKIRT/PANTSを表示する') as HTMLButtonElement
    expect(Category3Button).toBeInTheDocument()
    expect(Category3Button.innerHTML).toBe('SKIRT/PANTS')

    // Category4 Button
    const Category4Button = screen.getByLabelText('SHIRT/BLOUSEを表示する') as HTMLButtonElement
    expect(Category4Button).toBeInTheDocument()
    expect(Category4Button.innerHTML).toBe('SHIRT/BLOUSE')

    // Category5 Button
    const Category5Button = screen.getByLabelText('CUTSEWを表示する') as HTMLButtonElement
    expect(Category5Button).toBeInTheDocument()
    expect(Category5Button.innerHTML).toBe('CUTSEW')

    // Category6 Button
    const Category6Button = screen.getByLabelText('JACKET/OUTERWEARを表示する') as HTMLButtonElement
    expect(Category6Button).toBeInTheDocument()
    expect(Category6Button.innerHTML).toBe('JACKET/OUTERWEAR')

    // Category7 Button
    const Category7Button = screen.getByLabelText('BAG/POUCHを表示する') as HTMLButtonElement
    expect(Category7Button).toBeInTheDocument()
    expect(Category7Button.innerHTML).toBe('BAG/POUCH')

    // Category8 Button
    const Category8Button = screen.getByLabelText('ACCESSORYを表示する') as HTMLButtonElement
    expect(Category8Button).toBeInTheDocument()
    expect(Category8Button.innerHTML).toBe('ACCESSORY')

    // Category9 Button
    const Category9Button = screen.getByLabelText('COSMETICを表示する') as HTMLButtonElement
    expect(Category9Button).toBeInTheDocument()
    expect(Category9Button.innerHTML).toBe('COSMETIC')
  })
})
