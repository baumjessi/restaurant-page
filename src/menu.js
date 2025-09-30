import Supreme from "./assets/supreme.png";
import Marg from "./assets/margherita.png";
import Cheese from "./assets/cheese.png";
import MeatLover from "./assets/meat-lover.png";
import VeggieLover from "./assets/veggie-lover.png";
import AddToCart from "./assets/add-cart.png";
import Pepperoni from "./assets/pepperoni.png";

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

const pepperoniImg = new Image();
pepperoniImg.src = Pepperoni;
pepperoniImg.className = "menu-item-image";

//create array for select menu
const selectArray = [
  `8 in. for $12.99`,
  `12 in. for $16.99`,
  `16 in. for 19.99`,
];

export function loadMenu() {
  //create title
  let title = document.createElement("h1");
  title.textContent = "Our Menu";
  title.className = "menu-title";

  //create cheese card
  let item1Div = document.createElement("div");
  item1Div.className = "menu-item";
  let item1 = document.createElement("h2");
  item1.textContent = "Cheese";
  let item1Toppings = document.createElement("p");
  item1Toppings.textContent = "Homemade marinara sauce, shredded mozzarella, and parmesan";
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
  let cheeseContent = document.createElement("div");
  cheeseContent.appendChild(cheeseImg);
  cheeseContent.appendChild(item1);
  cheeseContent.appendChild(item1Toppings);
  item1Div.appendChild(cheeseContent);
  let cartSelectDiv1 = document.createElement("div");
  cartSelectDiv1.className = "cart-select-div";
  cartSelectDiv1.className = "cart-select-div";
  item1Div.appendChild(cartSelectDiv1);
  cartSelectDiv1.appendChild(item1Select);
  cartSelectDiv1.appendChild(item1Cart);

  //create pepperoni card
  let item2Div = document.createElement("div");
  item2Div.className = "menu-item";
  let item2 = document.createElement("h2");
  item2.textContent = "Pepperoni";
  let item2Toppings = document.createElement("p");
  item2Toppings.textContent = "Homemade marinara sauce, shredded mozzarella, parmesan, and pepperoni";
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
  let pepperoniContent = document.createElement("div");
  pepperoniContent.appendChild(pepperoniImg);
  pepperoniContent.appendChild(item2);
  pepperoniContent.appendChild(item2Toppings);
  item2Div.appendChild(pepperoniContent);
  let cartSelectDiv2 = document.createElement("div");
  cartSelectDiv2.className = "cart-select-div";
  item2Div.appendChild(cartSelectDiv2);
  cartSelectDiv2.appendChild(item2Select);
  cartSelectDiv2.appendChild(item2Cart);

  //create palace card
  let item3Div = document.createElement("div");
  item3Div.className = "menu-item";
  let item3 = document.createElement("h2");
  item3.textContent = "The Palace Pizza";
  let item3Toppings = document.createElement("p");
  item3Toppings.textContent =
    "Homemade marinara sauce, shredded mozzarella, parmesan, sausage, pepperoni, green peppers, onions, and olives";
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
  let supremeContent = document.createElement("div");
  supremeContent.appendChild(supremeImg);
  supremeContent.appendChild(item3);
  supremeContent.appendChild(item3Toppings);
  item3Div.appendChild(supremeContent);
  let cartSelectDiv3 = document.createElement("div");
  cartSelectDiv3.className = "cart-select-div";
  item3Div.appendChild(cartSelectDiv3);
  cartSelectDiv3.appendChild(item3Select);
  cartSelectDiv3.appendChild(item3Cart);

  //create marg card
  let item4Div = document.createElement("div");
  item4Div.className = "menu-item";
  let item4 = document.createElement("h2");
  item4.textContent = "Margherita";
  let item4Toppings = document.createElement("p");
  item4Toppings.textContent = "Homemade marinara sauce, fresh mozzarella, basil, and parmesan";
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

  let margContent = document.createElement("div");
  margContent.appendChild(margImg);
  margContent.appendChild(item4);
  margContent.appendChild(item4Toppings);
  item4Div.appendChild(margContent);
  let cartSelectDiv4 = document.createElement("div");
  cartSelectDiv4.className = "cart-select-div";
  item4Div.appendChild(cartSelectDiv4);
  cartSelectDiv4.appendChild(item4Select);
  cartSelectDiv4.appendChild(item4Cart);

  //create meat card
  let item5Div = document.createElement("div");
  item5Div.className = "menu-item";
  let item5 = document.createElement("h2");
  item5Div.className = "menu-item";
  item5.textContent = "Meat Lover";
  let item5Toppings = document.createElement("p");
  item5Toppings.textContent =
    "Homemade marinara sauce, shredded mozarella, parmesan, sausage, pepperoni, beef, and ham";
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

  let meatContent = document.createElement("div");
  meatContent.appendChild(meatLoverImg);
  meatContent.appendChild(item5);
  meatContent.appendChild(item5Toppings);
  item5Div.appendChild(meatContent);
  let cartSelectDiv5 = document.createElement("div");
  cartSelectDiv5.className = "cart-select-div";
  item5Div.appendChild(cartSelectDiv5);
  cartSelectDiv5.appendChild(item5Select);
  cartSelectDiv5.appendChild(item5Cart);

  //create veggie card
  let item6Div = document.createElement("div");
  item6Div.className = "menu-item";
  let item6 = document.createElement("h2");
  item6.textContent = "Veggie Lover";
  let item6Toppings = document.createElement("p");
  item6Toppings.textContent =
    "Homemade marinara sauce, shredded mozarella, parmesan, spinach, mushrooms, onions, olives, green peppers, tomatoes, and mozzarella";
  const item6Cart = new Image();
  item6Cart.src = AddToCart;
  item6Cart.className = "add-to-cart";
  var item6Select = document.createElement("select");
  item6Select.className = "select-menu";
  for (var i = 0; i < selectArray.length; i++) {
    var option = document.createElement("option");
    option.value = selectArray[i];
    option.text = selectArray[i];
    item6Select.appendChild(option);
  }

  let vegContent = document.createElement("div");
  vegContent.appendChild(veggieLoverImg);
  vegContent.appendChild(item6);
  vegContent.appendChild(item6Toppings);
  item6Div.appendChild(vegContent);
  let cartSelectDiv6 = document.createElement("div");
  cartSelectDiv6.className = "cart-select-div";
  item6Div.appendChild(cartSelectDiv6);
  cartSelectDiv6.appendChild(item6Select);
  cartSelectDiv6.appendChild(item6Cart);

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
  menuDiv.appendChild(item6Div);
}
