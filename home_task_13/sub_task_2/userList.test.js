const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('Testing userList array', () => {
    test('Should contain the element "admin"', () => {
        expect(userList).toContain('admin');
    });

    test('First element should be "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });

    test('Last element should be "new_user_2"', () => {
        expect(userList[userList.length - 1]).toBe('new_user_2');
    });

    test('Array length should be 5', () => {
        expect(userList).toHaveLength(5);
    });

    test('3rd element should have type string', () => {
        expect(typeof userList[2]).toBe('string');
    });

    test('Array should not have an 8th element', () => {
        expect(userList[7]).toBeUndefined();
    });
});
