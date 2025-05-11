let cartCount = 0;
function addToCart() {
  cartCount++;
  document.querySelector('.cart span').textContent = cartCount;
}