/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ColorAndSize } from 'components/items'

type Props = {
  colors: string[]
  colorState: string
  mountedState: boolean
  sizes: string[]
  sizeState: string
  theme: string | undefined
  setColorState: (colorState: string) => void
  setMountedState: (mountedState: boolean) => void
  setSizeState: (sizeState: string) => void
}

describe('ColorAndSize', () => {
  test('should render correctly', async () => {
    // Arrange
    const mockSetColorState = (): void => {}
    const mockSetMountedState = (): void => {}
    const mockSetSizeState = (): void => {}
    const mock: Props = {
      colors: ['Grey'],
      colorState: 'Grey',
      mountedState: true,
      sizes: ['S', 'M', 'L'],
      sizeState: 'S',
      theme: 'dark',
      setColorState: mockSetColorState,
      setMountedState: mockSetMountedState,
      setSizeState: mockSetSizeState,
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
