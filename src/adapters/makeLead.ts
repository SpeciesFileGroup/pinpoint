import { APIConfig, Lead } from '@/types'
import { makeFigure } from './makeFigure'

export function makeLead(item: any, config: APIConfig): Lead {
  return {
    text: item.text,
    parentId: item.parent_id,
    targetId: item.target_id,
    targetType: item.target_type,
    position: item.position,
    figures: item.figures?.map((item) => makeFigure(item, config)) || []
  }
}
