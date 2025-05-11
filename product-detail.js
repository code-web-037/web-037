document.addEventListener('DOMContentLoaded', function () {
  const cartCount = document.querySelector('.cart span');
  const addToCartBtn = document.querySelector('.add-to-cart button');
  const quantityInput = document.querySelector('.add-to-cart input');

  let currentCount = 0;

  addToCartBtn.addEventListener('click', function () {
    const quantity = parseInt(quantityInput.value) || 1;
    currentCount += quantity;
    cartCount.textContent = currentCount;
  });
});
