// tests unitaires. 
const Calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('add()', () => {
    test('adds two positive numbers correctly', () => {
      expect(Calculator.add(2, 3)).toBe(5);
    });

    test('adds negative numbers correctly', () => {
      expect(Calculator.add(-1, -1)).toBe(-2);
    });

    test('throws error for non-number arguments', () => {
      expect(() => Calculator.add('2', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract()', () => {
    test('subtracts numbers correctly', () => {
      expect(Calculator.subtract(5, 3)).toBe(2);
    });

    test('returns negative result when appropriate', () => {
      expect(Calculator.subtract(3, 5)).toBe(-2);
    });

    test('throws error for non-number arguments', () => {
      expect(() => Calculator.subtract('5', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('multiply()', () => {
    test('multiplies numbers correctly', () => {
      expect(Calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies by zero correctly', () => {
      expect(Calculator.multiply(5, 0)).toBe(0);
    });

    test('throws error for non-number arguments', () => {
      expect(() => Calculator.multiply('2', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('divide()', () => {
    test('divides numbers correctly', () => {
      expect(Calculator.divide(6, 3)).toBe(2);
    });

    test('returns fractional result when appropriate', () => {
      expect(Calculator.divide(5, 2)).toBe(2.5);
    });

    test('throws error for division by zero', () => {
      expect(() => Calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('throws error for non-number arguments', () => {
      expect(() => Calculator.divide('6', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('power()', () => {
    test('calculates power correctly', () => {
      expect(Calculator.power(2, 3)).toBe(8);
    });

    test('handles exponent of 0', () => {
      expect(Calculator.power(5, 0)).toBe(1);
    });

    test('throws error for non-number arguments', () => {
      expect(() => Calculator.power('2', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('squareRoot()', () => {
    test('calculates square root correctly', () => {
      expect(Calculator.squareRoot(16)).toBe(4);
    });

    test('throws error for negative numbers', () => {
      expect(() => Calculator.squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
    });

    test('throws error for non-number arguments', () => {
      expect(() => Calculator.squareRoot('16')).toThrow('Argument must be a number');
    });
  });
});
