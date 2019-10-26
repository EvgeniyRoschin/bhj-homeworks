let dropdownButton = document.getElementsByClassName("dropdown__value");
let dropdownList = document.getElementsByClassName("dropdown__list");
let dropdownItems = document.getElementsByClassName("dropdown__item");

function dropMenuOpen() {
    dropdownList[0].className = "dropdown__list dropdown__list_active";
    return false;
}

dropdownButton[0].addEventListener("click", dropMenuOpen);

function replaceButtonName() {
    dropdownButton[0].textContent = this.textContent;
    dropdownList[0].className = "dropdown__list";
    return false;
};

for (const itms of dropdownItems) {
    itms.onclick = replaceButtonName;
}
