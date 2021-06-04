import nock from "nock"
import { assert } from "chai"
import { createTaglessRequest } from "./gam"

function mockSuccess(parameters: Record<string, any>) {
  nock("https://securepubads.g.doubleclick.net")
    .get("/gampad/adx")
    .query(parameters)
    .reply(200)
}

describe("createTaglessRequest", () => {
  describe("issues a tagless request", () => {
    it("for a single size", async () => {
      const parameters = {
        sz: "7x7",
        iu: "/1234/mySite",
        c: 54633,
        tile: 1,
      }

      mockSuccess(parameters)
      const response = await createTaglessRequest(parameters)
      assert.isTrue(response.ok)
    })
  })
})
