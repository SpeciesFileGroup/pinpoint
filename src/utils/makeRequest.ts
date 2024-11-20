interface requestOptions {
  method?: string
  data?: any
  parameters?: Record<string, any>
}

function makeUrlParameters(
  url: string,
  parameters: Record<string, any> | undefined
): string {
  const urlParameters = new URL(url)
  if (parameters) {
    Object.entries(parameters).forEach(([key, value]) => {
      urlParameters.searchParams.append(key, value.toString())
    })
  }

  return urlParameters.toString()
}

export async function makeRequest(
  url: string,
  { method, data, parameters }: requestOptions = {}
): Promise<any> {
  try {
    const options: RequestInit = {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : undefined
    }

    const response = await fetch(makeUrlParameters(url, parameters), options)

    if (!response.ok) {
      throw new Error(`Error response: ${response.statusText}`)
    }

    const datosRespuesta = await response.json()
    return datosRespuesta
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
