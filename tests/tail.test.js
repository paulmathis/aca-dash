const { tail } = require('../index');

test('return tail of array', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(tail(arr)).toEqual([2, 3, 4, 5]);
});
