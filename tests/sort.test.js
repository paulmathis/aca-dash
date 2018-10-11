const { sort } = require('../index');

test('sorts the array', () => {
  const arr = [3, 1, 5, 2, 6, 4, 9, 7, 8];

  expect(sort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
