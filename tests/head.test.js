const { head } = require('../index');

test('returns the first element of the array', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(head(arr)).toEqual(1);
});
