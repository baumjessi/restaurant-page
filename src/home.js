import Arrow from "./order-button-arrow.png";

export function createPage() {
    let pageContent = document.getElementById("content");
    //create title 
    let title = document.createElement("h1");
    title.textContent = "Pizza Palace";
    title.id = "title";
    pageContent.appendChild(title);

    //create order button
    let orderBtnArrow = new Image();
    orderBtnArrow.src = Arrow;
    orderBtnArrow.className = "order-button-arrow";

    let orderBtn = document.createElement("button");
    orderBtn.id = "home-order-button";
    orderBtn.className = "order-button";

    let orderBtnDiv = document.createElement("div");
    orderBtnDiv.className = "order-button-div";
    let orderBtnText = document.createElement("p");
    orderBtnText.textContent = "Order Now";
    orderBtnDiv.appendChild(orderBtnText);
    orderBtnDiv.appendChild(orderBtnArrow);
    orderBtn.appendChild(orderBtnDiv);
  
    pageContent.appendChild(orderBtn);
    pageContent.id = "content";
    pageContent.className = "home-content";
}