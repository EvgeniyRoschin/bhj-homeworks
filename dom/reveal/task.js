let revealBlocks = document.getElementsByClassName('reveal');

function appearanceBlock() {
    let viewportHeight = window.innerHeight;
    let blockTop = this.getBoundingClientRect().top;

    if (blockTop < viewportHeight) {
        this.classList.add('reveal_active');
    }
}

for (const block of revealBlocks) {
    block.addEventListener('scroll', appearanceBlock);
}