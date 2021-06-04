import { RequestParameters } from "./request_parameters"
import { createQueryString } from "./utils"

const BASE_URL = "https://securepubads.g.doubleclick.net/gampad/adx"

type Encoder<K extends keyof RequestParameters> = (
  parameter: RequestParameters[K]
) => RequestParameters[K]

const encoders: {
  [K in keyof Partial<RequestParameters>]: Encoder<K>
} = {
  sz: encodeURIComponent,
  submodel: (s) => s && encodeURIComponent(s),
}

const noop: Encoder<any> = (s) => s

function encodeParameters(parameters: RequestParameters): RequestParameters {
  const keys = Object.keys(parameters) as Array<keyof RequestParameters>
  return keys.reduce((acc, key) => {
    const value = parameters[key]
    const encode = encoders[key] ?? noop
    return { ...acc, [key]: encode(value) }
  }, parameters)
}

export function createTaglessRequest(parameters: RequestParameters) {
  return fetch(`${BASE_URL}?${createQueryString(encodeParameters(parameters))}`)
}
