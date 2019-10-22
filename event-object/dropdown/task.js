let dropdownButton = document.getElementsByClassName("dropdown__value");
let dropdownList = document.getElementsByClassName("dropdown__list");
let dropdownItems = document.getElementsByClassName("dropdown__link");

function dropMenuOpen() {
    dropdownList[0].className = "dropdown__list dropdown__list_active";
}

// function dropMenuClose() {
//     dropdownList[0].className = "dropdown__list";
// }

dropdownButton[0].addEventListener("click", dropMenuOpen);

dropdownItems[0].addEventListener("click", function() {
    dropdownButton[0].textContent = "JavaScript";
});

dropdownItems[1].addEventListener("click", function() {
    dropdownButton[0].textContent = "PHP";
});

dropdownItems[2].addEventListener("click", function() {
    dropdownButton[0].textContent = "Python";
});

dropdownItems[3].addEventListener("click", function() {
    dropdownButton[0].textContent = "Fortran";
});

// if (dropdownList[0].className === "dropdown__list dropdown__list_active") {
//     dropdownButton[0].addEventListener("click", dropMenuClose);
// }

