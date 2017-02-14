var assert = require("chai").assert;

describe("example", () => {
  it("first", (done) => setTimeout(() => assert.fail("first failure")));
  it("second", (done) => setTimeout(() => { try { assert.fail("second failure") } catch (error) { done(error) } }));
});
