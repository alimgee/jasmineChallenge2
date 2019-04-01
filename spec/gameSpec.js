describe("My fizzbuzz function", function() {
    // A test suite begins with a call to the global Jasmine function 
    beforeEach(function() {
        buzz = new fizzbuzz();
    });//before each test call new instance of object
    
    describe("Checks fizzbuzz exists", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzbuzz).toBeDefined();
        });
        
        it("should return drink fizzbuzz when called as fizzbuzz(30)", function() {
            var result = fizzbuzz(30)
            expect(result).toBe("fizzbuzz");
        });
        
        it("should return drink fizz when called as fizzbuzz(9)", function() {
            var result = fizzbuzz(9)
            expect(result).toBe("fizz");
        });
        it("should return drink buzz when called as fizzbuzz(5)", function() {
            var result = fizzbuzz(5)
            expect(result).toBe("buzz");
        });
        it("should return the number when called as fizzbuzz(8)", function() {
            var result = fizzbuzz(8)
            expect(result).toBe(8);
        });
        it("should return the number when called as fizzbuzz(0)", function() {
            var result = fizzbuzz(0)
            expect(result).toBe(0);
        })

    });
});