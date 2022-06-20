import { assert } from "chai"
import createQueryString from "./createQueryString"

describe("createQueryString", () => {
  it("returns an empty string from an empty object", () => {
    assert.equal(createQueryString({}), "")
  })

  it("builds a query string", () => {
    assert.equal(createQueryString({ a: "b" }), "a=b")
  })

  it("handles nested objects", () => {
    const qs = createQueryString({ t: { a: "b", c: "d" } })
    assert.equal(qs, "t=a%3Db%26c%3Dd")
  })

  it("drops undefined fields", () => {
    /* eslint-disable-next-line no-undefined */
    const qs = createQueryString({ a: "b", c: undefined })
    assert.equal(qs, "a=b")
  })
})
