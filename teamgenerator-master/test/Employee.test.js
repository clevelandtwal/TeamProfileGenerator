const Employee = require("../lib/Employee");

test("start new employee", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("sets name using a onstructor", () => {
  const name = "trevor";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("sets ID using a contructor", () => {
  const testValue = 37;
  const e = new Employee("test", testValue);
  expect(e.id).toBe(testValue);
});

test("sets email using a constructor", () => {
  const testValue = "trevor@gmail.com";
  const e = new Employee("test", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("gets team member name with getName()", () => {
  const testValue = "trevor";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("gets ID with getId()", () => {
  const testValue = 37;
  const e = new Employee("test", testValue);
  expect(e.getId()).toBe(testValue);
});

test("gets email with getEmail()", () => {
  const testValue = "trevorwallace@gmail.com";
  const e = new Employee("test", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns the \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("trevor", 1, "trevorwallace@gmail.com");
  expect(e.getRole()).toBe(testValue);
});
