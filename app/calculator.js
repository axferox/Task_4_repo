/**
 *
 * A simple calss which performs the sumarize and multiply actions
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @param {*} number is the first incoming value for the calculations
   * @param {*} increment is the second incoming value for summarize action
   * @param {*} multiplier is the second incoming value for the multiply action
   * @memberof Calculator
   */
  constructor(number, increment, multiplier) {
    this.number = number;
    this.increment = increment;
    this.multiplier = multiplier;
  }

  /**
   *
   *
   * @param {*} number is the first incoming value for the calculations
   * @param {*} increment is the second incoming value for summarize action
   * @return {*} returns the summ result of number and increment
   * @memberof Calculator
   */
  add(number, increment) {
    if (typeof (number) != 'number') {
      // eslint-disable-next-line max-len
      throw new TypeError(`The first value [${number}] is \"${typeof(number)}\", expected value: \"number\"`);
    } else if (typeof (increment) != 'number') {
      // eslint-disable-next-line max-len
      throw new TypeError(`The second value [${increment}] is \"${typeof(increment)}\", expected value: \"number\"`);
    } else {
      return number + increment;
    }
  }

  /**
   *
   *
   * @param {*} number is the first incoming value for the calculations
   * @param {*} multiplier is the second incoming value for multiply action
   * @return {*} returns the summ result of number and increment
   * @memberof Calculator
   */
  multiply(number, multiplier) {
    if (typeof (number) != 'number') {
      // eslint-disable-next-line max-len
      throw new TypeError(`The first value [${number}] is \"${typeof(number)}\", expected value: \"number\"`);
    } else if (typeof (multiplier) != 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`The second value [${multiplier}] is \"${typeof(multiplier)}\", expected value: \"number\"`);
    } else {
      return number * multiplier;
    }
  }
}

module.exports = Calculator;


