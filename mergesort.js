function split(array) {
  if (array.length < 2) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middle);
  let secondHalf = array.slice(middle);

  return mergeSort(split(firstHalf), split(secondHalf));
}

function mergeSort(firstHalf, secondHalf) {
  let temp = [];

  while (firstHalf[0] && secondHalf[0]) {
    if (firstHalf[0] > secondHalf[0]) {
      temp.push(secondHalf.shift());
    } else {
      temp.push(firstHalf.shift());
    }
  }

  return temp.concat(firstHalf).concat(secondHalf);
}
