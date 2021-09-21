const reverseString = require("./reversestring");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString function exists", () => {
  expect(reverseString("hello")).toBe("olleh");
});
