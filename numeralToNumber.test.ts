import { numeralToNumber } from "./numeralToNumber";

// Objectives 2, 3, 4 and 5
test("Should return a number", () => {
  const result = numeralToNumber("Nine Hundred and eiGhty seVen thouSand, six hundred and fifty-four");
  expect(typeof result).toBe("number");
});

// Objective 1
test("Should return NaN if the string is not valid", () => {
  const result = numeralToNumber("This is not a number");
  expect(result).toBeNaN
});

test("Should return a negative number if 'negative' or 'minus' are the first words", () => {
  const result = numeralToNumber("minus one thousand and seventy six")
  const result2 = numeralToNumber("negative seventy seven")
  expect(result && result2).toBeLessThan(0)   // jest-extended seems to have a .toBeNegative() test?
});

