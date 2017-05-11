var hugMenu = document.getElementById("btn-hug-menu");
var menu = document.getElementById("menu");
var labMenu = document.getElementById("lab-menu");

labMenu.addEventListener("click", function(){
  menu.style.display = "block"
  // menu.classList.toggle("active");
})



var profileSection = document.getElementById("profile-sec");
var portfolioSection = document.getElementById("portfolio-Sec");
var contactSection = document.getElementById("contact");
var aboutSection = document.getElementById("about-sec");
var aPortfolio = document.getElementById("a-port");
var aAbout = document.getElementById("a-about");
var aContact = document.getElementById("a-cont");

function isInViewport(sectionInViewport, WithShade, WithoutShade) {
  var top = sectionInViewport.offsetTop;
  var left = sectionInViewport.offsetLeft;
  var width = sectionInViewport.offsetWidth;
  var height = sectionInViewport.offsetHeight;
  if(top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset){
    WithShade.className = "bc-green";
    (WithShade.className == "bc-green")? WithoutShade.className = "bc-dark": "";
  }else{
    WithShade.className ="bc-dark";
  }
}

window.addEventListener("scroll", function(){
  isInViewport(portfolioSection, aPortfolio, aAbout);
  isInViewport(aboutSection, aAbout, aPortfolio);
  isInViewport(contactSection, aContact, aAbout);

});
