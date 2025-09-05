console.log("peepee poopoo");

let pageContent = document.getElementById("content");

let title = document.createElement("h1");
title.textContent = "Pizza Palace";
pageContent.appendChild(title);

let blurb = document.createElement("p");
blurb.textContent = `Pizza Palace is a family-owned New York style pizzeria in 
Bellevue, TN. We specialize in thin crust pizzas and make our sauce and dough in-house.
Ask us about our two-for-one special! We look forward to seeing you!`
pageContent.appendChild(blurb);
