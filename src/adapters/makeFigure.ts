import { Figure } from '@/types'

export function makeFigure(figure: any): Figure {
  return {
    caption: figure.caption,
    label: figure.label,
    position: figure.position,
    image: figure.medium
  }
}
