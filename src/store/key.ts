import { Lead, Entry, Node } from '../types'
import { Metadata } from './../types/Metadata'
import { reactive } from 'vue'
import { TaxonWorks } from '@/services/TaxonWorks'
import { makeEntry, makeLead } from '@/adapters'

type Entries = { [key: string]: Entry }
type Leads = { [key: string]: Lead }
type Nodes = { [key: string]: Node }

type Store = {
  currentNode: Node | null
  nodes: Nodes
  metadata: Metadata | null
  entries: Entries
  leads: Leads
}

function makeEntries(entries: any) {
  return Object.fromEntries(
    Object.entries(entries).map(([key, value]) => [key, makeEntry(value)])
  )
}

function makeLeads(leads: any) {
  return Object.fromEntries(
    Object.entries(leads).map(([key, value]) => [key, makeLead(value)])
  )
}

function mergeEntriesAndLeads(entries: Entries, leads: Leads): Nodes {
  const nodes: Nodes = {}

  for (const [id, lead] of Object.entries(leads)) {
    const entry = entries[id]

    nodes[id] = {
      id: parseInt(id, 10),
      ...lead,
      ...entry
    }

    if (!entry) {
      Object.assign(nodes[id], { children: [] })
    }
  }

  return nodes
}

export function useKeyStore(config) {
  const service = new TaxonWorks(config)
  const state: Store = reactive({
    currentNode: null,
    metadata: null,
    entries: {},
    leads: {},
    nodes: {},
    config
  })

  const loadKey = (id: Number) => {
    return service.getDichotomousKey(id).then(({ data, metadata }) => {
      console.log(data)
      state.entries = makeEntries(data.entries)
      state.leads = makeLeads(data.leads)
      state.nodes = mergeEntriesAndLeads(state.entries, state.leads)
      state.currentNode = Object.values(state.nodes)[0]
      state.metadata = metadata
    })
  }

  const setCurrentNode = (id: Number) => {
    state.currentNode = state.nodes[id]
  }

  return {
    state,
    loadKey,
    setCurrentNode
  }
}
