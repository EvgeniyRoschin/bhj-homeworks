let clickerCounter = document.getElementById('clicker__counter');
let image = document.getElementById('cookie');

image.onclick = function() {
    clickerCounter.textContent = +clickerCounter.textContent + 1;

    if (clickerCounter.textContent % 2 == 1) {
        image.width = 230;
    } else {
        image.width = 200;
    }
}
