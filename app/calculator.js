/**
 *
 * A simple class which performs the summarize and multiply actions
 * @class Calculator
 */

class Calculator {
  constructor() { }

  /**
   *
   *
   * @param {*} numbers is the first incoming value for the calculations
   * @return {*} returns the sum result of number and increment
   * @memberof Calculator
   */
  add(...numbers) {
    if (numbers.length === 0) {
      // eslint-disable-next-line max-len
      throw new TypeError('Unable to calculate, number and increment are not defined');
    } else if (numbers.length < 2 && typeof numbers[0] === 'number') {
      throw new TypeError('Unable to calculate, only one number is defined');
    } else if (numbers.length < 2 && typeof numbers[0] !== 'number') {
      throw new TypeError(`Unable to calculate, [${numbers[0]}] is not a number`);
    } else {
      return numbers.reduce((sum, current) => {
        if (typeof (current) !== 'number' || typeof (sum) !== 'number') {
          // eslint-disable-next-line max-len
          if (typeof (sum) !== 'number') {
            // eslint-disable-next-line max-len
            throw new TypeError(`Unable to calculate, [${sum}] is not a number`);
          } else if (typeof (current) !== 'number') {
            // eslint-disable-next-line max-len
            throw new TypeError(`Unable to calculate, [${current}] is not a number`);
          }
        } else {
          return sum + current;
        }
      }, 0);
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
    if (numbers.length === 0) {
      // eslint-disable-next-line max-len
      throw new TypeError('Unable to multiply, number and multiplier are not defined');
    } else if (numbers.length < 2 && typeof numbers[0] === 'number') {
      throw new TypeError('Unable to multiply, only one number is defined');
    } else if (numbers.length < 2 && typeof numbers[0] !== 'number') {
      throw new TypeError(`Unable to multiply, [${numbers[0]}] is not a number`);
    } else {
      return numbers.reduce((multiply, current) => {
        if (typeof (current) !== 'number' || typeof (multiply) !== 'number') {
          // eslint-disable-next-line max-len
          if (typeof (multiply) !== 'number') {
            // eslint-disable-next-line max-len
            throw new TypeError(`Unable to multiply, [${multiply}] is not a number`);
          } else if (typeof (current) !== 'number') {
            // eslint-disable-next-line max-len
            throw new TypeError(`Unable to multiply, [${current}] is not a number`);
          }
        } else {
          return multiply * current;
        }
      });
    }
  }
}

module.exports = { Calculator };
