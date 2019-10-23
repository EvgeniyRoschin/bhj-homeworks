let imagesArr = Array.from(document.getElementsByClassName("slider__item"));
let dotsArr = Array.from(document.getElementsByClassName("slider__dot"));
let arrowNext = document.getElementsByClassName('slider__arrow_next');
let arrowPrev = document.getElementsByClassName('slider__arrow_prev');
let activeImage = 0;

function deactivateElements() {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
}

function activateElements() {
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

function nextImage() {
    if (activeImage < imagesArr.length - 1) {
        deactivateElements();
        activeImage = activeImage + 1;
        activateElements();
    } else {
        deactivateElements();
        activeImage = 0;
        activateElements();
    }
}

function prevImage() {
    if (activeImage > 0) {
        deactivateElements();
        activeImage = activeImage - 1;
        activateElements();
    } else {
        deactivateElements();
        activeImage = imagesArr.length - 1;
        activateElements();
    }
}

arrowNext[0].onclick = nextImage;
arrowPrev[0].onclick = prevImage;

//понимаю что код ниже нужно оптимизировать, но не пойму как

function dotAction0 () {
    deactivateElements();
    activeImage = 0;
    activateElements();
}

dotsArr[0].onclick = dotAction0;

function dotAction1 () {
    deactivateElements();
    activeImage = 1;
    activateElements();
}

dotsArr[1].onclick = dotAction1;

function dotAction2 () {
    deactivateElements();
    activeImage = 2;
    activateElements();
}

dotsArr[2].onclick = dotAction2;

function dotAction3 () {
    deactivateElements();
    activeImage = 3;
    activateElements();
}

dotsArr[3].onclick = dotAction3;

function dotAction4 () {
    deactivateElements();
    activeImage = 4;
    activateElements();
}

dotsArr[4].onclick = dotAction4;