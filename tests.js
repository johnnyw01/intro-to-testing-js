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
//     });
// });

//Exercise #3

// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//     });
//     it('should return "Hello, !" concatenated with the string passed in as an argument', () => {
//         expect(sayHello("Jane")).toBe("Hello, Jane!")
//         return ("Hello, Jane!");
//     });
// });

// Exercise #4

// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//     });
//     it('should return "Hello, !" concatenated with the string passed in as an argument', () => {
//         expect(sayHello("Alex")).toBe("Hello, Alex!")
//         return ("Hello, Alex!");
//     });
//     it('should return "Hello, Alex!" if `input is === Alex`, else should return "Hello, Jane!"', () => {
//         expect(sayHello("Alex")).toBe("Hello, Alex!")
//     });
// });

//Exercise #5

// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//     });
//     it('should return "Hello, !" concatenated with the string passed in as an argument', () => {
//         expect(sayHello("Pat")).toBe("Hello, Pat!")
//         return ("Hello, Pat!");
//     });
//     it('should return "Hello, Pat!" if "input is === Pat"', () => {
//         expect(sayHello("Pat")).toBe("Hello, Pat!")
//         return ('Hello, Pat!')
//     });
// });


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

// Exercise #8
// describe('sayHello', () => {
//     it('should be a defined function', () => {
//         expect(typeof sayHello).toBe('function');
//     });
//     it('should return a string when called', () => {
//         expect(typeof sayHello()).toBe('string')
//         return ""
//     });
//     it('should return "Hello, World!" when "World" is passed in as an argument', () => {
//         expect(sayHello("World")).toBe("Hello, World!")
//         return("Hello, World!")
//     });
//     it('should return "Hello, World!" if input === true', () => {
//         expect(sayHello(true)).toBe("Hello, World!")
//         return("Hello, World!")
//     });
//     it('should return "Hello, World!" if input === false', () => {
//         expect(sayHello(false)).toBe("Hello, World!")
//         return("Hello, World!")
//     });
// });

// Exercise #9
//Added, committed, and pushed work to GitHub.

// Exercise #10
// describe('isFive', () => {
//     it('The function name "isFive" exists', () => {
//         expect(typeof isFive).toBe('function');
//     });
//     it('should return a boolean no matter what the input is', () => {
//         expect(typeof isFive(5)).toBe('boolean')
//     });
//     it('should return true when input is 5', () => {
//         expect(isFive(5)).toBe(true)
//     }); it('should return false when input is not 5', () => {
//         expect(isFive(!5)).toBe(false)
//     });
// });

// Exercise #11

// describe('isEven', () => {
//     it('should be a defined function', () => {
//         expect(typeof isEven).toBe('function');
//     })
//     it('should return a boolean value when passed any number', () => {
//         expect(typeof isEven(1)).toBe('boolean')
//     })
//     it('should return true when passed 2', () => {
//         expect(isEven(2)).toBe(true)
//     })
//     it('should return true when passed -4', () => {
//         expect(isEven(-4)).toBe(true)
//     })
//     it('should return false when passed 3', () => {
//         expect(isEven(3)).toBe(false)
//     })
//     it('should return false when passed a non-numeric string like "banana"', () => {
//         expect(isEven("banana")).toBe(false)
//     })
//     it('should return true when passed the number "8"', () => {
//         expect(isEven("8")).toBe(true)
//     })
//     it('should return false when passed Infinity"', () => {
//         expect(isEven(Infinity)).toBe(false)
//     })
//     it('should return false when passed a boolean value ' , () => {
//         expect(isEven(true)).toBe(false)
//     })
//     it('should return false when passed no input value ' , () => {
//         expect(isEven('')).toBe(false)
//     })
// })

// Exercise #12

// describe('isVowel', () => {
//     it('should be a defined function', () => {
//         expect(typeof isVowel).toBe('function')
//     })
//     it('should return a boolean value', () => {
//         expect(typeof isVowel("str")).toBe('boolean')
//     })
//     it('should return true when passed the letter "a"', () => {
//         expect(isVowel("a")).toBe(true)
//     })
//     it('should return true when passed the letter "A"', () => {
//         expect(isVowel("A")).toBe(true)
//     })
//     it('should return false when passed the letter "y', () => {
//         expect(isVowel("y")).toBe(false)
//     })
//     it('should return false when passed a number as the input', () => {
//         expect(isVowel(4)).toBe(false);
//     })
//     it('should return false when passed a boolean value ' , () => {
//         expect(isVowel(true)).toBe(false)
//     })
//     it('should return false when passed a string as input', () => {
//         expect(isVowel("hello world")).toBe(false);
//     })
//     it('should return false when passed the a non-vowel "banana', () => {
//         expect(isVowel("banana")).toBe(false)
//     })
//     it('should return false when passed no input value ' , () => {
//         expect(isVowel('')).toBe(false)
//     })
// });

// Exercise #13

// describe('add', () => {
//     it('should be a defined function', () => {
//         expect(typeof add).toBe('function')
//     })
//     it('should add both inputs and return the sum of those number', () => {
//         expect(typeof add(1,1)).toBe('number')
//     })
//     // it('should ', () => {
//     //     expect(typeof add("NaN","NaN")).toBe('NaN')
//     // })
//     it('should return 5 when passed in 2, 3 as parameters', () => {
//         expect(add(2, 3)).toBe(5)
//     })
//     it('should return -12 when passed in -3, -9 as parameters', () => {
//         expect(add(-3, -9)).toBe(-12)
//     })
//     it('should return 11 when passed in "5", 6 as parameters', () => {
//         expect(add("5", 6)).toBe(11)
//     })
//     it('should return 6 when passed in "-4", 10 as parameters', () => {
//         expect(add("-4", 10)).toBe(6)
//     })
//     it('should return "NaN" when both the parameters are non-numeric values', () => {
//     expect(add("banana", "split")).toBeNaN('NaN')
//     })
//     it('should return "NaN" when either of the parameters are non-numeric values', () => {
//         expect(add(2,"apple")).toBeNaN('NaN')
//     })
//     it('should return "NaN" when the parameters are empty', () => {
//         expect(add()).toBeNaN('NaN')
//     })
// });

