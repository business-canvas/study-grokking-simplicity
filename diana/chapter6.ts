// 객체에 대한 Copy On Write
const object = { a: 1, b: 2 };
const object_copy = Object.assign({}, object);

const shopping_cart = [
  { name: "nike shoes", price: 200000 },
  { name: "ipad", price: 500000 },
];

function setPrice(item, new_price) {
  const copied = Object.assign({}, item);
  copied.price = new_price;

  return copied;
}

// 카피 온 라이트 방식으로 객체에 값을 설정
function objectSet(object, key, value) {
  const copied = Object.assign({}, object);
  copied[key] = value;

  return copied;
}

// objectSet을 활용하여 setPrice를 리팩토링
function setPrice_v2(item, new_price) {
  return objectSet(item, "price", new_price);
}

// objectSet 함수를 이용해 제품 개수를 설정하는 setQuantity() 함수 만들기
function setQuantity(item, new_quantity) {
  return objectSet(item, "quantity", new_quantity);
}

// 객체의 키로 키/값 쌍을 지우는 delete 연산을 카피-온-라이트 방식으로 구현
function objectDelete(object, key) {
  const copied = Object.assign({}, object);
  delete copied[key];

  return copied;
}

// 예시 코드
function setPriceByName(cart, name, price) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].price = price;
    }
  }
}

// TODO: 카피 온 라이트 방식 적용. 값을 변경할 수 있는 대상은 무조건 복사한 값
function setPriceByName_v2(cart, name, price) {
  const copiedCard = cart.slice();
  for (var i = 0; i < copiedCard.length; i++) {
    if (copiedCard[i].name === name) {
      copiedCard[i] = setPrice_v2(copiedCard[i], price);
    }
  }

  return copiedCard;
}

function setQuantityByName(cart, name, quantity) {
  const copied_cart = cart.slice();
  copied_cart.forEach((item) => {
    if (item.name === name) {
      item = objectSet(item, "quantity", quantity);
    }
  });

  return copied_cart;
}
