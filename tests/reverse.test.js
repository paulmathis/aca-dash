const { reverse } = require('../index');

test('reverses aray', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(reverse(arr)).toEqual([5, 4, 3, 2, 1]);
});
