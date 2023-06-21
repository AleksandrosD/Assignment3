const twoSums=require('./twoSums');

describe("Testing two sums",()=>{
    test("Testing [2, 7, 11, 15] with tharget 9",() =>{
        expect(twoSums([2, 7, 11, 15],9)).toStrictEqual([0,1]);
    });
    test("Testing [3,2,4] with tharget 6",() =>{
        expect(twoSums([3, 2, 4],6)).toStrictEqual([1,2]);
    });
    test("Testing [-1, -2, -3, -4, -5] with tharget -8",() =>{
        expect(twoSums([-1, -2, -3, -4, -5], -8)).toStrictEqual([2,4]);
    });
});