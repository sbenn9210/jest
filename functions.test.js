const { functions } = require("./functions");

//to be is for primitaive types
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
  // toBe is a matcher in jest
  //https://jestjs.io/docs/using-matchers
});

test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeNull();
});

//for reference types
test("User should be Shawn Benny object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Shawn",
    lastName: "Benny"
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("There is I in team", () => {
  expect("teamI").toMatch(/I/);
});

test("Admin should be in the usernames array", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//working with Async data
test("User fetched name should be Leanne Graham", () => {
  //assertions verifies that a certain number of assertions are called
  // assertions checks to see if a callback or promise returns
  expect.assertions(1);
  return functions
    .fetchUser()
    .then((data) => expect(data.name).toEqual("Leanne Graham"));
});

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
