import nock from "nock"
import { assert } from "chai"
import { createTaglessRequest } from "../index"
import RequestOptions from "../types/requestOptions"

const creative = `
  <script>
    var payload = {
      hello: '[%hello%]'
    }
  </script>
`

function mockSuccess(parameters: Record<string, any>, options: RequestOptions) {
  nock("https://securepubads.g.doubleclick.net")
    .get("/gampad/adx")
    .matchHeader('user-agent', options.headers['User-Agent'])
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

      mockSuccess(parameters, { headers: { 'User-Agent': 'myUserAgent' }} )
      const response = await createTaglessRequest(parameters, { headers: { 'User-Agent': 'myUserAgent' }})
      assert.equal(response.status, 200)
      assert.isOk(await response.text())
    })
  })
})
