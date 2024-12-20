document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 2000 },
    { id: 2, name: "Product 2", price: 3000 },
    { id: 3, name: "Product 3", price: 5000 },
  ];

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - Rs${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add To Cart</button>
    `;

    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - Rs${item.price}
        `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `Rs${totalPrice}`;
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    totalPriceDisplay.textContent = `Rs0`;
    alert("Checkout successfully");
    renderCart();
  });
});
