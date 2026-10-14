function assertValidQuantity(quantity, stock) {
  if (!Number.isInteger(quantity) || quantity < 1) {
    throw new RangeError('Quantity must be a positive integer');
  }
  if (quantity > stock) {
    throw new RangeError('Quantity cannot exceed stock');
  }
}

function addToCart(cart, product, quantity) {
  const existing = cart.find((item) => item.id === product.id);
  const nextQuantity = (existing ? existing.quantity : 0) + quantity;

  assertValidQuantity(quantity, product.stock);
  assertValidQuantity(nextQuantity, product.stock);

  if (!existing) return [...cart, { ...product, quantity }];
  return cart.map((item) => (item.id === product.id ? { ...item, quantity: nextQuantity } : item));
}

function changeQuantity(cart, productId, quantity) {
  const existing = cart.find((item) => item.id === productId);
  if (!existing) return cart;

  assertValidQuantity(quantity, existing.stock);

  return cart.map((item) => (item.id === productId ? { ...item, quantity } : item));
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
