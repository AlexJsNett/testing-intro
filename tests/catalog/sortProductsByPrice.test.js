const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

const ids = (items) => items.map(({ id }) => id);
const pick = (idList) => products.filter(({ id }) => idList.includes(id));

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(ids(sortProductsByPrice(products, 'asc'))).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(ids(sortProductsByPrice(products))).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    expect(ids(sortProductsByPrice(pick([1, 3, 4]), 'asc'))).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(ids(sortProductsByPrice(products, 'desc'))).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const input = [3, 1, 4].map((id) => products.find((product) => product.id === id));
    expect(ids(sortProductsByPrice(input, 'desc'))).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const input = [5, 2, 6].map((id) => products.find((product) => product.id === id));
    expect(ids(sortProductsByPrice(input, 'desc'))).toEqual([2, 5, 6]);
  });

  test.todo("'asc' не меняет исходный массив [1, 3, 4]");
  test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  test.todo('направление по умолчанию не меняет исходный массив всех товаров');
});
