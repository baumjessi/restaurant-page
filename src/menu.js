import Supreme from './supreme.png';
import Marg from './margherita.png';
import Cheese from './cheese.png';
import MeatLover from './meat-lover.png';
import VeggieLover from './veggie-lover.png';
import AddToCart from './add-cart.png'

//create images
const supremeImg = new Image();
supremeImg.src = Supreme;
supremeImg.className = "menu-item-image";

const margImg = new Image();
margImg.src = Marg;
margImg.className = "menu-item-image";

const cheeseImg = new Image();
cheeseImg.src = Cheese;
cheeseImg.className = "menu-item-image";

const meatLoverImg = new Image();
meatLoverImg.src = MeatLover;
meatLoverImg.className = "menu-item-image";

const veggieLoverImg = new Image();
veggieLoverImg.src = VeggieLover;
veggieLoverImg.className = "menu-item-image";

//create array for select menu
const selectArray = [`8 in. for $12.99`, `12 in. for $16.99`, `16 in. for 19.99`];

export function loadMenu() {
    //create title
    let title = document.createElement("h1");
    title.textContent = "Our Menu";
    title.className = "menu-title";
    
    //create menu items
    let item1Div = document.createElement("div");
    item1Div.className = "menu-item";
    let item1 = document.createElement("h2");
    item1.textContent = "The Palace Pizza";
    let item1Toppings = document.createElement("p");
    item1Toppings.textContent = "Sausage, pepperoni, green peppers, onions, olives, and mozzarella";
    const item1Cart = new Image();
    item1Cart.src = AddToCart;
    item1Cart.className = "add-to-cart";
    var item1Select = document.createElement("select");
    item1Select.className = "select-menu";
    for (var i = 0; i < selectArray.length; i++) {
        var option = document.createElement("option");
        option.value = selectArray[i];
        option.text = selectArray[i];
        item1Select.appendChild(option);
    }
    item1Div.appendChild(supremeImg);
    item1Div.appendChild(item1);
    item1Div.appendChild(item1Toppings);
    let cartSelectDiv1 = document.createElement("div");
    cartSelectDiv1.className = "cart-select-div";
    item1Div.appendChild(cartSelectDiv1);
    cartSelectDiv1.appendChild(item1Select);
    cartSelectDiv1.appendChild(item1Cart);

    let item2Div = document.createElement("div");
    item2Div.className = "menu-item";
    let item2 = document.createElement("h2");
    item2.textContent = "Margherita";
    let item2Toppings = document.createElement("p");
    item2Toppings.textContent = "Fresh mozzarella, basil, and parmesan";
    const item2Cart = new Image();
    item2Cart.src = AddToCart;
    item2Cart.className = "add-to-cart";
    var item2Select = document.createElement("select");
    item2Select.className = "select-menu";
    for (var i = 0; i < selectArray.length; i++) {
        var option = document.createElement("option");
        option.value = selectArray[i];
        option.text = selectArray[i];
        item2Select.appendChild(option);
    }
    item2Div.appendChild(margImg);
    item2Div.appendChild(item2);
    item2Div.appendChild(item2Toppings);
    let cartSelectDiv2 = document.createElement("div");
    cartSelectDiv2.className = "cart-select-div";
    item2Div.appendChild(cartSelectDiv2);
    cartSelectDiv2.appendChild(item2Select);
    cartSelectDiv2.appendChild(item2Cart);

    let item3Div = document.createElement("div");
    item3Div.className = "menu-item";
    let item3 = document.createElement("h2");
    item3.textContent = "Cheese";
    let item3Toppings = document.createElement("p");
    item3Toppings.textContent = "Shredded mozzarella and parmesan";
    const item3Cart = new Image();
    item3Cart.src = AddToCart;
    item3Cart.className = "add-to-cart";
    var item3Select = document.createElement("select");
    item3Select.className = "select-menu";
    for (var i = 0; i < selectArray.length; i++) {
        var option = document.createElement("option");
        option.value = selectArray[i];
        option.text = selectArray[i];
        item3Select.appendChild(option);
    }
    item3Div.appendChild(cheeseImg);
    item3Div.appendChild(item3);
    item3Div.appendChild(item3Toppings);
    let cartSelectDiv3 = document.createElement("div");
    cartSelectDiv3.className = "cart-select-div";
    cartSelectDiv3.className = "cart-select-div";
    item3Div.appendChild(cartSelectDiv3);
    cartSelectDiv3.appendChild(item3Select);
    cartSelectDiv3.appendChild(item3Cart);

    let item4Div = document.createElement("div");
    item4Div.className = "menu-item";
    let item4 = document.createElement("h2");
    item4Div.className = "menu-item";
    item4.textContent = "Meat Lover";
    let item4Toppings = document.createElement("p");
    item4Toppings.textContent = "Sausage, pepperoni, beef, bacon, ham, and mozzarella";
    const item4Cart = new Image();
    item4Cart.src = AddToCart;
    item4Cart.className = "add-to-cart";
    var item4Select = document.createElement("select");
    item4Select.className = "select-menu";
    for (var i = 0; i < selectArray.length; i++) {
        var option = document.createElement("option");
        option.value = selectArray[i];
        option.text = selectArray[i];
        item4Select.appendChild(option);
    }
    item4Div.appendChild(meatLoverImg);
    item4Div.appendChild(item4);
    item4Div.appendChild(item4Toppings);
    let cartSelectDiv4 = document.createElement("div");
    cartSelectDiv4.className = "cart-select-div";
    item4Div.appendChild(cartSelectDiv4);
    cartSelectDiv4.appendChild(item4Select);
    cartSelectDiv4.appendChild(item4Cart);

    let item5Div = document.createElement("div");
    item5Div.className = "menu-item";
    let item5 = document.createElement("h2");
    item5.textContent = "Veggie Lover";
    let item5Toppings = document.createElement("p");
    item5Toppings.textContent = "Spinach, mushrooms, onions, olives, green peppers, tomatoes, and mozzarella";
    const item5Cart = new Image();
    item5Cart.src = AddToCart;
    item5Cart.className = "add-to-cart";
    var item5Select = document.createElement("select");
    item5Select.className = "select-menu";
    for (var i = 0; i < selectArray.length; i++) {
        var option = document.createElement("option");
        option.value = selectArray[i];
        option.text = selectArray[i];
        item5Select.appendChild(option);
    }
    item5Div.appendChild(veggieLoverImg);
    item5Div.appendChild(item5);
    item5Div.appendChild(item5Toppings);
    let cartSelectDiv5 = document.createElement("div");
    cartSelectDiv5.className = "cart-select-div";
    item5Div.appendChild(cartSelectDiv5);
    cartSelectDiv5.appendChild(item5Select);
    cartSelectDiv5.appendChild(item5Cart);
    
    //append everything to page
    let content = document.getElementById("content");
    content.className = "menu-content";
    let menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    content.appendChild(title);
    content.appendChild(menuDiv);
    menuDiv.appendChild(item1Div);
    menuDiv.appendChild(item2Div);
    menuDiv.appendChild(item3Div);
    menuDiv.appendChild(item4Div);
    menuDiv.appendChild(item5Div);
};