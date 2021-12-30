/**
 *
 * A simple class which performs the summarize and multiply actions
 * @class Calculator
 */

class Calculator {
  /**
   * Creates an instance of Calculator.
   * @param {*} numbers is the incoming value for the calculations
   * @memberof Calculator
   */
  constructor(numbers) {
    this.number = numbers;
  }

  /**
   *
   *
   * @param {*} numbers is the first incoming value for the calculations
   * @return {*} returns the sum result of number and increment
   * @memberof Calculator
   */
  add(...numbers) {
    return numbers.reduce((sum, current) => {
      if (typeof (current) != 'number' || typeof (sum) != 'number') {
        // eslint-disable-next-line max-len
        throw new TypeError(`An entered value [${current}] is not a: \"number\"`);
      } else {
        return sum + current;
       }
      }, 0)
   };

  /**
   *
   *
   * @param {*} numbers is the first incoming value for the calculations
   * @return {*} returns the sum result of number and increment
   * @memberof Calculator
   */
  multiply(...numbers) {
    return numbers.reduce((multiply, current) => {
      if (typeof (current) != 'number' || typeof (multiply) != 'number') {
        // eslint-disable-next-line max-len
        throw new TypeError(`An entered value [${current}] is not a: \"number\"`);
      } else {
        return multiply * current;
      }
    })
  }
}

module.exports = { Calculator };


