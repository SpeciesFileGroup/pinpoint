import { makeHttpClient } from '@/utils'

export class TaxonWorks {
  httpClient = makeHttpClient()

  constructor(config) {
    this.httpClient = makeHttpClient()
  }

  getDichotomousKey(id: number): Promise {
    return this.httpClient(`/leads/key/${id}`)
  }
}
