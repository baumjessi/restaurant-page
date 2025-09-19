export function loadAbout() {
  let pageContent = document.getElementById("content");
  pageContent.className = "about-content";
  //about us blurb
  let aboutDiv = document.createElement("about-div");
  aboutDiv.className = "about-div";
  pageContent.appendChild(aboutDiv);
  let aboutHeader = document.createElement("h1");
  aboutHeader.className = "about-header";
  aboutDiv.appendChild(aboutHeader);
  aboutHeader.textContent = "About Us";
  let aboutText = document.createElement("p");
  aboutDiv.appendChild(aboutText);
  aboutText.textContent =
    "Pizza Palace has been serving the Nashville area since 1986. Over these decades, we have built a lasting relationship with the community with our dedication to quality ingredients, prioritization of customer experience, and focus on culinary artistry. The tomatoes for our signature marinara sauce are sourced locally, and our dough is made fresh daily by top-notch cooks. We would love if you stopped in for a visit! ";
}
