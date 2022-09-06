// add whatever parameters you deem necessary

//Write a function called isSubsequence which takes in two strings and checks whether 
//the characters in the first string form a subsequence of the characters in the second string. 
//In other words, the function should check whether the characters in the first string appear somewhere 
//in the second string, without their order changing.

//write a function that checks whether two strings are a subsequence of each other. 
//If they are, return true, else return false

//what are the inputs?
// 1. a string1 
// 2. a string2

//what are the outputs?
// 1. true or false

//can the outputs be determined from the inputs?
// yes

//What variables do I need?
// a pointer for the first string
// a pointer for the second string

//What are the steps to solve this problem?
// 1. create an empty object to hold the first string
// 2. create another empty object to hold the second string
// 3. create a loop that compares the first string to the second string
// 4. if the first string is a subsequence of the second string, return true
// 5. else return false

//failed test case: should return false if the first string is not a subsequence of the second string
// function isSubsequence(str1, str2) {
//     if (str1.length > str2.length) {
//         return false;
//     } else {
//         for (let i = 0; i < str1.length; i++) {
//             if (str2.includes(str1[i])) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }

//REDO
// create a counter
// create a loop that that checks the substring
// if the string1 is equal to the string2, increment the counter to check the next character in the string
// if the counter is equal to the length of the string1, return true
// else return false


function isSubsequence(str1, str2) {
    let count = 0;
    // loop through substring
    for (let i = 0; i < str2.length; i++) {
        if (str1[count] === str2[i]) {
            // increment the counter to check the next character in the string
            count += 1;
        }
    }
    // if the counter is equal to the length of the string1, return true
    if (count === str1.length) {
        return true;
    }
    return false;
}





module.exports = isSubsequence;

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)