import { RequestParameters } from "./requestParameters"
import { createQueryString } from "./utils"

const BASE_URL = "https://securepubads.g.doubleclick.net/gampad/adx"

function createTaglessRequest(parameters: RequestParameters) {
  return fetch(`${BASE_URL}?${createQueryString(parameters)}`)
}

export default createTaglessRequest
