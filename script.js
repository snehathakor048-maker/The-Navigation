const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

/* AUTO CLOSE */
links.forEach(link=>{
link.addEventListener("click", ()=>{
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
});
});
