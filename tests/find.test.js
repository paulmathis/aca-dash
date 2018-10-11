const { find } = require('../index');

test('returns null when no items found', () => {
  const arr = [1, 2, 3, 4, 5];

  const item = find(arr, (num) => {
    return num === 6;
  });

  expect(item).toEqual(null);
});

test('returns found item', () => {
  const arr = [1, 2, 3, 4, 5];

  const item = find(arr, (num) => {
    return num === 3;
  });

  expect(item).toEqual(3);
});
