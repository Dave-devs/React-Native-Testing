import { Subtract } from "@/components/Subtract";

it("Minus 5 and 2 to equals 3", () => {
  expect(Subtract(5, 2)).toBe(3);
  expect(Subtract(5, 2)).toEqual(3);
});
