const { getCircleLength, getCircleArea } = require('./calcCircle');

describe('Testing getCircleLength function', () => {
    test('Length of circle with radius 22 should be approximately 138.2', () => {
        const result = getCircleLength(22);
        expect(result).toBeCloseTo(138.2, 1);
    });

    test('Length of circle with no radius argument should be NaN', () => {
        const result = getCircleLength();
        expect(result).toBeNaN();
    });
});

describe('Testing getCircleArea function', () => {
    test('Area of circle with radius 9 should be approximately 254.47', () => {
        const result = getCircleArea(9);
        expect(result).toBeCloseTo(254.47, 2);
    });

    test('Area of circle with no radius argument should be NaN', () => {
        const result = getCircleArea();
        expect(result).toBeNaN();
    });
});
