const nock = require("nock")

export const mochaHooks = {
  beforeAll() {
    nock.disableNetConnect()
  },
}
