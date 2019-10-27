let fontSizeButtons = Array.from(document.getElementsByClassName("font-size"));
let book = document.getElementById('book');

function deActivateButtons() {
    for (const btn of fontSizeButtons) {
        btn.classList.remove('font-size_active');
    }
    book.className = 'book';
}

fontSizeButtons[0].addEventListener('click', function() {
    deActivateButtons();
    fontSizeButtons[0].classList.add('font-size_active');
    book.classList.add('book_fs-small');
    return false;
});

fontSizeButtons[1].addEventListener('click', function() {
    deActivateButtons();
    fontSizeButtons[1].classList.add('font-size_active');
    book.className = 'book';
    return false;
});

fontSizeButtons[2].addEventListener('click', function() {
    deActivateButtons();
    fontSizeButtons[2].classList.add('font-size_active');
    book.classList.add('book_fs-big');
    return false;
});