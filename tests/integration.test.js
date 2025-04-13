
const Calculator = require('../src/calculator');

describe('Calculator Integration Tests', () => {
  test('chaining operations works correctly', () => {
    const result = Calculator.add(
      Calculator.multiply(2, 3),
      Calculator.divide(10, 2)
    );
    expect(result).toBe(11);
  });

  test('complex calculation with all operations', () => {
    const result = Calculator.divide(
      Calculator.add(
        Calculator.multiply(2, 5),
        Calculator.subtract(8, 3)
      ),
      Calculator.power(2, 2)
    );
    expect(result).toBe(3.75);
  });

  test('error propagates correctly in chained operations', () => {
    expect(() => {
      Calculator.divide(
        Calculator.add(2, 3),
        Calculator.subtract(5, 5) // This will be zero
      );
    }).toThrow('Cannot divide by zero');
  });
});
