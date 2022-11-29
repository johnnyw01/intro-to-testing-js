// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Exercise #1
describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
});

//Exercise #2
describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
    it('should take in a string as an argument ', () => {
        return (`return ''`);
    });
});

//Exercise #3
