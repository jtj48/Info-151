

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



var signInBtn = document.querySelector("#sign-up-btn")
var signInContainer =  document.querySelector("#signUp")

function showSignInModal(){
    signInContainer.classList.add("show-sign-in-container");
}


signInBtn.addEventListener("click",showSignInModal);
