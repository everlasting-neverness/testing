const cloneArray = require('./cloneArray');

test('properly clonesArray', () => {
    const arr = [1,2,3];
    expect(cloneArray(arr)).toEqual(arr);
    expect(cloneArray(arr)).not.toBe(arr);
});