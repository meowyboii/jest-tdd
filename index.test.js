import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("capitalize a string", () => {
  expect(capitalize("CaPiTALizE")).toBe("Capitalize");
});

test("reverse a string", () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test("operations in a calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(2, 1)).toBe(2);
});

test("caesar shift cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze an array", () => {
  const input = [1, 8, 3, 4, 2, 6];
  const expectedOutput = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  const result = analyzeArray(input);

  expect(result).toEqual(expectedOutput);
});
