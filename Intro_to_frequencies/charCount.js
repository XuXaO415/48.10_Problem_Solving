// function charCount(str) {
//     const obj = {}
//     for (let char of str) {
//         if (obj[char]) {
//             obj[char] += 1;
//         } else {
//             obj[char] = 1
//         }
//     }
//     return obj;
// }


function charCount(str) {
    // create empty object to hold char counts
    const obj = {};
    //loop over each char in the str 
    for (let char of str) {
        // if char is in object, add 1 to count
        // using a regular expression -- to check if the char is a letter or number
        /**   /[A-Z0-9]/i.test(char) // i flag makes it case insensitive */
        if (/[A-Z0-9]/i.test(char)) {
            if (obj[char]) {
                obj[char] += 1;
            } else {
                // if char is not in object, add it and set count to 1
                obj[char] = 1;
            }
        }
    }
    // return object at end
    return obj;
}

module.exports = charCount;

console.log(charCount("hello")); // {h: 1, e: 1, l: 2, o: 1}