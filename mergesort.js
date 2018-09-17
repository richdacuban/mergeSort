function split(wholeArray) {
  if (wholeArray.length < 2) {
    return wholeArray;
  }
  let middle = Math.floor(wholeArray.length / 2);
  let firstArr = wholeArray.slice(0, middle);
  let secondArr = wholeArray.slice(middle);

  return [firstArr, secondArr];
}

function merge(firstArr, secondArr) {
  let temp = [];

  while (firstArr[0] && secondArr[0]) {
    if (firstArr[0] > secondArr[0]) {
      temp.push(secondArr.shift());
    } else {
      temp.push(firstArr.shift());
    }
  }

  return temp.concat(firstArr).concat(secondArr);
}

function mergeSort(array) {
  let splitArray = split(array);
  let splitA = splitArray[0];
  let splitB = splitArray[1];
  while (splitA) {
    split(splitA);
  }
}
