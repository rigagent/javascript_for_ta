const { add } = require('./numberAddition');

describe("Test adding function", () => {
    test("Test 0.1 + 0.2 must = 0.3", () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
});
