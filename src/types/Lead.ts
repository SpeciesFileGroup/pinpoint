import { Figure } from './Figure'

export type Lead = {
  text: string
  parentId: number | null
  position: number | null
  targetType: string
  targetId: number
  figures: Figure[]
}
