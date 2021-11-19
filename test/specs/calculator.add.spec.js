const Calculator = require('../../app/calculator');
const {expect} = require('chai');

// eslint-disable-next-line max-len
describe(`It should test Calculator class method 'add' positive scenarios`, () => {
  let dataUnderTest;
  beforeEach(() => {
    dataUnderTest = new Calculator();
  });
  afterEach(() => {
    dataUnderTest = null;
  });
  it(`It shout test the calculation of the natural positive numbers`, () => {
    expect(dataUnderTest.add(865, 45)).to.be.equal(910);
  });
  it(`It should test the calculation with the negative number`, ()=>{
    expect(dataUnderTest.add(-356, 125)).to.be.equal(-231);
  });
  it(`It should test the calculation with whole numbers`, ()=>{
    expect(dataUnderTest.add(548, 0)).to.be.equal(548);
  });
  it(`It should test the calculation with fractions`, ()=>{
    expect(dataUnderTest.add(3/8, 4/8)).to.be.equal(7/8);
  });
  it(`It should test the calculation with the rational numbers`, ()=>{
    // eslint-disable-next-line max-len
    expect(dataUnderTest.add(-245.969, 138.354)).to.be.equal(-107.61499999999998);
  });
});

// eslint-disable-next-line max-len
describe(`It should test Calculator class method 'add' negative scenarios`, () => {
  let dataUnderTest;
  beforeEach(() => {
    dataUnderTest = new Calculator();
  });
  afterEach(() => {
    dataUnderTest = null;
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' is not defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.add(null, 5)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'increment' is not defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.add(68, null)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' and 'increment' are not defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.add(null, null)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' and 'increment' are not defined(values are empty) an error is thrown`, () => {
    expect(() => dataUnderTest.add()).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the only 'number' is defined an error is thrown`, () => {
    expect(() => dataUnderTest.add(5)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the only 'number' is defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.add(null)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the only 'number' is defined(as undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.add(undefined)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' and 'increment' are not defined(undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.add(undefined, undefined)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' is not defined(undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.add(undefined, 5)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'increment' is not defined(undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.add(68, undefined)).to.throw();
  });
});

// eslint-disable-next-line max-len
describe(`It should test Calculator class method 'multiply' positive scenarios`, () => {
  let dataUnderTest;
  beforeEach(() => {
    dataUnderTest = new Calculator();
  });
  afterEach(() => {
    dataUnderTest = null;
  });
  it(`It shout test the calculation of the natural positive numbers`, () => {
    expect(dataUnderTest.multiply(865, 45)).to.be.equal(38925);
  });
  it(`It should test the calculation with the negative number`, ()=>{
    expect(dataUnderTest.multiply(-356, 125)).to.be.equal(-44500);
  });
  it(`It should test the calculation with whole numbers`, ()=>{
    expect(dataUnderTest.multiply(548, 0)).to.be.equal(0);
  });
  it(`It should test the calculation with fractions`, ()=>{
    expect(dataUnderTest.multiply(3/8, 4/8)).to.be.equal(0.1875);
  });
  it(`It should test the calculation with the rational numbers`, ()=>{
    // eslint-disable-next-line max-len
    expect(dataUnderTest.multiply(-245.969, 138.354)).to.be.equal(-34030.795026);
  });
});

// eslint-disable-next-line max-len
describe(`It should test Calculator class method 'multiply' negative scenarios`, () => {
  let dataUnderTest;
  beforeEach(() => {
    dataUnderTest = new Calculator();
  });
  afterEach(() => {
    dataUnderTest = null;
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' is not defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(null, 5)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'increment' is not defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(68, null)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' and 'increment' are not defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(null, null)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' and 'increment' are not defined(values are empty) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply()).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the only 'number' is defined an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(5)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the only 'number' is defined(null) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(null)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the only 'number' is defined(as undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(undefined)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' and 'increment' are not defined(undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(undefined, undefined)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'number' is not defined(undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(undefined, 5)).to.throw();
  });
  // eslint-disable-next-line max-len
  it(`It should test the 'increment' is not defined(undefined) an error is thrown`, () => {
    expect(() => dataUnderTest.multiply(68, undefined)).to.throw();
  });
});
