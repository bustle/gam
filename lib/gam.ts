import fetch from "node-fetch"
import createTaglessRequest from "./createTaglessRequest"

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

export { createTaglessRequest }
