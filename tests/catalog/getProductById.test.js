const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 returns products[0]', () => {
    expect(getProductById(products, 1)).toBe(products[0]);
  });

  test('ID 4 returns products[3]', () => {
    expect(getProductById(products, 4)).toBe(products[3]);
  });

  test('ID 6 returns products[5]', () => {
    expect(getProductById(products, 6)).toBe(products[5]);
  });

  test('ID 0 returns null', () => {
    expect(getProductById(products, 0)).toBeNull();
  });

  test('ID 999 returns null', () => {
    expect(getProductById(products, 999)).toBeNull();
  });

  test('ID -1 returns null', () => {
    expect(getProductById(products, -1)).toBeNull();
  });

  test.todo("string ID '1' returns null");
  test.todo('ID undefined returns null');
  test.todo('ID NaN returns null');
});
