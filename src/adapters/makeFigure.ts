import { Figure, APIConfig } from '@/types'

export function makeFigure(
  figure: any,
  { baseUrl, projectToken }: APIConfig
): Figure {
  return {
    caption: figure.caption,
    label: figure.label,
    position: figure.position,
    image: figure.medium,
    original: `${baseUrl}/${figure.original_png?.substring(
      8
    )}?project_token=${projectToken}`
  }
}
