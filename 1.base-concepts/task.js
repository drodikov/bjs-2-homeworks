"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];    
  } else if (d == 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }

  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (typeof percent === 'string') {
    percent = Number(percent);
  } else if (typeof percent === 'number') {
    percent = percent;
  } else {
    console.log(`Параметр процентная ставка содержит неправильное значение ${percent}`);
  }
  if (typeof contribution === 'string') {
    contribution = Number(contribution);
  } else if (typeof contribution === 'number') {
    contribution = contribution;
  } else {
    console.log(`Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`);
  }
  if (typeof amount === 'string') {
    amount = Number(amount);
  } else if (typeof amount === 'number') {
    amount = amount;
  } else {
    console.log(`Параметр сумма кредита содержит неправильное значение ${amount}`);
  }
  let s = amount - contribution;
  let p = percent / 12;
  let date1 = new Date();
  let n = (date - date1) / 2592000000;
  let e = s * (p + (p / (((1 + p) ** n) - 1)));
  totalAmount = e * n.toFixed(2);
  console.log(totalAmount);
    // код для задачи №2 писать здесь

  return totalAmount;
}
