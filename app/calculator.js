/**
 *
 * A simple class which performs the summarize and multiply actions
 * @class Calculator
 */

class Calculator {
  constructor() {}

  /**
   *
   *
   * @param {*} numbers is the first incoming value for the calculations
   * @return {*} returns the sum result of number and increment
   * @memberof Calculator
   */
  add(...numbers) {
    if (numbers.length > 1 && numbers.every((item) => typeof item === 'number')) {
      return numbers.reduce((sum, current) => sum + current);
    }
    if (numbers.length === 1 && typeof numbers[0] === 'number') {
      throw new TypeError('Unable to calculate, only one number is defined');
    } else {
      const notaNumber = numbers.find((item) => typeof item !== 'number');
      throw new TypeError(`Unable to calculate, [${notaNumber}] is not a number`);
    }
  }

  /**
   *
   *
   * @param {*} numbers is the first incoming value for the calculations
   * @return {*} returns the multiply result of number and multiplier
   * @memberof Calculator
   */
  multiply(...numbers) {
    if (numbers.length > 1 && numbers.every((item) => typeof item === 'number')) {
      return numbers.reduce((multiply, current) => multiply * current);
    }
    if (numbers.length === 1 && typeof numbers[0] === 'number') {
      throw new TypeError('Unable to multiply, only one number is defined');
    } else {
      const notaNumber = numbers.find((item) => typeof item !== 'number');
      throw new TypeError(`Unable to multiply, [${notaNumber}] is not a number`);
    }
  }
}

module.exports = { Calculator };
