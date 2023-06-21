
const testFile=require('./mathFunctions');

describe('Add 2 numbers',()=>{
    test("add(0,0)=0",()=>{
        expect(testFile.add(0,0)).toBe(0);
    })
    test('add(1,1)=2',()=>{
        expect(testFile.add(1,1)).toBe(2);
    })
    test('add(5,5)=10',()=>{
        expect(testFile.add(5,5)).toBe(10);
    })
});

describe('Substract 2 numbers',()=>{
    test("substarct(0,0)=0",()=>{
        expect(testFile.substact(0,0)).toBe(0);
    })
    test('substarct(1,1)=2',()=>{
        expect(testFile.substact(1,1)).toBe(0);
    })
    test('substarct(5,5)=10',()=>{
        expect(testFile.substact(5,5)).toBe(0);
    })
    test('substarct(-5,5)=10',()=>{
        expect(testFile.substact(-5,5)).toBe(-10);
    })
});

describe('Multiply 2 numbers',()=>{
    test("Multiply(0,0)=0",()=>{
        expect(testFile.multiply(0,0)).toBe(0);
    })
})

describe("Dividing 2 numbers",()=>{
    test("Divide with 0 return Error.",()=>{
        expect(testFile.divide(1,0)).toBe("Error")
    })
})






