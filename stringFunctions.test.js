const stringTest=require('./stringFunction');

describe('Reverse string ccheck',()=>{
    
    test("Reverse whazzzzz uuuuuupppppp!!",()=>{
        expect(stringTest.reverseString("whazzzzz uuuuuupppppp!!")).toBe("!!ppppppuuuuuu zzzzzahw");
    })
    test('Reverse Hello World',()=>{
        expect(stringTest.reverseString("Hello World")).toBe("dlroW olleH");
    })
    test('Reverse 123456789',()=>{
        expect(stringTest.reverseString("123456789")).toBe("987654321");
    })
});
describe('Palindrome Check',()=>{
    
    test("Palindrome whazzzzz uuuuuupppppp!!",()=>{
        expect(stringTest.isPalindrome("whazzzzz uuuuuupppppp!!")).toBe(false);
    })
    test('Palindrome Hello World',()=>{
        expect(stringTest.isPalindrome("Hello World")).toBe(false);
    })
    test('Palindrome ada',()=>{
        expect(stringTest.isPalindrome("dad")).toBe(true);
    })
    test('Palindrime racecar',()=>{
        expect(stringTest.isPalindrome("racecar")).toBe(true);
    })
});
