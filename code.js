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
const sayHello = (str) => {
    if(str === true || str === false) {
        return `Hello, World!`;
    }else if (str === null || str === ""){
        return `Hello, World!`;
    }else if(str === typeof 'object' || str === typeof 'function'){
        return `Hello, ${str}!`;
    }
    return `Hello, ${str}!`;
}

console.log(sayHello(true));
console.log(sayHello(false));
console.log(sayHello(null));
console.log(sayHello("Johnny"));
console.log(sayHello(typeof ([])));
