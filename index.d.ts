import TaglessRequestParameters from "./types/taglessRequestParameters"

export { TaglessRequestParameters }

export function createTaglessRequest(
  parameters: TaglessRequestParameters
): Promise<Response>
