// Brett’s company : environmental and process systems,inc
// ( possible www.eps-midwest.com )

// Competitors:
// https://jciind.com/
// https://fluidequip.com/
// http://ftcequipment.com/
// https://enviro-line.com/

//Suppliers:
//https://www.sulzer.com/en

//https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/

const menuBars = document.getElementById("menu-bars");
const heroVideo = document.getElementById("water-video");

const navCompanyName = document.getElementById("nav-company-name");

// heroVideo.playbackRate = .;

function togglenav() {
  menuBars.classList.toggle("menu-active");
  menuBars.classList.toggle("change");
}

menuBars.addEventListener("click", togglenav);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
