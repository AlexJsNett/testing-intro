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

  test.todo("'electronics' returns products with IDs [1, 2]");
  test.todo("'books' returns products with IDs [3, 6]");
  test.todo("'home' returns products with IDs [4, 5]");
  test.todo("'clothes' returns an empty array");
  test.todo("'toys' returns an empty array");
  test.todo("'sports' returns an empty array");
});
