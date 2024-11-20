import { Entry } from '@/types'

export function makeEntry(item: any): Entry {
  return {
    children: item.children || [],
    coupletNumber: item.couplet_number,
    parentId: item.parent_id,
    depth: item.depth,
    position: item.position
  }
}
