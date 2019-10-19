let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

let hole;

function getHole( index ) {
    hole = document.getElementById(`hole${index}`);
    return hole;
}

function game() {
    if ( hole.classList.contains( 'hole_has-mole' ) ) {
        dead.textContent = + dead.textContent + 1;
    } else {
        lost.textContent = + lost.textContent + 1;
    }

    function resetCounters() {
        dead.textContent = 0;
        lost.textContent = 0;
    }

    if ( dead.textContent == 10 ) {
        alert('Вы победили!');
        resetCounters();
    }

    if ( lost.textContent == 5 ) {
        alert('Вы проиграли!');
        resetCounters();
    }
}

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = game;
}

