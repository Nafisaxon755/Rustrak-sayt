const btn = document.getElementById("catalogBtn");
const menu = document.getElementById("catalogMenu");
const icon = document.getElementById("burgerIcon");

let isOpen = false;

btn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        menu.classList.add("show");
        menu.classList.remove("hidden");
        icon.src = "/assets/images/nav_x_icon.svg";
    } else {
        menu.classList.remove("show");
        menu.classList.add("hidden");
        icon.src = "/assets/images/icon_normal_burger.svg";
    }
}); 