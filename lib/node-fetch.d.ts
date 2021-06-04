// real @node-fetch/types clash with native browser fetch
declare module "node-fetch" {
  const fetch: GlobalFetch["fetch"]
  export default fetch
}
