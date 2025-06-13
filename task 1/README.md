# task 1

## 1. The concept of JavaScript string template and interpolation

String template (also called template string or template literal) is a string literal delimited by backticks (\`) instead of single or double quotes. It is a feature of JavaScript that allows developers to work with strings in a convenient way. String templates are commonly used for string interpolation — the process of embedding expressions/variables using placeholders (`${}`) for easier concatenation.

## 2. The difference between a local and a global variable

The difference between a local and a global variable resides in their scope, lifetime and accessibility. A local variable is declared inside a function or a block and it is accessible only in this particular function or block. Therefore, it only exists during the execution of this particular function or block so its lifetime is limited to the function’s or block’s execution. A global variable is declared outside of all functions and blocks and is available in the entire program so its lifetime goes from the beginning of the program’s execution till its end. In short, a local variable is confined within a function or block and cannot be accessed or modified outside of the scope of the function or block while a global variable is accessible anywhere in the program.

## 3. JavaScript has a Math object, List and explain two constants and 3 methods the Math object has

The JavaScript Math object “contains static properties and methods for mathematical constants and functions”.

- Two constants the Math object has:
  - Math.PI: returns the number π, this is the ratio of a circle’s circumference to its diameter, approximately 3.14159
  - Math.LN10: returns the natural logarithm of 10, approximately 2.303
- Three methods the Math object has:
  - Math.random(): returns a pseudo-random number between 0 and 1
  - Math.sqrt(): returns the positive square root of a given number (e.g. Math.sqrt(4) will return 2).
  - Math.cos(): returns the cosine of the input (e.g.: Math.cos(90) returns -0.4480736161291701).

## 4. Explain the term hoisting and temporal dead zone in JavaScript

The term hoisting in JavaScript refers to the behavior where declarations (variables, functions, classes, …) are moved to the top of their scope. It allows the use of a variable/function before its declaration. It is particularly relevant to variables declared with `var` as they have an initial value of `undefined` prior to their initialization. Variables declared with `let` or `const` are also hoisted but not initialized, so accessing them before their declarations leads to a “temporal dead zone” and results in a `ReferenceError`.
The term temporal dead zone in JavaScript is where a variable declared with `let`, `const`, or `class` is placed from the start of the block until code execution reaches its declaration and initialization. As mentioned above, any attempt to access the variable while it is in the temporal dead zone, will result in a `ReferenceError`.

## 5. A function that accepts a number and returns true if the number is an even number and returns false if the number is an odd number

```javascript
const isEven = (number) => {
    if (number % 2 === 0) return true;
    else return false;
}
```

## References

- [MDN Web Docs - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Wikipedia - String interpolation](https://www.geeksforgeeks.org/dsa/difference-between-local-variable-and-global-variable/)
- [Geeks For Geeks, Difference between Local Variable and Global variable](https://www.geeksforgeeks.org/dsa/difference-between-local-variable-and-global-variable/)
- [MDN Web Docs - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [MDN Web Docs - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
