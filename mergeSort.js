"use strict";
exports.__esModule = true;
// split array to two
// do a merge sort on both arrays
// merge both arrays by comparing elements and adding to temp array
// return temp array
function mergeSort(array) {
    if (array.length < 2)
        return array;
    var middleIndex = Math.floor((array.length - 1) / 2);
    var sortedFirst = mergeSort(array.slice(0, middleIndex + 1));
    var sortedSecond = mergeSort(array.slice(middleIndex + 1));
    var final = [];
    var firstIx = 0;
    var secondIx = 0;
    while (final.length < array.length) {
        //  if one of the values is undefined, skip check and push value from another array
        if (!sortedFirst[firstIx]) {
            final.push(sortedSecond[secondIx]);
            secondIx++;
            continue;
        }
        if (!sortedSecond[secondIx]) {
            final.push(sortedFirst[firstIx]);
            firstIx++;
            continue;
        }
        if (sortedFirst[firstIx] < sortedSecond[secondIx]) {
            final.push(sortedFirst[firstIx]);
            firstIx++;
        }
        else {
            final.push(sortedSecond[secondIx]);
            secondIx++;
        }
    }
    return final;
}
exports["default"] = mergeSort;
console.log(mergeSort([1, 3, 4, 6, 2, 3, 4, 6, 8, 4, 7, 3, 2, 4, 5, 3]));
console.log(mergeSort([
    7, 6, 7, 81, 33, 4, 53, 64, 7, 4, 3, 333, 4, 6, 8, 8, 3, 222, 34, 5, 6, 123,
    3, 3, 4, 5,
]));
console.log(mergeSort([1, 3, 5, 6, 2, 4, 5, 7, 2]));
console.log(mergeSort([1, 3, 5, 4, 3]));
