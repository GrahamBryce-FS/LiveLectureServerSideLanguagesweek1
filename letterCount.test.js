// 3 functions describe(), test(), expect()
const letterCount = require ('./letterCount');

describe("Letter Count Tests", ()=>{
    test("As a user i want to count the characters in a string",()=>{
        // expect(actual).toEqual(expected);
        expect(letterCount("awesome", 'e')).toEqual(2);
    });

    test("Negative Test for letter count", ()=>{
        // expect(actual).toBe(expected);
        expect(letterCount("Hello", 'o')).not.toBe(0);
    })
});