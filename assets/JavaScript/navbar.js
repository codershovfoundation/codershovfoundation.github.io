function sidebarShow(){
    
    const pageBody = document.getElementById("page-body");
    const menuIcon = document.getElementById("menu-icon");
    const menuIconHamBurger = document.getElementById("menu-icon-hamburger");
    const sidebar = document.getElementById("side-nav");
    
    menuIcon.setAttribute("onclick", "sidebarClose()");
    menuIconHamBurger.classList.add("hover");
    
    sidebar.style.width = "45%";
    pageBody.style.opacity = "0.1";
    
}

function sidebarClose(){
    
    const pageBody = document.getElementById("page-body");
    const menuIcon = document.getElementById("menu-icon");
    const menuIconHamBurger = document.getElementById("menu-icon-hamburger");
    const sidebar = document.getElementById("side-nav");
    
    menuIcon.setAttribute("onclick", "sidebarShow()");
    menuIconHamBurger.classList.remove("hover");
    
    sidebar.style.width = "0";
    pageBody.style.opacity = "1";
    
}