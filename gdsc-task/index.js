const navBar = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > navBar.offsetHeight) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
})