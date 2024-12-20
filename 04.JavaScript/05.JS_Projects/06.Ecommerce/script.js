let productsList = document.getElementById("products");
let shoppingProductList = document.getElementById("renderProduct");
let totalPrice = document.getElementById("checkout");

let products = [
  {
    id: 1,
    productName: "Product 1",
    price: 1000,
  },
  {
    id: 2,
    productName: "Product 2",
    price: 2000,
  },
  {
    id: 3,
    productName: "Product 3",
    price: 3000,
  },
];

products.forEach((p) => renderProducts(p));

let total = 0;

function renderProducts(product) {
  const li = document.createElement("li");
  li.setAttribute("data-id", product.id);
  li.innerHTML = `
    <span>${product.productName} - Rs${product.price}</span>
    <button class="cartButton" data-id="${product.id}">Add To Cart</button>
    `;
  productsList.appendChild(li);
}

//add event for add to cart button

productsList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("cartButton")) {
    const productId = e.target.getAttribute("data-id");
    const product = products.find((p) => p.id == productId);
    if (product) {
      addToCart(product);
      Total(product);
    }
  }
});

function addToCart(p) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${p.productName} - Rs${p.price}
    `;

  shoppingProductList.appendChild(li);
}

function Total(product) {
  total += product.price;

  totalPrice.textContent = `Total: Rs${total}`;
  const btn = document.createElement("span");
  btn.innerHTML = `<button>Checkout</button>`;
  totalPrice.appendChild(btn);
}
