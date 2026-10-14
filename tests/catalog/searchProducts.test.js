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

  test.todo("'javascript' returns the product with ID 3");
  test.todo("'ЧЕХОЛ' returns the product with ID 5");
  test.todo("'наушники' returns the product with ID 1");
  test.todo('empty string returns products with IDs [1, 2, 3, 4, 5, 6]');
  test.todo('whitespace-only string returns products with IDs [1, 2, 3, 4, 5, 6]');
  test.todo("'\\t\\n' returns products with IDs [1, 2, 3, 4, 5, 6]");
});
