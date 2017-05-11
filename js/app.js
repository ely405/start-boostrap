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

function onScroll(element){
  var elementPos = element.getBoundingClientRect();
  if(elementPos.top - scrollY <= -elementPos.top){
    console.log("scroll 100");
  }
}

function isInViewport(element, link) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  if(  rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)){
      link.style.backgroundColor = "green";
      console.log("top");
    }else{
      link.style.backgroundColor = "black";
    }
}

window.addEventListener("scroll", function(){
  isInViewport(portfolioSection, aPortfolio);
  isInViewport(aboutSection, aAbout);
  isInViewport(contactSection, aContact);

});
