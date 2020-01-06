const subtract = require('./subtract');

test('properly subtracting two numbers', () => {
    expect(subtract(1, 5)).toBe(-4);
    expect(subtract(17, 4)).not.toBe(213);
});