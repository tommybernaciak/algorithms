"use strict";
exports.__esModule = true;
// go one by one and compare with next element, if element is greater - swap
// this will move the biggest value to the last place after 1 full iteration
// make iteration for each element - all will be sorted
function bubbleSort(array) {
    var swap = function (i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1);
            }
        }
    }
    return array;
}
exports["default"] = bubbleSort;
console.log(bubbleSort([1, 3, 4, 6, 2, 3, 4, 6, 8, 4, 7, 3, 2, 4, 5, 3]));
console.log(bubbleSort([
    7, 6, 7, 81, 33, 4, 53, 64, 7, 4, 3, 333, 4, 6, 8, 8, 3, 222, 34, 5, 6, 123,
    3, 3, 4, 5,
]));
