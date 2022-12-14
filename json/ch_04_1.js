// action
const shopping_cart = []
// action
let shopping_cart_total = 0

// action
function add_item_to_cart(name, price) {
  shopping_cart.push({ name, price })

  calc_cart_total()
}

// action
function update_shpping_icons() {
  const buy_buttons = get_buy_buttons_dom()
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i]
    const item = button.item
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon()
    } else {
      button.hide_free_shipping_icon()
    }
  }
}

// action
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1)
}

// action
function calc_cart_total() {
  shopping_cart_total = 0
  for (let i = 0; i < shopping_cart.length; i++) {
    const item = shopping_cart[i]
    shopping_cart_total += item.price
  }
  set_cart_total_dom()
  update_shpping_icons()
  update_tax_dom()
}
