import { beforeAll, afterEach, afterAll } from 'vitest'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { keyResponse } from './mock/responses'

export const restHandlers = [
  http.get('*/leads/key/:id', () => {
    return HttpResponse.json(keyResponse)
  })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())
