// let menuLinks = document.getElementsByClassName('menu__link');
// let subMenu = document.getElementsByClassName('menu_sub');
let mainMenuItems = document.querySelectorAll("ul.menu_main>li");

function openSubmenu() {
    let subMenuElement = document.getElementsByClassName("menu menu_sub");

    if (subMenuElement) {
        if (subMenuElement[0].className == "menu menu_sub menu_active") {
            subMenuElement[0].className = "menu menu_sub";
            return false;
        }

        if (subMenuElement[0].className == "menu menu_sub") {
            subMenuElement[0].className = "menu menu_sub menu_active";
            return false;
        }
    }
}

mainMenuItems[1].onclick = openSubmenu;
mainMenuItems[2].onclick = openSubmenu;

// function openSubmenu1() {
//     subMenu[0].className = "menu menu_sub menu_active";
//     return false;
// }

// function openSubmenu2() {
//     subMenu[1].className = "menu menu_sub menu_active";
//     return false;
// }

// menuLinks[1].onclick = openSubmenu1;
// menuLinks[5].onclick = openSubmenu2;