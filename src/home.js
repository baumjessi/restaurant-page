export function createPage() {
    let pageContent = document.getElementById("content");
    //create title 
    let title = document.createElement("h1");
    title.textContent = "Pizza Palace";
    title.id = "title";
    pageContent.appendChild(title);
    //create blurb
    let blurb = document.createElement("p");
    blurb.textContent = `Pizza Palace is a family-owned New York style pizzeria in 
    Bellevue, TN. We specialize in thin crust pizzas and make our sauce and dough in-house.
    Ask us about our two-for-one special! We look forward to seeing you!`
    pageContent.appendChild(blurb);
    //create footer
    let footer = document.createElement("p");
    footer.textContent = "Created by Jessi B. for the Odin Project";
    pageContent.appendChild(footer);
}