import fetch from "node-fetch"
import createTaglessRequest from "./createTaglessRequest"
import TaglessRequestParameters from "./types/taglessRequestParameters"

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

export { createTaglessRequest, TaglessRequestParameters }
