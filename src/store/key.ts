import { Lead } from '../types'
import { Entry } from './../types/Entry'
import { Metadata } from './../types/Metadata'
import { reactive } from 'vue'

interface Store {
  metadata: Metadata | null
  entries: Entry[]
  leads: { [key: number]: Lead }
}

export function useKeyStore() {
  const state: Store = reactive({
    metadata: null,
    entries: [],
    leads: []
  })

  const loadKey = (id: number) => {}
}
