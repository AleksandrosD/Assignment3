const longestSubstring = require('./longestSubsting');

describe("Substring test", () => {
    //Testing for longest substring
    test("Substring test abcabcbb", () => {
        expect(longestSubstring("abcabcbb")).toBe(3);
    })

    test("Substring test bbbbb", () => {
        expect(longestSubstring("bbbbb")).toBe(1);
    })

    test("Substring test pwwkew", () => {
        expect(longestSubstring("pwwkew")).toBe(3);
    })
})