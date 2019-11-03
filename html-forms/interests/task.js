let mainInterestsGroups = document.querySelectorAll('div > ul > li > label .interest__check');
console.log(mainInterestsGroups);

function checkBoxes() {
    let interestsChilds = this.closest('label').nextElementSibling.querySelectorAll('.interest__check');;
    if (this.checked) {
        for (let i = 0; i < interestsChilds.length; i++) {
            interestsChilds[i].checked = true;
        }
    } else {
        for (let i = 0; i < interestsChilds.length; i++) {
            interestsChilds[i].checked = false;
        }
    }
}

for (let boxes of mainInterestsGroups) {
    boxes.addEventListener('change', checkBoxes)
}