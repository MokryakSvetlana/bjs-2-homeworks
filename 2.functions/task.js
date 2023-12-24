function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let avg = Infinity;
  let sum = 0;

  for (let i= 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = (sum / arr.length).toFixed(2)
  return { min: min, max: max, avg: Number(avg) };

}

getArrayParams(20, 4, 8, 17, -3, 0);


function summElementsWorker(...arr) {
  let sum = 0;
  for (let i= 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i= 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  if (min === Infinity || max === -Infinity) {
    return 0;
  }
  return max-min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i= 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
    else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i= 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) {
    return 0;
  }
  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork (arrOfArr, func) {
  console.log(arrOfArr)
  let maxWorkerResult = -Infinity;
  for (let i= 0; i < arrOfArr.length; i++){
    let result = func (...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
