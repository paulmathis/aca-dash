const { map } = require('../index');

test('returns equal length array', () => {
  const arr = [1, 2, 3, 4, 5];

  const newArr = map(arr, (num) => {
    return num;
  });

  expect(newArr.length).toEqual(arr.length);
});

test('multiplies each array item by 2', () => {
  const arr = [1, 2, 3, 4, 5];

  const newArr = map(arr, (num) => {
    return num * 2;
  });

  expect(newArr).toEqual([2, 4, 6, 8, 10]);
});
