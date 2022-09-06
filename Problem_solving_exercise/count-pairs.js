// add whatever parameters you deem necessary

//Given an array of integers, and a number, find the number of pairs of integers in the array 
//whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

//write a function that calculates the summed pair of numbers in the array whose sum is equal to the second parameter, if no pairs are found, return 0

//What are the inputs?
// 1. an array of integers
// 2. a number

//What are the outputs that should come from the function? 
// 1. paired numbers 



// function countPairs(arr, num) {
//     let sortedArr = Object.values(arr).sort((a, b) => a - b);
//     let pairCount = 0;
//     let sum = 0;
//     for (let i = 0; i < sortedArr.length; i++) {
//         for (let j = i + 1; j < sortedArr.length; j++) {
//             sum = sortedArr[i] + sortedArr[j];
//             if (sum === num) { // 
//                 pairCount += 1;
//                 console.log(sortedArr[i], sortedArr[j]);
//             }
//         }
//     }
//     return pairCount;
// }


function countPairs(arr, num) {
    if (arr.length === 0) return 0;
    let sortedArr = Object.values(arr).sort((a, b) => a - b);
    let left = 0;
    let right = sortedArr.length - 1;
    let pairCount = 0;
    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === num) {
            pairCount += 1;
            left++;
            right--;
        } else if (sum < num) {
            left++;
        } else {
            right--;
        }
    }
    console.log(pairCount);
    return pairCount;
}

module.exports = countPairs;

console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([0, -4], -4)); // 1 
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2