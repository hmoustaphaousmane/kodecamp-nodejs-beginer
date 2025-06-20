/* 1. Write a function that accepts a number and returns the factorial of that number.
E.g factorial(4); Output 24
*/
const factorial = (num) => {
    if (num === 0 || num === 1)
        return 1;
    else
        return num * factorial(num - 1)
}

console.log(factorial(4));

/* 2. Write a function that accepts an array of numbers and returns the largest number in the array.
Note: Do not use Math.max(); for this solution.
*/
const largestNumber = (numbers) => {
    let maxNumber = numbers[0];

    numbers.forEach(num => {
        if (num > maxNumber)
            maxNumber = num;
    });

    return maxNumber;
}

console.log(largestNumber([0, 23, 2, 53, 1, 11, 21, 83, 4, 63, 5]))

// 3. Write a function that accepts a string and returns the number of consonants in that string.
const numberOfConsonants = (str) => {
    let counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    str = str.split('');
    
    str.forEach(caracter => {
        if (vowels.includes(caracter)) {
            console.log(caracter);
            counter += 1
        }
    });

    return counter;
}

console.log(numberOfConsonants("hello the world"));


// Write a function that accepts a number and returns the multiplication table for that number up to 12.
const multiplicationTable = (num) => {
    for (let i = 1; i <= 12; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
        
    }
}

multiplicationTable(5);

/* 5. Write a function that accepts two parameters, a string and a callback function.
The callback function should receive and print the reversed form of the string passed to its parent function. */

const reverse = (str) => {
    console.log(str.split('').reverse().join(''));

}

const hello = (str, callback) => {
    callback(str);
}

hello("hassane", reverse)