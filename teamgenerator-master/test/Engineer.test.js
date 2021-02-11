const Eng = require("../lib/Engineer");

test("sets github with constructor", () => {
  const testValue = "githubName";
  const e = new Eng ("Guy Fieri", 1, "guyfieri@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Eng ("Guy Fieri", 1, "guyfieri@gmail.com", "githubName");
  expect(e.getRole()).toBe(testValue);
});

test("uses getGithub() to get github username", () => {
  const testValue = "githubName";
  const e = new Eng ("Guy Fieri", 1, "guyfieri@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
