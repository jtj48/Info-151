

var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container")




function showNav(){
    console.log("button clicked")
    mainNav.classList.add("showMainNav");
}


burgerBtn.addEventListener("click",showNav);




