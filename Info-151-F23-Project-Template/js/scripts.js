
/* =============
    Nav
============= */
var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container")

var seeNav = false;

function showNav(){
    console.log("button clicked")
    if(seeNav === false){
        mainNav.classList.add("showMainNav");
        seeNav= true;
    }
    else{
        mainNav.classList.remove("showMainNav");
        seeNav = false;
    }
    mainNav.classList.add("showMainNav");
}


burgerBtn.addEventListener("click",showNav);


/* =============
    Sign In
============= */

var signUpBtn = document.querySelector("#sign-up-btn")
var signUpContainer =  document.querySelector("#signUp")

function showSignUpModal(){
    signUpContainer.classList.add("show-sign-up-container");
}


signUpBtn.addEventListener("click",showSignUpModal);
