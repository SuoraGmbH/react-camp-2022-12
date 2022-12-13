import { add } from "./add";

describe("add", () => {
  test("1+1 should be 2", () => {
    expect(add(1, 1)).toBe(2);
  });
  test("1+2 should be 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
