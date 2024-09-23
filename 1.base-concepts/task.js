"use strict"

function solveEquation(a, b, c) {
  //a*(x*x)+b*x+c=0
  let arr = [];
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    console.log ('Уравнение не возвращает корней '); 

  } else if (discriminant ===0) {
    arr[0] = -b / (2 * a)
    console.log ('Уравнение возвращает один корень ' + arr[0]);

  } else { 
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log ('Уравнение возвращает два корня ' + arr[0] + ',' + arr[1]);
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  let loanBody = amount - contribution;
  let monthlyPercent = percent / 100 / 12;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
  let totalAmount = (monthlyPayment * countMonths).toFixed(2);
  return +totalAmount;
}

