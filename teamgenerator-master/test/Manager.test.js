const Mgr = require("../lib/Manager");

test("sets office number with constructor", () => {
  const testValue = 20;
  const e = new Mgr("lebron", 1, "lebronjames@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() returns "Manager"', () => {
  const testValue = "Manager";
  const e = new Mgr("lebron", 3, "lebronjames@gmail.com", 200);
  expect(e.getRole()).toBe(testValue);
});

test("gets office number with getOfficeNumber()", () => {
  const testValue = 2;
  const e = new Mgr("lebron", 2, "lebronjames@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
