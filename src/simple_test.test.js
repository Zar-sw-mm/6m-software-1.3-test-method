const { addFunc, isDivisibleBy5, multiPly } = require("./sample");

describe("Test Suite for sample.js functions", () => {
  it("should add 3 numbers", () => {
    const result = addFunc(1, 3, 4);
    expect(result).toBe(8);
  });

  it("should check divisibility by 5", () => {
    const result = isDivisibleBy5(1283);
    expect(result).toBe(false);
  });

  it("should multiply 2 numbers", () => {
    const result = multiPly(5, 2);
    expect(result).toBe(10);
  });

  it("should multiply 2 numbers", () => {
    const result = multiPly(5, -2);
    expect(result).toBe(-10);
  });
});
//So when the command `npm run test` is run, it calls the test suite and runs the individual tests.
