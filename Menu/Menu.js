const menu = document.getElementsByClassName("menu1");

function action(x) {
    for (let i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "")
    }
    menu[x].className += " active";
}
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", () => action(i));
}