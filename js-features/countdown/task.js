let timer = document.getElementById("timer");

const timeRegress = function() {
    timer.textContent -= 1;

    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!')
    }
}

setInterval(timeRegress, 1000);