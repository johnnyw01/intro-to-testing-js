// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

// const sayHello = (str) => {
//     if(str === "Alex"){
//         return ("Hello, Alex!")
//     } else {
//         return ('Hello, Jane!')
//     }
// }

// const sayHello = (str) => {
//     if(str === "Pat"){
//         return ("Hello, Pat!")
//     }else{
//         return "Hello, " + str+"!"
//     }
// }

//Refactored code:
// const sayHello = (str) => {
//     return `Hello, ${str}!`
// }

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

// console.log(sayHello(true));
// console.log(sayHello(false));
// console.log(sayHello(null));
// console.log(sayHello("Johnny"));
// console.log(sayHello(typeof ([])));

// const isFive = (input) => {
//     if(input === 5 || input ==="5"){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isFive(5));
// console.log(isFive(4));
// console.log(isFive(6));
// console.log(isFive("5"));
// console.log(isFive("Five"));

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
//
// console.log(isEven(2));
// console.log( isEven(-4));
// console.log(isEven(3));
// console.log(isEven("banana"));
// console.log(isEven("8"));
// console.log(isEven(Infinity));
// console.log(isEven(true));
// console.log(isEven(false));
// console.log(isEven());

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


Refactored code:
const isVowel =(input)=>{
    if(input === "a" || input === "A"){
        return true;
    }else if(input === "e" || input === "E"){
        return true
    }
    else if(input === "i" || input === "I"){
        return true
    }
    else return input === "o" || input === "U";
}

console.log(isVowel("a"));
console.log(isVowel("A"));
console.log(isVowel("y"));
console.log(isVowel(4));
console.log(isVowel(true));
console.log(isVowel(false));
console.log(isVowel("banana"));
console.log(isVowel());
