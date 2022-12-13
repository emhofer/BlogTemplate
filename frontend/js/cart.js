const addToCart = (item) => {
  let currentCart = JSON.parse(localStorage.getItem("cart"));

  if (!currentCart) {
    localStorage.setItem("cart", JSON.stringify(item));
    return;
  } else if (Array.isArray(currentCart)) {
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    return;
  } else {
    let array = [currentCart, item];
    localStorage.setItem("cart", JSON.stringify(array));
  }
};

export default addToCart;
