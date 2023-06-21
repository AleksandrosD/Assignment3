const reverseString=require("./reverseString")

describe('Reversing a String',()=>{
    
   
    test("Reverse hello",()=>{
        expect(reverseString("hello")).toBe("olleh");
    })
    test("Reverse OpenAI",()=>{
        expect(reverseString("OpenAI")).toBe("IAnepO");
    })
    test("Reverse racecar",()=>{
        expect(reverseString("racecar")).toBe("racecar");
    })

});