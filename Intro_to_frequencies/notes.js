Developing a problem solving process.

This should be your process

1. Understand the problem
* Can your restate the problem in your own words
* What are the inputs that go into the problem
* What are the outputs that should come from the solution to the problem
* Do you have enough information to solve the problem
* How should you label the important pieces of data that are part of the problem
YOU SHOULD ALWAYS COMMUNICATE! ASK QUESTIONS, BOTH FOR YOUR SAKE AND TO GET MORE INFORMATION. 
THIS GIVES THEM INSIGHT ABOUT YOUR THOUGHT PROCESS

example
Write a function which takes two numbers and returns their sum.
- This should be your thought process
1. Can I restate the problem in my own words?
2. What are the inputs that go into the problems:
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs?
5. How should I label the important pieces of data that are a part of the problem?

2. Explore concrete examples
- Start with Simple examples 
- Progress to more complex examples 
- Explore examples with empty inputs 
- Explore examples with invalid inputs 

example
Write a function which takes in a string and returns counts of each character in the string 
charCount('hello') => {'h': 1, 'e': 1, 'l': 2, 'o': 1}
charCount("Your PIN number is 1234!")
{
    1: 1, 
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
}


3. Break it down
- Explicitly write out the steps you need to take 
- You can type this a pseudocode or write it on a whiteboard
    -This forces you to think about the code you'll write before you write it 
-This helps you catch any lingering conceptual issues or misunderstandings
DO NOT WRITE CODE!

Here is a skeleton of charCount 

function charCount(str) {
    //create an empty object to hold char counts
       const obj = {}
    // your counting each character in a string -- so this needs a loop, specifically loop over each char in str
        for(let char of str) {
        // if char is letter or number (ignoring spaces/ punctuation) -- downcase first since you don't want a separate case for uppercase and lowercase
        // if char is in object, add 1 to count 
            if (obj[char]) {
                 obj[char] += 1;
            }
        // otherwise, add to object and set count to 1
           else {
            obj[char] = 1;
            }
        }
    // return object with character counts
    return obj;
}

function charCount(str) {
    const obj = {}
    for(let char of str) {
        if(obj[char]) {
            obj[char] += 1;
        }
        else {
            obj[char] = 1
        }
    }
    return obj;
}

)


4. Solve / Simplify the problem
- Find the core difficult in what your are trying to do 
- Temporarily ignore that difficult 
- Write a simplified solution
- Incorporate that difficulty back in 


5. Use tools strategically
- Use your debugging tools -- use your debugger!
- Don't guess and check
- Scientific approach: formulate hypotheses, test, draw conclusions. Repeat


6. Look back and refactor
- Does the result match the expected output?
- Can you improve the performance of your solution?
- What other ideas could you have pursued? 
    - Does your solution handle all cases?



