const validateValue = require('./validateValue');

describe('validateValue', () => {
  test('should return true when value > 0 and < 100', () => {
    expect(validateValue(20)).toBeTruthy();
  });

  test('should return false when value < 0', () => {
    expect(validateValue(-20)).toBeFalsy();
  });

  test('should return false when value > 100', () => {
    expect(validateValue(101)).toBeFalsy();
  });

  test('should return true when value = 100', () => {
    expect(validateValue(100)).toBeTruthy();
  });

  test('should return true when value = 100', () => {
    expect(validateValue(0)).toBeTruthy();
  });
});
