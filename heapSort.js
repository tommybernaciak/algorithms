"use strict";
exports.__esModule = true;
// heap is a structure where root element has max two children that are smaller than root
// this applies to every element in the heap
// Array can be used to represent a heap
// root is a[i] and children are a[2i+1] and a[2i+2]
function heapSort(array) {
    var leftChildIx = function (i) { return 2 * i + 1; };
    var rightChildIx = function (i) { return 2 * i + 2; };
    var isOutOfArray = function (i) { return i > array.length - 1; };
    var swap = function (i1, i2) {
        var temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;
    };
    var findParentIx = function (i) {
        if (i === 0)
            return;
        var parentIx = Math.floor((i - 1) / 2);
        return parentIx < 0 ? undefined : parentIx;
    };
    // if no children return true
    // if only left child - check if root is bigger than child
    // else check if root is bigger than left child and left child is bigger than right child
    var isHeap = function (i) {
        if (isOutOfArray(leftChildIx(i)))
            return true;
        if (isOutOfArray(rightChildIx(i)))
            return array[i] >= array[leftChildIx(i)];
        return (array[i] >= array[leftChildIx(i)] &&
            array[leftChildIx(i)] >= array[rightChildIx(i)]);
    };
    //
    var reorderHeap = function (i) {
        if (array[i] === undefined)
            return;
        if (isHeap(i))
            return;
        if (isOutOfArray(rightChildIx(i))) {
            swap(i, leftChildIx(i));
        }
        else {
            swap(i, array[leftChildIx(i)] >= array[rightChildIx(i)]
                ? leftChildIx(i)
                : rightChildIx(i));
            if (array[rightChildIx(i)] >= array[leftChildIx(i)]) {
                swap(leftChildIx(i), rightChildIx(i));
            }
            reorderHeap(leftChildIx(i));
            reorderHeap(rightChildIx(i));
        }
        var parentIx = findParentIx(i);
        if (parentIx !== undefined)
            reorderHeap(parentIx);
    };
    var resultArray = [];
    while (array.length) {
        reorderHeap(0);
        var firstElement = array.shift();
        firstElement && resultArray.push(firstElement);
    }
    return resultArray.reverse();
}
exports["default"] = heapSort;
console.log(heapSort([1, 3, 4, 6, 2, 3, 4, 6, 8, 4, 7, 3, 2, 4, 5, 3]));
console.log(heapSort([
    7, 6, 7, 81, 33, 4, 53, 64, 7, 4, 3, 333, 4, 6, 8, 8, 3, 222, 34, 5, 6, 123,
    3, 3, 4, 5,
]));
console.log(heapSort([1, 3, 5, 6, 2, 4, 5, 7, 2]));
console.log(heapSort([1, 3, 5, 4, 3]));
