const { sum, sub, mul, div } = require('../math.js');

describe('set of arithmetic operations', () => {
  
  test('sum of numbers', () => {
    expect(sum(1, 1)).toBe(2);
  });

  test('subtraction of numbers', () => {
    expect(sub(1, 1)).toBe(0);
  });

  test('multiply of numbers', () => {
    expect(mul(1, 1)).toBe(1);
  });

  test('divide of numbers', () => {
   expect(div(1, 1)).toBe(1);
  });

});