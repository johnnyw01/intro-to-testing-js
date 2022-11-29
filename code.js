// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

// Exercise #1
//  const sayHello = () =>{
//
//  }

// Exercise #2
//  const sayHello = (str) =>{
//    return "Hello!";
//  }

// console.log(sayHello(""));

// // Exercise #3
//  const sayHello = (str) =>{
//    return "Hello, " + str +"!";
//  }
//
// console.log(sayHello("Jane"));

// Exercise #4
// const sayHello = (str) => {
//     if(str === "Alex"){
//         return ("Hello, Alex!")
//     } else {
//         return ('Hello, Jane!')
//     }
// }

//Exercise #5
// const sayHello = (str) => {
//     if(str === "Pat"){
//         return ("Hello, Pat!")
//     }else{
//         return "Hello, " + str+"!"
//     }
// }

//Exercise 6:
//Refactored code:
// const sayHello = (str) => {
//     return `Hello, ${str}!`
// }

//Exercise 7:
//Added, committed, and pushed work to GitHub.

//Exercise 8:
// const sayHello = (str) => {
//     if(str === true){
//         return "Hello, World!"
//     }
//     return `Hello, ${str}!`
// }

// const sayHello = (str) => {
//     if(str === true){
//         return "Hello, World!"
//     }else if(str === false){
//         return "Hello, World!"
//     }
//     return `Hello, ${str}!`
// }

// Refactored code:
// const sayHello = (str) => {
//     if(str === true || str === false) {
//         return `Hello, World!`;
//     }else if (str === null || str === ""){
//         return `Hello, World!`;
//     }else if(str === typeof 'object' || str === typeof 'function'){
//         return `Hello, ${str}!`;
//     }
//     return `Hello, ${str}!`;
// }
//
// console.log(sayHello(true));
// console.log(sayHello(false));
// console.log(sayHello(null));
// console.log(sayHello("Johnny"));
// console.log(sayHello(typeof ([])));


// Exercise #9
//Added, committed, and pushed work to GitHub.

// Exercise #10
// const isFive = (input) => {
//     if(input === 5 || input ==="5"){
//         return true;
//     }else{
//         return false;
//     }
// }

//Refactored code:

// const isFive = (input) => {
//     return input === 5 || input === "5";
// }
//
// console.log(isFive(5));
// console.log(isFive(4));
// console.log(isFive(6));
// console.log(isFive("5"));
// console.log(isFive("Five"));


// Exercise #11
// const isEven = (input) => {
//     let parsedInput = parseInt(input);
//     if(parsedInput % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// Refactored code:
// const isEven = (input) => {
//     let parsedInput = parseInt(input);
//     return parsedInput % 2 === 0;
// }
// //
// console.log(isEven(2));
// console.log( isEven(-4));
// console.log(isEven(3));
// console.log(isEven("banana"));
// console.log(isEven("8"));
// console.log(isEven(Infinity));
// console.log(isEven(true));
// console.log(isEven(false));
// console.log(isEven());


// Exercise #12
// const isVowel =(input)=>{
//     if(input === "a" || input === "A"){
//         return true;
//     }else if(input === "e" || input === "E"){
//         return true
//     }
//     else if(input === "i" || input === "I"){
//         return true
//     }
//     else if(input === "o" || input === "U"){
//         return true
//     }
//     else {
//         return false
//     }
// }


// // Refactored code:
// const isVowel =(input)=>{
//     if(input === "a" || input === "A"){
//         return true;
//     }else if(input === "e" || input === "E"){
//         return true
//     }
//     else if(input === "i" || input === "I"){
//         return true
//     }
//     else return input === "o" || input === "U";
// }
//
// console.log(isVowel("a"));
// console.log(isVowel("A"));
// console.log(isVowel("y"));
// console.log(isVowel(4));
// console.log(isVowel(true));
// console.log(isVowel(false));
// console.log(isVowel("banana"));
// console.log(isVowel());


// Exercise #13

// const add = (input1, input2) => {
//     if(typeof input1 === 'string' && typeof input2 === 'string'){
//         let parsedInput1 = parseInt(input1);
//         let parsedInput2 = parseInt(input2);
//         let parsedAdded = parsedInput1 + parsedInput2;
//         return parsedAdded;
//     }else if (typeof input1 === 'string' && typeof input2 === 'number'){
//         let parsedStr1 = parseInt(input1);
//         let secondParsedAdded = parsedStr1 + input2
//         return secondParsedAdded;
//     }
//     else if (typeof input1 === 'string' || typeof input2 === 'string' ){
//         return NaN;
//     }
//     else if (typeof input1 === 'NaN' || typeof input2 === 'NaN'){
//         return NaN;
//     }
//     else{
//         return input1 + input2;
//     }
// }

// console.log(add(2,3));
// console.log(add(-3,-9));
// console.log(add("5", 6));
// console.log(add("-4", "10"));
// console.log(add("banana", "split"));
// console.log(add(2, "apples"));
// console.log(add());

//Refactored code:

// const add = (input1, input2) => {
//     if(typeof input1 === 'string' && typeof input2 === 'string'){
//         let parsedInput1 = parseInt(input1);
//         let parsedInput2 = parseInt(input2);
//         return parsedInput1 + parsedInput2;
//     }else if (typeof input1 === 'string' && typeof input2 === 'number'){
//         let parsedStr1 = parseInt(input1);
//         return parsedStr1 + input2;
//     }
//     else if (typeof input1 === 'string' || typeof input2 === 'string' ){
//         return NaN;
//     }
//     else if (typeof input1 === 'NaN' || typeof input2 === 'NaN'){
//         return NaN;
//     }
//     else{
//         return input1 + input2;
//     }
// }
//
// console.log(add(2,3));
// console.log(add(-3,-9));
// console.log(add("5", 6));
// console.log(add("-4", "10"));
// console.log(add("banana", "split"));
// console.log(add(2, "apples"));
// console.log(add());
