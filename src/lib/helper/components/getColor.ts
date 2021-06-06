export const getColor = (
  theme: string | undefined,
  colorState: string
): string => {
  if (theme === 'dark') {
    return colorState === 'Black' ? 'white' : 'currentColor'
  } else {
    return colorState === 'White' || colorState === 'Ivory'
      ? 'black'
      : 'currentColor'
  }
}
