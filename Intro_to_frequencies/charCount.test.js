const charCount = require('./charCount');

test('charCount function exists', () => {
    expect(typeof charCount).toEqual('function');
});

test('charCount correctly counts the number of each character in a string', () => {
    expect(charCount('hello')).toEqual({
        h: 1,
        e: 1,
        l: 2,
        o: 1
    });
});