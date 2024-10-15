function mapArrToString(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('An invalid argument');
  }

  return arr.filter((el) => Number.isInteger(el)).map(String);
}

module.exports = mapArrToString;
