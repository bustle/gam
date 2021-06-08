import nock from "nock"
import { assert } from "chai"
import { createTaglessRequest } from "./gam"

const creative = `
  <script>
    var payload = {
      hello: '[%hello%]'
    }
  </script>
`

function mockSuccess(parameters: Record<string, any>) {
  nock("https://securepubads.g.doubleclick.net")
    .get("/gampad/adx")
    .query(parameters)
    .reply(200, creative)
}

describe("createTaglessRequest", () => {
  describe("issues a tagless request", () => {
    it("for a single size", async () => {
      const parameters = {
        iu: "/1234/mySite",
        sz: "7x7",
        c: 54633,
        tile: 1,
      }

      mockSuccess(parameters)
      const response = await createTaglessRequest(parameters)
      assert.equal(response.status, 200)
      assert.isOk(await response.text())
    })
  })
})
