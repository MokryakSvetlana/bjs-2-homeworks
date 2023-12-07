"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

solveEquation(5, 40, 32);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let bodyMortgage = amount - contribution;
  let monthlyPayment = bodyMortgage * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  let totalMortgage = (monthlyPayment * countMonths).toFixed(2);

  return Number(totalMortgage);
}
calculateTotalMortgage(10, 0, 50000, 12);