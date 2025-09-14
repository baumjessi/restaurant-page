import Supreme from './supreme.png';
import Marg from './margherita.png';
import Cheese from './cheese.png';
import MeatLover from './meat-lover.png';
import VeggieLover from './veggie-lover.png';

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

export function loadMenu() {
    let title = document.createElement("h1");
    title.textContent = "Pizza Palace";
    //create blurb
    let blurb = document.createElement("p");
    blurb.textContent = `All pies come in 8-inch, 12-inch, and 16-inch sizes. Each pie is blanketed in our 
    tangy marinara sauce, which is made in-house daily. Toppings
    can be removed or swapped, and additional toppings can added at a small cost. Take 
    a look at our many delicious choices below!`


    //create menu items
    let item1Div = document.createElement("div");
    item1Div.className = "menu-item";
    let item1 = document.createElement("h2");
    item1.textContent = "The Palace Pizza";
    let item1Toppings = document.createElement("p");
    item1Toppings.textContent = "Sausage, pepperoni, green peppers, onions, olives, and mozzarella";
    item1Div.appendChild(supremeImg);
    item1Div.appendChild(item1);
    item1Div.appendChild(item1Toppings);

    let item2Div = document.createElement("div");
    item2Div.className = "menu-item";
    let item2 = document.createElement("h2");
    item2.textContent = "Margherita";
    let item2Toppings = document.createElement("p");
    item2Toppings.textContent = "Fresh mozzarella, basil, and parmesan";
    item2Div.appendChild(margImg);
    item2Div.appendChild(item2);
    item2Div.appendChild(item2Toppings);

    let item3Div = document.createElement("div");
    item3Div.className = "menu-item";
    let item3 = document.createElement("h2");
    item3.textContent = "Cheese";
    let item3Toppings = document.createElement("p");
    item3Toppings.textContent = "Shredded mozzarella and parmesan";
    item3Div.appendChild(cheeseImg);
    item3Div.appendChild(item3);
    item3Div.appendChild(item3Toppings);

    let item4Div = document.createElement("div");
    item4Div.className = "menu-item";
    let item4 = document.createElement("h2");
    item4Div.className = "menu-item";
    item4.textContent = "Meat Lover";
    let item4Toppings = document.createElement("p");
    item4Toppings.textContent = "Sausage, pepperoni, beef, bacon, ham, and mozzarella";
    item4Div.appendChild(meatLoverImg);
    item4Div.appendChild(item4);
    item4Div.appendChild(item4Toppings);

    let item5Div = document.createElement("div");
    item5Div.className = "menu-item";
    let item5 = document.createElement("h2");
    item5.textContent = "Veggie Lover";
    let item5Toppings = document.createElement("p");
    item5Toppings.textContent = "Spinach, mushrooms, onions, olives, green peppers, tomatoes, and mozzarella";
    item5Div.appendChild(veggieLoverImg);
    item5Div.appendChild(item5);
    item5Div.appendChild(item5Toppings);
    
    //append everything to page
    let content = document.getElementById("content");
    content.className = "menu-content";
    let menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    content.appendChild(menuDiv);
    menuDiv.appendChild(item1Div);
    menuDiv.appendChild(item2Div);
    menuDiv.appendChild(item3Div);
    menuDiv.appendChild(item4Div);
    menuDiv.appendChild(item5Div);
};