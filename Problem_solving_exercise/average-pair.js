// add whatever parameters you deem necessary


/** Write a function called averagePair. 
 * Given a sorted array of integers and a target average, determine if there 
 * is a pair of values in the array where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target.
 */

// write a function that differentiates between a given array and a given target average
// if the average of the pair equals the target average, return true else return false


//What are the inputs? 
// 1. an array of integers 
// 2. a target average

//What are the outputs that should come from the function?
// 1. true or false

// The array is sorted, so we can use the two pointer pattern 
// We can start with the first and last element of the array
// If the average of the two elements is equal to the target average, return true
// If the average is greater than the target average, we need to decrease the average
// So we move the right pointer to the left
// If the average is less than the target average, we need to increase the average
// So we move the left pointer to the right
// We keep doing this until the left pointer is greater than the right pointer
// If we never find a pair that matches the target average, return false


function averagePair(arr, target) {
    // using the two pointer pattern
    // left pointer starts at the beginning of the array
    let left = 0;
    // right pointer starts at the end of the array
    let right = arr.length - 1;

    // while the left pointer is less than the right pointer
    while (left < right) {
        // find the average
        let average = (arr[left] + arr[right]) / 2;
        // if the average is equal to the target average, return true
        if (average === target) {
            return true;
            // if the average is greater than the target [average], move the right pointer to the left
        } else if (average > target) {
            // right-- moves the right pointer to the left
            right--;
            // else move the left pointer to the right
        } else {
            // left++ moves the left pointer to the right
            left++;
        }
    }
    // if we never find a pair that matches the target average, return false
    return false;
}


module.exports = averagePair;

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false