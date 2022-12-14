const shopping_cart = []
let shopping_cart_total = 0

function add_item_to_cart(name, price) {
  shopping_cart.push({ name, price })

  calc_cart_total()
}

function calc_cart_total() {
  shopping_cart_total = 0
  for (let i = 0; i < shopping_cart.length; i++) {
    const item = shopping_cart[i]
    shopping_cart_total += item.price
  }
  set_cart_total_dom()
}
