let modalMain = document.getElementById('modal_main');
modalMain.className = "modal modal_active";

let closeElements = document.getElementsByClassName('modal__close');

function closeModalMain() {
    modalMain.className = "modal";
}

closeElements[0].onclick = closeModalMain;

let modalSuccess = document.getElementById('modal_success');
let btnSuccess = document.getElementsByClassName('btn');

function showSuccess() {
    modalMain.className = "modal";
    modalSuccess.className = "modal modal_active";
}

btnSuccess[0].onclick = showSuccess;

function closeModalSuccess() {
    modalSuccess.className = "modal";
}

closeElements[2].onclick = closeModalSuccess;
btnSuccess[1].onclick = closeModalSuccess;
