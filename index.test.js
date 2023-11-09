const {
  getSum,
  getSubtraction,
  getDivide,
  getMultiplication,
  isEmailValid,
  reverseString,
  dateDifference,
  triangleArea,
  getEvenNumbers,
} = require("./index");

// 1.Simple mathematical operations

describe("getSum function", () => {
  test("Checking the function of finding the sum of two numbers", () => {
    expect(getSum(1, 3)).toBe(4);
  });
});

describe("getSubtraction function", () => {
  test("10-3=7 checking", () => {
    expect(getSubtraction(10, 3)).toBe(7);
  });
});

describe("getDivide function", () => {
  test("Should return error when divide 1/0", () => {
    expect(() => getDivide(1, 0)).toThrow(new Error("Cannot divide by zero"));
  });
});

describe("getMultiplication function", () => {
  test("Should return error when multiplication 1/0", () => {
    expect(() => getMultiplication(1, 0)).toThrow(
      new Error("Cannot multiplication by zero")
    );
  });
});

// 2. Write the string in reverse and check

describe("ReverseString function", () => {
  test("Check the type of the string and reverse it", () => {
    const text = "unit testing";
    const expectedText = "gnitset tinu";
    expect(reverseString(text)).toBe(expectedText);
  });
});

// 3.Returns an array of even numbers

describe("getEvenNumbers function", () => {
  test("Returns an array of even numbers", () => {
    const inputArr = [12, 28, 43, 54, 25, 76, 37, 28];
    const expectedOutput = [12, 28, 54, 76, 28];
    expect(getEvenNumbers(inputArr)).toEqual(expectedOutput);
  });
});

// 4. Find the perimeter of the triangle
describe("triangleArea function", () => {
  expect(triangleArea(5, 6, 7)).toBeCloseTo(14.696938456699069, 15);
  expect(triangleArea(8, 15, 17)).toBe(60);
});

// 5.Checking email

describe("isEmailValid function", () => {
  test("Checking email", () => {
    const validEmails = [
      "fatima.eyvazovaa@gmail.com",
      "unit_testing@mail.ru",
      "academy.1@mail.ru",
    ];

    const inValidEmails = [
      "fatima.eyvazovaa@gmail",
      "unit_testing@ru",
      "academy.1@",
    ];

    validEmails.forEach((email) => {
      expect(isEmailValid(email)).toBe(true);
    });

    inValidEmails.forEach((email) => {
      expect(isEmailValid(email)).toBe(false);
    });
  });
});

// 5.Checking date difference

describe("dateDifference function", () => {
  test("day difference between dates", () => {
    const firstDate = "2022-04-10";
    const lastDate = "2022-04-05";

    expect(dateDifference(firstDate, lastDate)).toBe(5);
  });
});
