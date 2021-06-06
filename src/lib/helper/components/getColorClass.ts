import s from 'components/ui/Button/Button.module.css'

export const getColorClass = (color: string | undefined): string => {
  switch (color) {
    case 'Black':
      return s.black
    case 'White':
      return s.white
    case 'Brown':
      return s.brown
    case 'Charcoal':
      return s.charcoal
    case 'Chocolate':
      return s.chocolate
    case 'Grey':
      return s.grey
    case 'Light Grey':
      return s.lightGrey
    case 'Taupe Marl':
      return s.taupeMarl
    case 'Ink':
      return s.ink
    case 'Light Grey Marl':
      return s.lightGreyMarl
    case 'Cadet Green':
      return s.cadetGreen
    case 'Cinder Marl':
      return s.cinderMarl
    case 'Taupe':
      return s.taupe
    case 'Military':
      return s.military
    case 'Grey Marl':
      return s.greyMarl
    case 'Deep Ocean':
      return s.deepOcean
    case 'Vintage Black':
      return s.vintageBlack
    case 'Chalk White':
      return s.chalkWhite
    case 'Nights':
      return s.nights
    case 'Optic White':
      return s.opticWhite
    case 'Tempest Blue':
      return s.tempestBlue
    case 'Olive Green':
      return s.oliveGreen
    case 'Putty':
      return s.putty
    case 'Ivory':
      return s.ivory
    case 'Red':
      return s.red
    case 'Green':
      return s.green
    default:
      return s.default
  }
}
