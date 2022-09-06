// add whatever parameters you deem necessary

//Write a function called separatePositive which accepts an array of non-zero integers. 
//Separate the positive integers to the left and the negative integers to the right. 
//The positive numbers and negative numbers need not be in sorted order. 
//The problem should be done in place (in other words, do not build a copy of the input array).

// write a function that takes in an array of numbers and separates the positive numbers to the left and the negative numbers to the right

// what are the inputs?
// an array of numbers

// what are the outputs?
// an array of numbers

// can the outputs be determined from the inputs?
// yes

//What variables do I need?
// a pointer to the first element
// a pointer to the last element
// a temp variable to hold the array element at the first pointer



function separatePositive(nums) {
    // pointer for the first element
    let leftPos = 0;
    // pointer for the last element
    let rightNeg = nums.length - 1;
    // 
    let temp = [];
    // while the first pointer is less than the last pointer
    while (leftPos < rightNeg) {
        // if the first pointer is positive, move pointer to the left
        if (nums[leftPos] > 0) {
            // movies the left pointer to the right
            leftPos++;
            // if the last pointer is less or equal to -1, move pointer to the right
        } else if (nums[rightNeg] <= -1) {
            rightNeg--;
        } else {
            // temp variable to hold the array element at the first pointer
            temp = nums[leftPos];
            // array element at the first pointer is equal to the array element at the last pointer
            nums[leftPos] = nums[rightNeg];
            // array element at the last pointer is in the temp array
            nums[rightNeg] = temp;
            // move the left pointer to the right
            leftPos++;
            // move the right pointer to the left
            rightNeg--;
        }
    }
    return nums;
}


module.exports = separatePositive;

console.log(separatePositive([2, -1, -3, 6, -8, 10])); // [2, 6, 10, -1, -3, -8]
console.log(separatePositive([5, 10, -15, 20, 25])); // [5, 10, 25, 20, -15]
console.log(separatePositive([-5, 5])); // [5, -5]
console.log(separatePositive([-5, -10, 1, 2, 3])); // [1, 2, 3, -5, -10]    
console.log(separatePositive([1, 2, 3])); // [1, 2, 3]
console.log(separatePositive([-1, -2, -3], [3, 2, 1])); // [3, 2, 1, -1, -2, -3]