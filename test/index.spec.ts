import Main from "../src";

test("version is 1.0.1?", () => {
  const test = Main;
  expect(test('首 字 母 1')).toBe("SZM1");
});
