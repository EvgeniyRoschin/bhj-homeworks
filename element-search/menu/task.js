let menuLinks = document.getElementsByClassName('menu__link');
let subMenu = document.getElementsByClassName('menu_sub');

function openSubmenu1() {
    subMenu[0].className = "menu menu_sub menu_active";
}

function openSubmenu2() {
    subMenu[1].className = "menu menu_sub menu_active";
}

menuLinks[1].onclick = openSubmenu1;
menuLinks[5].onclick = openSubmenu2;