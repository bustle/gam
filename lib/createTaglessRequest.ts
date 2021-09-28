import TaglessRequestParameters from "../types/taglessRequestParameters"
import RequestOptions from '../types/requestOptions'
import createQueryString from "./createQueryString"

const BASE_URL = "https://securepubads.g.doubleclick.net/gampad/adx"

/**
 * @param parameters A map of TaglessRequestParameters
 * @param userAgent The user-agent for which you intend to fire the impression pixel.
 *
 * Ad Manager will not count impressions of pixels requested with a different user-agent
 * than the one used to fire the tagless request. As such, you should include the userAgent you intend
 * to fire the impression with.
 *
 * @returns a tagless response
 */
function createTaglessRequest(parameters: TaglessRequestParameters, options: RequestOptions) {
  return fetch(`${BASE_URL}?${createQueryString(parameters)}`, {
    headers: {
      'User-Agent': options.userAgent
    }
  })
}

export default createTaglessRequest
