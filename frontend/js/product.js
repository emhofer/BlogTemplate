// scripts/product.js
function checkForProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    getProduct(productId);
  } else {
    console.log("A product can't be retrieved without an ID.");
  }
}

function getProduct(id) {
  const productReq = new Request(
    `http://localhost:1337/api/products/${id}?populate=*`
  );

  fetch(productReq)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        throw new Error(resp.statusText);
      }
    })
    .then(displayProduct)
    .catch();
}

function displayProduct(product) {
  let productImage = document.createElement("img");
  productImage.setAttribute(
    "src",
    `http://localhost:1337${product.data.attributes.image.data.attributes.url}`
  );

  let productTitle = document.createElement("h3");
  productTitle.innerHTML = product.data.attributes.title;

  let productDescription = document.createElement("p");
  productDescription.innerHTML = product.data.attributes.description;

  let productPrice = document.createElement("p");
  productPrice.innerHTML = product.data.attributes.price + "€";

  let cartButton = document.createElement("button");
  cartButton.classList.add("cartButton");
  cartButton.innerHTML = "Add to cart";
  cartButton.setAttribute("onclick", "testFunction()");

  const wrapper = document.getElementById("product-wrapper");
  wrapper.insertBefore(productImage, wrapper.firstChild);
  document
    .getElementById("product-info")
    .append(productTitle, productPrice, productDescription, cartButton);
}

checkForProduct();

const testFunction = () => {
  console.log("click");
};
