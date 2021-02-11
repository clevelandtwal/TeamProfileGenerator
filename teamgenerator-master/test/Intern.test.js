const Intern = require("../lib/Intern");

test("sets school with constructor", () => {
  const testValue = "CWRU";
  const e = new Intern("trevor", 1, "trevorwallace@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("trevor", 1, "trevorwallace@gmail.com", "Hard Knocks Academy");
  expect(e.getRole()).toBe(testValue);
});

test("uses getSchool() to get school", () => {
  const testValue = "CWRU";
  const e = new Intern("trevor", 1, "trevorwallace@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
