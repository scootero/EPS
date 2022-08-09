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
