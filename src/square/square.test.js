const square = require('./square.js');

describe('square', () => {
  let spyMathPow;

  beforeEach(() => {
    spyMathPow = jest.spyOn(Math, 'pow');
  });

  afterEach(() => {
    spyMathPow.mockRestore();
  });

  test('should have been called 1 time', () => {
    square(2);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });

  test('should have been called 0 time', () => {
    square(1);
    expect(spyMathPow).not.toHaveBeenCalled();
  });
});
