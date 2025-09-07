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
    let item1 = document.createElement("h2");
    item1.textContent = "The Palace Pizza";
    let item1Toppings = document.createElement("p");
    item1Toppings.textContent = "Sausage, pepperoni, green peppers, onions, olives, and mozzarella"

    let item2 = document.createElement("h2");
    item2.textContent = "Margherita";
    let item2Toppings = document.createElement("p");
    item2Toppings.textContent = "Fresh mozzarella, basil, and parmesan"

    let item3 = document.createElement("h2");
    item3.textContent = "Cheese";
    let item3Toppings = document.createElement("p");
    item3Toppings.textContent = "Shredded mozzarella and parmesan"

    let item4 = document.createElement("h2");
    item4.textContent = "Meat Lover";
    let item4Toppings = document.createElement("p");
    item4Toppings.textContent = "Sausage, pepperoni, beef, bacon, ham, and mozzarella"

    let item5 = document.createElement("h2");
    item5.textContent = "Veggie Lover";
    let item5Toppings = document.createElement("p");
    item5Toppings.textContent = "Spinach, mushrooms, onions, olives, green peppers, tomatoes, and mozzarella"
    
    //append everything to page
    let content = document.getElementById("content");
    content.appendChild(item1); 
    content.appendChild(item1Toppings);
    content.appendChild(item2);
    content.appendChild(item2Toppings);
    content.appendChild(item3);
    content.appendChild(item3Toppings);
    content.appendChild(item4);
    content.appendChild(item4Toppings);
    content.appendChild(item5);
    content.appendChild(item5Toppings);
};