document.addEventListener("DOMContentLoaded", function() {
    const menuBtnBurger=document.querySelector(".ri-menu-line");
    const navItems=document.querySelector(".hamburgerMenu");
   
    menuBtnBurger.addEventListener("click",()=>{
        menuBtnBurger.classList.toggle("active");
        navItems.classList.toggle("active");
    })

    window.addEventListener("scroll",()=>{
        menuBtnBurger.classList.remove("active");
        navItems.classList.remove("active");        
    })

    document.addEventListener("click", function (e) {
        const target = e.target;
        if (!navItems.contains(target) && !menuBtnBurger.contains(target)) {
            menuBtnBurger.classList.remove("active");
            navItems.classList.remove("active"); 
        }
    });

 
});