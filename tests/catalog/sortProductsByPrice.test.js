const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

const ids = (items) => items.map(({ id }) => id);
const pick = (idList) => products.filter(({ id }) => idList.includes(id));

describe('sortProductsByPrice', () => {
  test("all products with 'asc' are sorted as [3, 6, 5, 4, 2, 1]", () => {
    expect(ids(sortProductsByPrice(products, 'asc'))).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('all products without direction are sorted as [3, 6, 5, 4, 2, 1]', () => {
    expect(ids(sortProductsByPrice(products))).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("products [1, 3, 4] with 'asc' are sorted as [3, 4, 1]", () => {
    expect(ids(sortProductsByPrice(pick([1, 3, 4]), 'asc'))).toEqual([3, 4, 1]);
  });

  test.todo("all products with 'desc' are sorted as [1, 2, 4, 5, 6, 3]");
  test.todo("products [3, 1, 4] with 'desc' are sorted as [1, 4, 3]");
  test.todo("products [5, 2, 6] with 'desc' are sorted as [2, 5, 6]");
  test.todo("'asc' does not change the source array [1, 3, 4]");
  test.todo("'desc' does not change the source array [1, 3, 4]");
  test.todo('default direction does not change the source array of all products');
});
