// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given; 
//otherwise, it should return false.

//Build a constructor that counts the number of times a letter appears in a string 
//and returns a boolean value based on whether or not the first string can be constructed using the letters in the second string.

//for example, if you are given the string "hello" and the letters "ehllo", you should return true.

//What are the inputs?
// 1. sting1 => input1
// 2. string2 => input2

//What are the outputs that should come from the function?
// 1. boolean true or false

//Can the outputs be determined from the inputs?
// 1. yes

//How should I label the important pieces of data that are a part of the problem?
// 1. message
// 2. letters
// 3. return true or false
// 4. if true, a message should be constructed using the letters

//https://developer.mozilla.org/en-US/docs/Glossary/Falsy

//what does the function do?
// 1. it takes in two strings, a message and some letters
// 2. it returns true if the message can be built with the letters that you are given
// 3. it returns false if the message cannot be built with the letters that you are given


function constructNote(msg, letters) {
    // create an empty object to hold letter counts
    let letterCount = {};
    // loop over each letter in letters
    for (let letter of letters) {
        //if letter is in the object or is falsey, add 1 to count
        // 0 means falsey, so if letterCount[letter] is falsey, then it will be 0
        letterCount[letter] = (letterCount[letter] || 0) + 1; // 
    }
    // loop over each letter in msg
    for (let letter of msg) {
        // letterCount[letter] means that the letter is in the object
        // if !letterCount[letter] is not in the object, then it will be falsey
        if (!letterCount[letter]) {
            return false;
        } else {

            letterCount[letter] -= 1; // subtract 1 from the letter count
        }
    }
    return true;
}

module.exports = constructNote;

console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true