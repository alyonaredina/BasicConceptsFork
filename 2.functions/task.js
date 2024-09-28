//Задание 1.

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  max = Math.max(...arr);
  min = Math.min(...arr);
  
  for (let i = 0; i < arr.length; i++) {
    /*if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }*/
    sum += arr[i];
  }
  
  const avg = +((sum / arr.length).toFixed(2));
  
  return {
    min: min,
    max: max,
    avg: avg
  }
}




//Задание 2.

function summElementsWorker(...arr) {  
  if (arr.length == 0) {
    return 0;

  } else {
    let sum = arr.reduce((acc, c) => {
      return acc + c;      
    }, 0);

    return sum;
    //console.log(sum);
  }  
}


function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  
  if (arr.length == 0){
    return 0;

  } else {
    max = Math.max(...arr);    
    min = Math.min(...arr);
   

    const difference = max - min;
    return difference;
    console.log(difference);
  }  
}


function differenceEvenOddWorker(...arr) {  
  if (arr.length == 0) {
    return 0;
  } 

  let sumEvenElement = 0;     //сумма четного элемента
  let sumOddElement = 0;      //суммировать нечетные элементы  

  for (i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];

    } else {
      sumOddElement += arr[i];        
    }    
  } 
  return sumEvenElement - sumOddElement;  
}


function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  
  let sumEvenElement = 0;         //сумма чётных элементов
  let countEvenElement = 0;       //кол-во чётных элементов
  
  for (i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;     
    }     
  }
  return sumEvenElement / countEvenElement;
}  


//Задание 3.

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;     //максимальный результат работы работника

  for (let i = 0; i < arrOfArr.length; i ++){
    let values = func(...arrOfArr[i]);

    if (values > maxWorkerResult) {
      maxWorkerResult = values;
    }    
  }
  return maxWorkerResult;
}
