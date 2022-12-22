// heap is a structure where root element has max two children that are smaller than root
// this applies to every element in the heap
// Array can be used to represent a heap
// root is a[i] and children are a[2i+1] and a[2i+2]
export default function heapSort(array: number[]): number[] {
  const leftChildIx = (i) => 2 * i + 1;
  const rightChildIx = (i) => 2 * i + 2;
  const isOutOfArray = (i) => i > array.length - 1;

  const swap = (i1: number, i2: number) => {
    const temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  };
  const findParentIx = (i: number): number | undefined => {
    if (i === 0) return;
    const parentIx = Math.floor((i - 1) / 2);
    return parentIx < 0 ? undefined : parentIx;
  };

  // if no children return true
  // if only left child - check if root is bigger than child
  // else check if root is bigger than left child and left child is bigger than right child
  const isHeap = (i: number): boolean => {
    if (isOutOfArray(leftChildIx(i))) return true;
    if (isOutOfArray(rightChildIx(i))) return array[i] >= array[leftChildIx(i)];
    return (
      array[i] >= array[leftChildIx(i)] &&
      array[leftChildIx(i)] >= array[rightChildIx(i)]
    );
  };

  // if is already a heap - return
  // if there is not right child - left child is bigger than root so they should be swaped
  // if we have all three elements:
  //  check which child is bigger and swap it with root
  //  next check if right child is bigger and swap children if it is true
  //  run reorderHeap for both children
  // finally check if root has a parent and run reorderHeap for parent if it is true
  const reorderHeap = (i: number) => {
    if (array[i] === undefined) return;
    if (isHeap(i)) return;

    if (isOutOfArray(rightChildIx(i))) {
      swap(i, leftChildIx(i));
    } else {
      swap(
        i,
        array[leftChildIx(i)] >= array[rightChildIx(i)]
          ? leftChildIx(i)
          : rightChildIx(i)
      );
      if (array[rightChildIx(i)] >= array[leftChildIx(i)]) {
        swap(leftChildIx(i), rightChildIx(i));
      }
      reorderHeap(leftChildIx(i));
      reorderHeap(rightChildIx(i));
    }

    const parentIx = findParentIx(i);
    if (parentIx !== undefined) reorderHeap(parentIx);
  };

  // reorder heap - this will move the biggest element to the top
  // remove it from array and add to resultArray
  //  repeat until all elements are moved to resultArray
  const resultArray: number[] = [];
  while (array.length) {
    reorderHeap(0);
    const firstElement = array.shift();
    firstElement && resultArray.push(firstElement);
  }

  return resultArray.reverse();
}

console.log(heapSort([1, 3, 4, 6, 2, 3, 4, 6, 8, 4, 7, 3, 2, 4, 5, 3]));

console.log(
  heapSort([
    7, 6, 7, 81, 33, 4, 53, 64, 7, 4, 3, 333, 4, 6, 8, 8, 3, 222, 34, 5, 6, 123,
    3, 3, 4, 5,
  ])
);

console.log(heapSort([1, 3, 5, 6, 2, 4, 5, 7, 2]));

console.log(heapSort([1, 3, 5, 4, 3]));
