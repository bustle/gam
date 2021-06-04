import fetch from "node-fetch"
export { createTaglessRequest } from "./request"

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}
