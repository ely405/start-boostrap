var hugMenu = document.getElementById("btn-hug-menu");
var menu = document.getElementById("menu");
var labMenu = document.getElementById("lab-menu");

labMenu.addEventListener("click", function(){
    menu.classList.toggle("d-block");
    menu.classList.toggle("menu-none");
})

var profileSection = document.getElementById("profile-sec");
var portfolioSection = document.getElementById("portfolio-Sec");
var contactSection = document.getElementById("contact");
var aboutSection = document.getElementById("about-sec");
var aPortfolio = document.getElementById("a-port");
var aAbout = document.getElementById("a-about");
var aContact = document.getElementById("a-cont");

function isInViewport(sectionInViewport, WithShade, clShade, WithoutShade, clWithoutShade) {
    var top = sectionInViewport.offsetTop;
    var left = sectionInViewport.offsetLeft;
    var width = sectionInViewport.offsetWidth;
    var height = sectionInViewport.offsetHeight;
    if(top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset){
        WithShade.className = clShade;
        (WithShade.className == clShade)? WithoutShade.className = clWithoutShade: "";
    }else{
        WithShade.className =clWithoutShade;
    }
}

window.addEventListener("scroll", function(){
    isInViewport(portfolioSection, aPortfolio, "bc-green", aAbout, "bc-black");
    isInViewport(aboutSection, aAbout, "bc-green", aPortfolio, "bc-black");
    isInViewport(contactSection, aContact, "bc-green", aAbout, "bc-black");

});

aPortfolio.addEventListener("click", function(){
    portfolioSection.getBoundingClientRect().top = 90;
});

//modal
var imageToShowModal = document.getElementsByClassName("image-to-show-modal");
var modalContainer = document.getElementById("modal-container");
var modalImage = document.getElementById("image-modal");
var modalDescr = document.getElementById("proyect-description");

for (var i = 0; i < imageToShowModal.length; i++) {
    imageToShowModal[i].addEventListener("click", function(event){
        modalContainer.style.display = "block";
        modalContainer.style.opacity = 1;
        modalImage.src = event.currentTarget.nextElementSibling .src;
    });
}

document.getElementById("close").addEventListener("click", function(){
    modalContainer.style.display = "none";
});
document.getElementById("btn-close").addEventListener("click", function(){
    modalContainer.style.display = "none";
});

var inpTextarea = document.getElementsByClassName("form-control");
for(var i = 0; i< inpTextarea.length; i++){
    inpTextarea[i].addEventListener("keyup", function(event){
        (event.target.value != "")? event.target.previousElementSibling.classList.add("active"):
        event.target.previousElementSibling.classList.remove("active");
    })
}

function validateOnlyLetters(){
    var keyCode = event.keyCode;
    (keyCode >= 97 && keyCode <= 122 || keyCode >= 65 && keyCode <= 90 || keyCode == 39 || keyCode == 32 || keyCode == 13)? 
        (event, event.target.nextElementSibling.innerText = ""):(event.preventDefault(), event.target.nextElementSibling.innerText = "*only enter letters*");
}

function validateOnlyNumber(){
    console.log(event.keyCode);
    (event.keyCode >= 48 && event.keyCode <= 57)? (event, event.target.nextElementSibling.innerText = ""):(event.preventDefault(), event.target.nextElementSibling.innerText = "*only enter number*");
}

function validateEmail(email){
    var expEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    event.target.nextElementSibling.innerText = (expEmail.test(email))? "": "*Not a valid email address*";
}
function validatePhone(phone){
    console.log(phone);
    var regCellPhone = /^[9]\d{7}$/;
    event.target.nextElementSibling.innerText = (regCellPhone.test(phone))? "": "*Not a valid phone*";
}

var inpname  = document.getElementById("name");
var inpPhone = document.getElementById("phone");
var inpEmail = document.getElementById("email");
var textMessage = document.getElementById("message");
inpname.addEventListener("keypress", validateOnlyLetters);
inpPhone.addEventListener("keypress", function(){
    validateOnlyNumber();
    validatePhone(inpPhone.value);
});
inpEmail.addEventListener("keypress", function(){
    validateEmail(inpEmail.value);
});
textMessage.addEventListener("keypress", validateOnlyLetters);

document.getElementById("btn-send").addEventListener("click", function(e){
    /*e.preventDefault();*/
    var error = document.getElementsByName("span-error");
    console.log(inpPhone.value.length);
    if(inpname.value == "" || inpPhone.value == ""|| inpEmail.value == "" || textMessage.value == ""){
        error.forEach(function(elem){
            if(elem.previousElementSibling.value == ""){
                elem.innerHTML = elem.previousElementSibling.getAttribute("validation-message");
            }
        })  
    }
})