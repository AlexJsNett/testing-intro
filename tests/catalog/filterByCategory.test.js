const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

const ids = (items) => items.map(({ id }) => id);

describe('filterByCategory', () => {
  test("'all' returns products with IDs [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(filterByCategory(products, 'all'))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined returns products with IDs [1, 2, 3, 4, 5, 6]', () => {
    expect(ids(filterByCategory(products, undefined))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('empty string returns products with IDs [1, 2, 3, 4, 5, 6]', () => {
    expect(ids(filterByCategory(products, ''))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' returns products with IDs [1, 2]", () => {
    expect(ids(filterByCategory(products, 'electronics'))).toEqual([1, 2]);
  });

  test("'books' returns products with IDs [3, 6]", () => {
    expect(ids(filterByCategory(products, 'books'))).toEqual([3, 6]);
  });

  test("'home' returns products with IDs [4, 5]", () => {
    expect(ids(filterByCategory(products, 'home'))).toEqual([4, 5]);
  });

  test("'clothes' returns an empty array", () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  });

  test("'toys' returns an empty array", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });

  test("'sports' returns an empty array", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
