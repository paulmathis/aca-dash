const { findLast } = require('../index');

test('returns the last element of the array', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(findLast(arr)).toEqual(5);
});
