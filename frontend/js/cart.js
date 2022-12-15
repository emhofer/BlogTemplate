const cart = JSON.parse(localStorage.getItem("cart"));

let tableBody = document.querySelector("tbody");
tableBody.removeChild(document.getElementById("errorLine"));

for (let i = 0; i < cart.length; i++) {
  const { quantity } = cart[i];
  const { title, price } = cart[i].attributes;
  let cartRow = document.createElement("tr");
  let rowTitle = document.createElement("td");
  let rowPrice = document.createElement("td");
  let rowQuantity = document.createElement("td");
  let rowSubtotal = document.createElement("td");
  rowSubtotal.classList.add("subtotal");

  rowTitle.innerHTML = title;
  rowPrice.innerHTML = price;
  rowQuantity.innerHTML = quantity;
  rowSubtotal.innerHTML = quantity * price;

  cartRow.append(rowTitle);
  cartRow.append(rowPrice);
  cartRow.append(rowQuantity);
  cartRow.append(rowSubtotal);
  tableBody.append(cartRow);
}
let subtotalElements = document.querySelectorAll(".subtotal");
let total = 0;
console.log(subtotalElements);
for (let i = 0; i < subtotalElements.length; i++) {
  total += parseInt(subtotalElements[i].innerHTML);
}
document.querySelector("#cartTotal").innerHTML = `Total: ${total}`;
