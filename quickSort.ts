// select first element, move smaller elements to left part and bigger to right part
// do quicksort for left and right parts of the array
export default function quickSort(array: number[]): number[] {
  if (array.length < 2) return array;

  const smaller: number[] = [];
  const bigger: number[] = [];
  const element = array[0];

  for (let i = 1; i < array.length; i++) {
    if (element > array[i]) {
      smaller.push(array[i]);
    } else {
      bigger.push(array[i]);
    }
  }
  return [...quickSort(smaller), element, ...quickSort(bigger)];
}

console.log(quickSort([1, 3, 4, 6, 2, 3, 4, 6, 8, 4, 7, 3, 2, 4, 5, 3]));

console.log(
  quickSort([
    7, 6, 7, 81, 33, 4, 53, 64, 7, 4, 3, 333, 4, 6, 8, 8, 3, 222, 34, 5, 6, 123,
    3, 3, 4, 5,
  ])
);
