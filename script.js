let navButton= document.querySelector(".navbar-toggler");
let navbar=document.querySelector("#barraLateralMobile");
let body=document.querySelector("body");

navButton.addEventListener("click", ()=>{
    console.log(navbar);
    navbar.classList.toggle("displayNav");
    navbar.classList.remove("flex-column","flex-shrink-0", "p-3", "text-white")
    body.classList.toggle("fijo");
})