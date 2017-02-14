const assert = require("chai").assert;
const TestRPC = require("ethereumjs-testrpc");

describe("example", () => {
  it("first", (done) => setTimeout(() => assert.fail("first failure")));
  it("second", (done) => setTimeout(() => { try { assert.fail("second failure") } catch (error) { done(error) } }));
});
