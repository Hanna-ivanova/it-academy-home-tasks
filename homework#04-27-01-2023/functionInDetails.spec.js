const { xor, take } = require('./functionInDetails.js');

describe ("xor", () => {
    test("should create an array of unique values that is the symmetric difference of the given arrays", () => {
        expect (xor([2, 89, 1], [2, 3])).toEqual([89, 1, 3])
    })
});

describe ("take", () => {
    test("should create a slice of array with n elements taken from the beginning", () => {
        expect (take([2, 89, 1], 2)).toEqual([2, 89])
    })
});