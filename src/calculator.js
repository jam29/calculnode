class Calculator {
  static add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a + b;
  }

  static subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a - b;
  }

  static multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return a * b;
  }

  static divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  static power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return Math.pow(base, exponent);
  }

  static squareRoot(num) {
    if (typeof num !== 'number') {
      throw new Error('Argument must be a number');
    }
    if (num < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(num);
  }
}

module.exports = Calculator;
