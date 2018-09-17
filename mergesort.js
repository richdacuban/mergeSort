function split(wholeArray) {
  let middle = Math.floor(wholeArray.length / 2);
  let firstArr = wholeArray.slice(0, middle);
  let secondArr = wholeArray.slice(middle);

  return [firstArr, secondArr];
}

function merge(left, right) {
  const merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let splitArray = split(array);
  let splitA = splitArray[0];
  let splitB = splitArray[1];

  return merge(mergeSort(splitA), mergeSort(splitB));
}
