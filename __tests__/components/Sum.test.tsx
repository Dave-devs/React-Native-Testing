import { Sum } from "@/components/Sum";

it("sum of 1 and 3 equals 3", () => {
  expect(Sum(1, 2)).toEqual(3);
  expect(Sum(1, 2)).toBe(3);
});
