let shopping_cart_2 = [];

function add_item_to_cart(name, price) {
  /**
   * var item = make_cart_item(name, price)
   * shopping_cart = add_item(shopping_cart, item)
   * var total = calc_total(shopping_cart)
   * update_shipping_icons(shopping_cart)
   * update_tax_dom(total)
   *
   */
  black_friday_promotion(shopping_cart_2); // 이러면 직접 shopping cart를 변경하게 된다.
}

function black_friday_promotion(shopping_cart) {
  throw new Error("Function not implemented.");
}

function add_item_to_cart_2(name, price) {
  /**
   * var item = make_cart_item(name, price)
   * shopping_cart = add_item(shopping_cart, item)
   * var total = calc_total(shopping_cart)
   * update_shipping_icons(shopping_cart)
   * update_tax_dom(total)
   *
   */
  const cart_copy = deepCopy(shopping_cart_2);
  black_friday_promotion(cart_copy); // 이러면 shopping cart를 직접 변경하지 않음. 대신 cart_copy를 직접 변경
}

function add_item_to_cart_3(name, price) {
  /**
   * var item = make_cart_item(name, price)
   * shopping_cart = add_item(shopping_cart, item)
   * var total = calc_total(shopping_cart)
   * update_shipping_icons(shopping_cart)
   * update_tax_dom(total)
   *
   */
  const cart_copy = deepCopy(shopping_cart_2);
  black_friday_promotion(cart_copy);

  shopping_cart_2 = deepCopy(cart_copy); // 직접 cart_copy를 하지 않고, 왜 deepCopy한 결과를 넣어주는거임?
}

// payrollCalc()는 직원 급여 계산하는 외부 라이브러리 함수인데, 우리 데이터를 어떻게 바꿀 지 신뢰할 수 없음

function deepCopy(obj: any) {}

function payrollCalc(copied_empolyees: void) {
  throw new Error("Function not implemented.");
}

function payrollCalcSafe(employees) {
  const copied_empolyees = deepCopy(employees);
  payrollCalc(copied_empolyees);
  // 여기서 return employees 하더라도 우리의 employees 를 직접 변경하지 않는거 아닌가?
  // 대신 copied_employess에 대한 참조값을 가지고 있기 때문에 이걸 그대로 return 하면 안전하지 않다고 판단

  return deepCopy(copied_empolyees);
}
