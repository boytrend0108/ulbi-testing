const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('should return an array', () => {
    expect(mapArrToString([1, 3])).toBeInstanceOf(Array);
  });

  test('should return an array of string', () => {
    expect(mapArrToString([1, 3])).toEqual(['1', '3']);
  });

  test('should return an array of string with different types of args', () => {
    expect(mapArrToString([1, 3, null, undefined, 'sd', '55'])).toEqual([
      '1',
      '3',
    ]);
  });

  test('should return an empty array if the arg is []', () => {
    expect(mapArrToString([])).toEqual([]);
  });

  test('should throw an error when called with no arguments', () => {
    expect(() => mapArrToString()).toThrow('An invalid argument');
  });
});
