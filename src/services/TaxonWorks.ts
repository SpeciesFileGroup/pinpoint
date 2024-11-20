import { makeRequest } from '@/utils'

export class TaxonWorks {
  baseUrl: string
  projectToken: string

  constructor(config) {
    this.baseUrl = config.baseUrl
    this.projectToken = config.projectToken
  }

  getDichotomousKey(id: Number): Promise {
    return makeRequest(`${this.baseUrl}/leads/key/${id}`, {
      parameters: {
        project_token: this.projectToken
      }
    })
  }
}
