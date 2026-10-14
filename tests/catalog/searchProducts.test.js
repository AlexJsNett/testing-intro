const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

const ids = (items) => items.map(({ id }) => id);

describe('searchProducts', () => {
  test("'Наушники' returns the product with ID 1", () => {
    expect(ids(searchProducts(products, 'Наушники'))).toEqual([1]);
  });

  test("'Чистый код' returns the product with ID 6", () => {
    expect(ids(searchProducts(products, 'Чистый код'))).toEqual([6]);
  });

  test("'Настольная лампа' returns the product with ID 4", () => {
    expect(ids(searchProducts(products, 'Настольная лампа'))).toEqual([4]);
  });

  test("'javascript' returns the product with ID 3", () => {
    expect(ids(searchProducts(products, 'javascript'))).toEqual([3]);
  });

  test("'ЧЕХОЛ' returns the product with ID 5", () => {
    expect(ids(searchProducts(products, 'ЧЕХОЛ'))).toEqual([5]);
  });

  test("'наушники' returns the product with ID 1", () => {
    expect(ids(searchProducts(products, 'наушники'))).toEqual([1]);
  });

  test('empty string returns products with IDs [1, 2, 3, 4, 5, 6]', () => {
    expect(ids(searchProducts(products, ''))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('whitespace-only string returns products with IDs [1, 2, 3, 4, 5, 6]', () => {
    expect(ids(searchProducts(products, '   '))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' returns products with IDs [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(searchProducts(products, '\t\n'))).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
