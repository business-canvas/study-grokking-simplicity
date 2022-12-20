
var mailing_list = [];

function add_contact(list, email){
    const new_list = list.slice();

    new_list.push(email);

    return new_list;
}

function submit_form_handler(event){
    var form = event.target;
    var email = form.elements["email"].value;
    mailing_list = add_contact(email);
}

var a = [1,2,3,4];
var b = a.pop();
console.log(b);
console.log(a);

function last_element(array){
    return array[array.length-1];
}

function drop_last(array){
    return array.slice(0, array.length-1);
}

function pop(array){
    const copied_array = array.slice();
    const last = last_element(copied_array);
    const without_last = drop_last(copied_array);

    return {
        last,
        array: without_last
    }
}

function push(array, value){
    const copied_array = array.slice();
    copied_array.push(value);

    return copied_array;
}

function add_contact(list, email){
    return push(list, email);
}

function arraySet(array, idx, value){
    const copied_array = array.slice();
    copied_array[idx] = value;

    return copied_array;
}

function objectSet(object, key, value){
    const copied_object = Object.assign({}, object);
    copied_object[key] = value;

    return copied_object;
}

function setPrice(item, new_price){
    return objectSet(item, "price", new_price);
}

function setQuantity(item, new_quantity){
    return objectSet(item, "quantity", new_quantity);
}

function objectDelete(object, key){
    const copied_object = Object.assign({}, object);
    delete copied_object[key]
    return copied_object
}

function setQuantityByName(cart, name, quantity){
    var copied_cart = cart.slice();

    for(var i= 0; i < copied_cart.length; i++){
        if(copied_cart[i].name  === name){
            copied_cart[i] = setQuantity(copied_cart[i], quantity)
        }
    }
}