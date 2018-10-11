const { filter } = require('../index');

test('returns equal length array', () => {
  const arr = [1, 2, 3, 4, 5];

  const newArr = filter(arr, (num) => {
    return true;
  });

  expect(newArr.length).toEqual(arr.length);
});

test('returns empty array', () => {
  const arr = [1, 2, 3, 4, 5];

  const newArr = filter(arr, (num) => {
    return false;
  });

  expect(newArr.length).toEqual(0);
});

test('return array of only even numbers', () => {
  const arr = [1, 2, 3, 4, 5];

  const newArr = filter(arr, (num) => {
    return num % 2 === 0;
  });

  expect(newArr).toEqual([2, 4]);
});
