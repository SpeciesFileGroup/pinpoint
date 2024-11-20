import { Entry } from './Entry'
import { Lead } from './Lead'

export type Node = Entry & Lead & { id: number }
