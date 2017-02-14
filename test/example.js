const assert = require("chai").assert;
// comment out the following line to get the test runner to do the right thing
const solc = require("solc");

describe("example", () => {
  it("first", (done) => setTimeout(() => assert.fail("first failure")));
  it("second", (done) => setTimeout(() => { try { assert.fail("second failure") } catch (error) { done(error) } }));
});
