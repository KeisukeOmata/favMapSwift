import { SelectedOption } from 'lib/Type'

export const getColorAndSize = (
  options: SelectedOption[],
  name: string
): string => {
  return options.find((option) => option.name === name)?.value ?? ''
}
