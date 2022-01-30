const { expect } = require('chai');
const { Calculator } = require('../../app/calculator');

// eslint-disable-next-line max-len
describe('It should test Calculator class method \'add\' positive scenarios', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  it('It should test the calculation of the natural positive numbers', () => {
    expect(calculator.add(865, 45, 239)).to.be.equal(1149);
  });
  it('It should test the calculation with the negative number', () => {
    expect(calculator.add(-356, 125)).to.be.equal(-231);
  });
  it('It should test the calculation with whole numbers', () => {
    expect(calculator.add(548, 0)).to.be.equal(548);
  });
  it('It should test the calculation with fractions', () => {
    expect(calculator.add(3 / 8, 4 / 8)).to.be.equal(7 / 8);
  });
  it('It should test the calculation with the rational numbers', () => {
    // eslint-disable-next-line max-len
    expect(calculator.add(-245.969, 138.354)).to.be.equal(-107.61499999999998);
  });
});

// eslint-disable-next-line max-len
describe('It should test Calculator class method \'add\' negative scenarios', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  afterEach(() => {
    calculator = null;
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' is null an error is thrown', () => {
    expect(() => calculator.add(null, 5, 6)()).to.throw('Unable to calculate, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'increment\' is not defined(null) an error is thrown', () => {
    expect(() => calculator.add(68, null)()).to.throw('Unable to calculate, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' and \'increment\' are not defined(null) an error is thrown', () => {
    expect(() => calculator.add(null, null)()).to.throw('Unable to calculate, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' and \'increment\' are not defined(values are empty) an error is thrown', () => {
    expect(() => calculator.add()()).to.throw('Unable to calculate, number and increment are not defined');
  });
  // eslint-disable-next-line max-len
  it('It should test that if only \'number\' is defined an error is thrown', () => {
    expect(() => calculator.add(5)()).to.throw('only one number is defined');
  });
  // eslint-disable-next-line max-len
  it('It should test that if only \'number\' is defined(null) an error is thrown', () => {
    expect(() => calculator.add(null)()).to.throw('Unable to calculate, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if only \'number\' is defined(as undefined) an error is thrown', () => {
    expect(() => calculator.add(undefined)()).to.throw('Unable to calculate, [undefined] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' and \'increment\' are not defined(undefined) an error is thrown', () => {
    expect(() => calculator.add(undefined, undefined)()).to.throw('Unable to calculate, [undefined] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' is not defined(undefined) an error is thrown', () => {
    expect(() => calculator.add(undefined, 5)()).to.throw('Unable to calculate, [undefined] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'increment\' is not defined(undefined) an error is thrown', () => {
    expect(() => calculator.add(68, undefined)()).to.throw('Unable to calculate, [undefined] is not a number');
  });
});

// eslint-disable-next-line max-len
describe('It should test Calculator class method \'multiply\' positive scenarios', () => {
  let multiplier;
  beforeEach(() => {
    multiplier = new Calculator();
  });
  afterEach(() => {
    multiplier = null;
  });
  it('It shout test the calculation of the natural positive numbers', () => {
    expect(multiplier.multiply(865, 45)).to.be.equal(38925);
  });
  it('It should test the calculation with the negative number', () => {
    expect(multiplier.multiply(-356, 125)).to.be.equal(-44500);
  });
  it('It should test the calculation with whole numbers', () => {
    expect(multiplier.multiply(548, 0)).to.be.equal(0);
  });
  it('It should test the calculation with fractions', () => {
    expect(multiplier.multiply(3 / 8, 4 / 8)).to.be.equal(0.1875);
  });
  it('It should test the calculation with the rational numbers', () => {
    // eslint-disable-next-line max-len
    expect(multiplier.multiply(-245.969, 138.354)).to.be.equal(-34030.795026);
  });
});

// eslint-disable-next-line max-len
describe('It should test Calculator class method \'multiply\' negative scenarios', () => {
  let multiplier;
  beforeEach(() => {
    multiplier = new Calculator();
  });
  afterEach(() => {
    multiplier = null;
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' is not defined(null) an error is thrown', () => {
    expect(() => multiplier.multiply(68, null)()).to.throw('Unable to multiply, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'increment\' is not defined(null) an error is thrown', () => {
    expect(() => multiplier.multiply(68, null)()).to.throw('Unable to multiply, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' and \'multiplier\' are not defined(null) an error is thrown', () => {
    expect(() => multiplier.multiply(null, null)()).to.throw('Unable to multiply, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' and \'multiplier\' are not defined(values are empty) an error is thrown', () => {
    expect(() => multiplier.multiply()()).to.throw('Unable to multiply, number and multiplier are not defined');
  });
  // eslint-disable-next-line max-len
  it('It should test that if the only \'number\' is defined an error is thrown', () => {
    expect(() => multiplier.multiply(5)()).to.throw('Unable to multiply, only one number is defined');
  });
  // eslint-disable-next-line max-len
  it('It should test that if the only \'number\' is defined(null) an error is thrown', () => {
    expect(() => multiplier.multiply(null)()).to.throw('Unable to multiply, [null] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if the only \'number\' is defined(as undefined) an error is thrown', () => {
    expect(() => multiplier.multiply(undefined)()).to.throw('Unable to multiply, [undefined] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' and \'multiplier\' are not defined(undefined) an error is thrown', () => {
    expect(() => multiplier.multiply(undefined, undefined)()).to.throw('Unable to multiply, [undefined] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'number\' is not defined(undefined) an error is thrown', () => {
    expect(() => multiplier.multiply(undefined, 5)()).to.throw('Unable to multiply, [undefined] is not a number');
  });
  // eslint-disable-next-line max-len
  it('It should test that if \'increment\' is not defined(undefined) an error is thrown', () => {
    expect(() => multiplier.multiply(68, undefined)()).to.throw('Unable to multiply, [undefined] is not a number');
  });
});
