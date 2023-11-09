// task 1

function getSum(a, b) {
  return a + b;
}

function getSubtraction(a, b) {
  return a - b;
}

function getDivide(a, b) {
  if (a !== 0 && b === 0) {
    throw new Error("Cannot divide by zero");
  } else if (a === 0 && b === 0) {
    throw new Error("Invalid Format");
  }
  return a / b;
}

function getMultiplication(a, b) {
  if (a !== 0 && b === 0) {
    throw new Error("Cannot multiplication by zero");
  } else if (a === 0 && b === 0) {
    throw new Error("Invalid Format");
  }
  return a * b;
}

// task 2

function reverseString(str) {
  if (typeof str === "string") {
    return str.split("").reverse().join("");
  } else {
    throw new Error("Element type is not a string");
  }
}

// task 3

function getEvenNumbers(array) {
  if (!Array.isArray(array) || array == []) {
    throw new Error("The input value is not an array.");
  } else {
    const pairsNumbers = array.filter((element) => element % 2 === 0);
    return pairsNumbers;
  }
}

// task 4

function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error("Sides cannot be negative or zero");
  } else {
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
}

// task 5

function isEmailValid(email) {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

// task 6

function dateDifference(firstDate, lastDate) {
  const oneDayMilliseconds = 24 * 60 * 60 * 1000;
  const first = new Date(firstDate);
  const last = new Date(lastDate);
  if (isNaN(first) || isNaN(last)) {
    throw new Error("Dates are not in the correct format");
  } else {
    const difference = Math.round(Math.abs(first - last) / oneDayMilliseconds);
    return difference;
  }
}

module.exports = {
  getSum,
  getSubtraction,
  getDivide,
  getMultiplication,
  reverseString,
  triangleArea,
  isEmailValid,
  dateDifference,
  getEvenNumbers,
};
