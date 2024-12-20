document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 5000 },
    { id: 2, name: "Product 2", price: 2000 },
    { id: 3, name: "Product 3", price: 1000 },
  ];

  const cart = [];

  const productsList = document.getElementById("products");
  const cartItemsDisplay = document.getElementById("cart-items-list");
  const emptyCartMessage = document.getElementById("empty-cart");
  const checkoutSection = document.getElementById("checkout");
  const displayTotalPrice = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");

  products.forEach((product) => renderProducts(product));
  saveProducts();

  //render the products
  function renderProducts(product) {
    const li = document.createElement("li");
    li.setAttribute("data-id", product.id);
    li.innerHTML = `
      <span>${product.name} - ${product.price}</span>
    <button class="cartButton" data-id="${product.id}">Add To Cart</button>
    `;
    productsList.appendChild(li);
  }

  productsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("cartButton")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const productForCart = products.find((p) => p.id === productId);

      addToCart(productForCart);
    }
  });

  //  product adding to the cart
  function addToCart(product) {
    cart.push(product);
    renderCartItems();
    saveCartItems();
  }

  // render the cart items
  function renderCartItems() {
    cartItemsDisplay.innerHTML = "";

    if (cart.length) {
      emptyCartMessage.classList.add("hidden");
      checkoutSection.classList.remove("hidden");

      //display cart
      cart.forEach((c, index) => {
        const list = document.createElement("li");
        list.innerHTML = `
            <span>${c.name} - Rs ${c.price}</span>
            <button class="removeButton" data-index=${index}>Remove</button>
            `;

        cartItemsDisplay.appendChild(list);
      });

      updateTotalPrice();
    } else {
      emptyCartMessage.classList.remove("hidden");
    }
  }

  //total price update

  function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    displayTotalPrice.textContent = `Rs${total}`;
  }

  //Remove button

  cartItemsDisplay.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeButton")) {
      const itemIndex = parseInt(e.target.getAttribute("data-index"));
      cart.splice(itemIndex, 1);
    }
    renderCartItems();
    saveCartItems();
  });

  //save to local storage
  function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
  }

  //save cart items to local storage
  function saveCartItems() {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }
});
