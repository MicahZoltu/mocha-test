const assert = require("chai").assert;
const originalUncaughtExceptionListeners = process.listeners("uncaughtException")
// comment out the following line to get the test runner to do the right thing
const solc = require("solc");
// uncomment the following lines to "fix" the problem caused by the line above
//process.removeAllListeners("uncaughtException");
//originalUncaughtExceptionListeners.forEach((listener) => process.addListener("uncaughtException", listener));

describe("example", () => {
  it("first", (done) => setTimeout(() => assert.fail("first failure")));
  it("second", (done) => setTimeout(() => { try { assert.fail("second failure") } catch (error) { done(error) } }));
});
