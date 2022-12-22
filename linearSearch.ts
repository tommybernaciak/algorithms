//  Go one by one and compare with searched element

export default function linearSearch(arr: number[], item: number): boolean {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === item) return true;
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 5, 6, 7], 4));

console.log(linearSearch([1, 2, 3, 5, 6, 7, 2, 3, 4, 5, 3, 2, 5, 6], 6));

console.log(linearSearch([1, 3, 4, 5, 6, 7, 6], 4));
