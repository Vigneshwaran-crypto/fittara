import { sum } from "./math";

test("sum of your math fun", () => {
  const res = sum(1, 1);
  expect(res).toBe(2);
});

test(" 1 + 1 = 2", () => {
  const res = sum(1, 1);
  expect(res).toBe(2);
});
