import TaglessRequestParameters from "../types/taglessRequestParameters"
import { createQueryString } from "./utils"

const BASE_URL = "https://securepubads.g.doubleclick.net/gampad/adx"

function createTaglessRequest(parameters: TaglessRequestParameters) {
  return fetch(`${BASE_URL}?${createQueryString(parameters)}`)
}

export default createTaglessRequest
