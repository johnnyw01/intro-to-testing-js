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

// Unit tests for the sayHello function
describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
    });
    it('should take in a string as an argument ', () => {
        expect(typeof sayHello("Hello")).toBe("string");
    });
    it('should return a string that says "hello" to the input passed in', () => {
        expect(sayHello("str")).toBe("Hello str");
    });
    it("should never return 'undefined' when called", () => {
        expect(sayHello()).not.toBe(undefined);
    });
});