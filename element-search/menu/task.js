let mainMenuItems = document.querySelectorAll("ul.menu_main>li");
let subMenuOpenFlag = 0;

function openSubmenu() {
    let subMenuElement = this.getElementsByClassName("menu menu_sub");

    if (subMenuElement) {
        if (subMenuElement[0].className == "menu menu_sub menu_active") {
            subMenuElement[0].className = "menu menu_sub";
            subMenuOpenFlag = 0;
            return false;
        }

        if (subMenuElement[0].className == "menu menu_sub") {
            if (subMenuOpenFlag != 0) {
                subMenuOpenFlag.className = "menu menu_sub";
            }
            subMenuElement[0].className = "menu menu_sub menu_active";
            subMenuOpenFlag = subMenuElement[0];
            return false;
        }
    }
}

for (const itms of mainMenuItems) {
    itms.onclick = openSubmenu;
}
