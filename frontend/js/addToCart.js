const addToCart = (item) => {
  let currentCart = JSON.parse(localStorage.getItem("cart"));

  if (!currentCart) {
    item.quantity = 1;
    localStorage.setItem("cart", JSON.stringify([item]));
    return;
  } else if (Array.isArray(currentCart)) {
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
};

export default addToCart;
