const nock = require("nock")

export const mochaHooks = {
  async beforeAll() {
    nock.disableNetConnect()
  },
}
