const { filterFoodPrice, food } = require('./food');

describe('Testing filterFoodPrice function', () => {
    test('Filtered array length should be 3', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result).toHaveLength(3);
    });

    test('Filtered array should contain { kind: "pepper", price: 27 }', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result).toContainEqual({ kind: 'pepper', price: 27 });
    });

    test('Filtered array should contain elements from original food array (indices 2, 3, 4)', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result).toEqual(expect.arrayContaining([
            food[1],
            food[2],
            food[3]
        ]));
    });

    test('Price of the 1st element in filtered array should be greater than or equal to 12', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result[0].price).toBeGreaterThanOrEqual(12);
    });

    test('Price of the 3rd element in filtered array should be less than max (40)', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result[2].price).toBeLessThanOrEqual(40);
    });

    test('Filtered array should not contain { kind: "lemon", price: 50 }', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result).not.toContainEqual({ kind: 'lemon', price: 50 });
    });

    test('Filtered array length should be 3 when min = 12 and max = 40', () => {
        const result = filterFoodPrice(food, 12, 40);
        expect(result).toHaveLength(3);
    });

    test('Filtered array should contain elements with prices between 12 and 40', () => {
        const result = filterFoodPrice(food, 12, 40);
        result.forEach(element => {
            expect(element.price).toBeGreaterThanOrEqual(12);
            expect(element.price).toBeLessThanOrEqual(40);
        });
    });
});

