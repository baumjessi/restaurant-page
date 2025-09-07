export function loadAbout() {
    //create title
    let title = document.createElement("h1");
    title.textContent = "About Us";
    //create blurb
    let blurb = document.createElement("p");
    blurb.textContent = `Pizza Palace was established in 1983. We have been 
    serving the Bellevue community proudly for over 40 years. `
    //append 
    let content = document.getElementById("content");
    content.appendChild(title);
    content.appendChild(blurb);
}