import fetch from "node-fetch"
import createTaglessRequest from "./lib/createTaglessRequest"

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

export { createTaglessRequest }
