import addToCart from "./addToCart.js";

function fetchProducts() {
  const productsReq = new Request(
    "http://localhost:1337/api/products?populate=*"
  );

  fetch(productsReq)
    .then((response) => response.json())
    .then((products) => {
      let productList = document.getElementById("product-list");
      products.data.forEach((product) => {
        productList.appendChild(createProductCard(product));
      });
    });
}

function createProductCard(product) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.onclick = () => {
    window.location.assign(
      `http://localhost:5501/frontend/pages/product.html?id=${product.id}`
    );
  };

  let cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  let productImage = document.createElement("img");
  productImage.setAttribute(
    "src",
    `http://localhost:1337${product.attributes.image.data.attributes.url}`
  );

  let productTitle = document.createElement("h3");
  productTitle.innerHTML = product.attributes.title;

  let productDescription = document.createElement("p");
  productDescription.innerHTML =
    product.attributes.description.split(" ").slice(0, 10).join(" ") + " ...";

  let productPrice = document.createElement("p");
  productPrice.innerHTML = product.attributes.price + "€";

  let cartButton = document.createElement("button");
  cartButton.classList.add("cartButton");
  cartButton.innerHTML = "Add to cart";
  cartButton.addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(product);
  });

  cardBody.append(
    productImage,
    productTitle,
    productPrice,
    productDescription,
    cartButton
  );

  card.append(cardBody);

  return card;
}

fetchProducts();
