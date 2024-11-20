import { Figure } from './Figure'

export type Lead = {
  text: String
  parentId: Number | null
  position: Number | null
  targetType: String
  targetId: Number
  figures: Figure[]
}
