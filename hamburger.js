document.addEventListener("DOMContentLoaded", function() {
    // const hamburger=document.querySelector(".ri-menu-line");
    const menuBtnBurger=document.querySelector(".ri-menu-line");
    const navItems=document.querySelector(".hamburgerMenu");
   
    menuBtnBurger.addEventListener("click",()=>{
        menuBtnBurger.classList.toggle("active");
        navItems.classList.toggle("active");
    })
 
});