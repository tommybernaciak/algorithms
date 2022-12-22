// Compare the element in the middle with searched element
// if it is a searched element - return true
// if searched element is smaller - do the same for the half with smaller elements
// if searched element is bigger - do the same for the half with bigger elements
// array must be ordered
export default function binarySearch(arr: number[], element: number): boolean {
  const middleIndex = Math.floor((arr.length - 1) / 2);
  const middle = arr[middleIndex];
  if (element === middle) return true;
  if (element > middle)
    return binarySearch(arr.slice(middleIndex + 1), element);
  if (element < middle) return binarySearch(arr.slice(0, middleIndex), element);
  return false;
}

console.log(binarySearch([1, 3, 5, 7, 9, 10, 11], 3));
console.log(binarySearch([1, 3, 5, 7, 9, 10, 11], 6));

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 10, 11], 8));

console.log(binarySearch([1, 2, 3, 4, 5], 3));
