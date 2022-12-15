const addToCart = (item) => {
  let currentCart = JSON.parse(localStorage.getItem("cart"));

  if (!currentCart) {
    item.quantity = 1;
    localStorage.setItem("cart", JSON.stringify([item]));
    return;
  } else if (Array.isArray(currentCart)) {
    for (let i = 0; i < currentCart.length; i++) {
      if (currentCart[i].id === item.id) {
        currentCart[i].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(currentCart));
        return;
      }
    }
    item.quantity = 1;
    currentCart.push(item);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
};

export default addToCart;
