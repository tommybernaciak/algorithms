"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// select first element, move smaller elements to left part and bigger to right part
// do quicksort for left and right parts of the array
function quickSort(array) {
    if (array.length < 2)
        return array;
    var smaller = [];
    var bigger = [];
    var element = array[0];
    for (var i = 1; i < array.length; i++) {
        if (element > array[i]) {
            smaller.push(array[i]);
        }
        else {
            bigger.push(array[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(smaller), true), [element], false), quickSort(bigger), true);
}
exports["default"] = quickSort;
console.log(quickSort([1, 3, 4, 6, 2, 3, 4, 6, 8, 4, 7, 3, 2, 4, 5, 3]));
console.log(quickSort([
    7, 6, 7, 81, 33, 4, 53, 64, 7, 4, 3, 333, 4, 6, 8, 8, 3, 222, 34, 5, 6, 123,
    3, 3, 4, 5,
]));
