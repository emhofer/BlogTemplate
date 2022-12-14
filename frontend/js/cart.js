const cart = JSON.parse(localStorage.getItem("cart"));

let tableBody = document.querySelector("tbody");
console.log(cart.length);
tableBody.removeChild(document.getElementById("errorLine"));

for (let i = 0; i < cart.length; i++) {
  const { title, price } = cart[i].attributes;
  console.log(title);
  let cartRow = document.createElement("tr");
  let rowTitle = document.createElement("td");
  let rowPrice = document.createElement("td");

  rowTitle.innerHTML = title;
  rowPrice.innerHTML = price;

  cartRow.append(rowTitle);
  cartRow.append(rowPrice);
  tableBody.append(cartRow);
}
