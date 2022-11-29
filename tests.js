// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// });

// Exercise #1
// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
// });

// //Exercise #2
// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//      it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//         return ""
//     });
// });

//Exercise #3

// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//         return ""
//     });
//     it('should return "Hello" concatenated with the string passed in as an argument', () => {
//         expect(sayHello("Jane")).toBe("Hello Jane!")
//         return ("Hello Jane!");
//     });
// });

//Exercise #4
// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//         return ""
//     });
//     it('should return "Hello" concatenated with the string passed in as an argument', () => {
//         expect(sayHello("Alex")).toBe("Hello Alex!")
//         return ("Hello Alex!");
//     });
//     it('should return "Hello Alex" if `input is === Alex`, else should return "Hello Jane"', () => {
//         expect(sayHello("Alex ")).toBe("Hello Alex!")
//         if(sayHello("=== Alex")){
//         return ("Hello Alex!")}
//         else{ return ('Hello Jane!')}
//     });
// });

//Exercise #5

describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', () => {
        expect(typeof sayHello()).toBe('string')
        return ""
    });
    it('should return "Hello" concatenated with the string passed in as an argument', () => {
        expect(sayHello("Pat")).toBe("Hello Pat!")
        return ("Hello Pat!");
    });
    it('should return "Hello Pat" if `input is === Pat`', () => {
        expect(sayHello("Pat")).toBe("Hello Pat!")
        if(sayHello("=== Pat")){
            return ('Hello Pat!')}
    });
});


//Exercise #6
// Refactored code from:
// const sayHello = (str) => {
//     return "Hello " + str +"!";
// }
// To:
// const sayHello = (str) => {
//     return `Hello ${str}!`;
// }

// Exercise #7
//Added, committed, and pushed work to GitHub.
