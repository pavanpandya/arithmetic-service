const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('2099999999999999999 + 30000000000000 is equal to 2100030000000000000', () => {
    expect(add(2099999999999999999, 30000000000000)).toBe(2100030000000000000);
});

test('85 + 73 is equal to 158', () => {
    expect(add(85, 73)).toBe(158);
});