import Photo1 from "./about-photo-1.jpg";
import Photo2 from "./about-photo-2.jpg";
import Photo3 from "./about-photo-3.jpg";

export function loadAbout() {
  //create title
  let title = document.createElement("h1");
  title.textContent = "About Us";
  title.className = "about-title";
  //create photos
  const photo1 = new Image();
  photo1.src = Photo1;
  photo1.className = "about-photo";
  const photo2 = new Image();
  photo2.src = Photo2;
  photo2.className = "about-photo";
  const photo3 = new Image();
  photo3.src = Photo3;
  photo3.className = "about-photo";
  const aboutPhotoDiv = document.createElement("div");
  aboutPhotoDiv.className = "about-photo-div";
  aboutPhotoDiv.appendChild(photo1);
  aboutPhotoDiv.appendChild(photo2);
  aboutPhotoDiv.appendChild(photo3);
  //create blurb
  let blurb = document.createElement("p");
  blurb.textContent = `Pizza Palace was established in 1983. We have been 
    serving the Bellevue community proudly for over 40 years. `;
  //append
  let content = document.getElementById("content");
  content.appendChild(title);
  content.appendChild(aboutPhotoDiv);
  content.appendChild(blurb);

  //specials
  let twoForOneDiv = document.createElement("div");
  twoForOneDiv.className = "specials-div";
  content.appendChild(twoForOneDiv);
  let twoForOneHeader = document.createElement("h2");
  twoForOneHeader.className = "specials-header";
  twoForOneHeader.innerHTML = "Monday Night <br> 2-4-1 Special";
  let twoForOneText = document.createElement("p");
  twoForOneText.innerHTML =
    "Get one free slice of cheese pizza and one domestic draft beer for every slice and beer you order! Available every Monday from 4PM until close.";
  twoForOneDiv.appendChild(twoForOneHeader);
  twoForOneDiv.appendChild(twoForOneText);
}
