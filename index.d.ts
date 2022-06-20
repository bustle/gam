import TaglessRequestParameters from "./types/taglessRequestParameters"
import RequestOptions from './types/requestOptions'

export { TaglessRequestParameters }

export function createTaglessRequest(
  parameters: TaglessRequestParameters,
  options?: RequestOptions
): Promise<Response>
