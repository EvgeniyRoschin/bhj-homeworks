let imagesArr = Array.from(document.getElementsByClassName("slider__item"));
let dotsArr = Array.from(document.getElementsByClassName("slider__dot"));
let arrowNext = document.getElementsByClassName('slider__arrow_next');
let arrowPrev = document.getElementsByClassName('slider__arrow_prev');
let activeImage = 0;

function nextImage() {
    if (activeImage < imagesArr.length - 1) {
        imagesArr[activeImage].className = "slider__item";
        dotsArr[activeImage].className = "slider__dot";
        activeImage = activeImage + 1;
        imagesArr[activeImage].className = "slider__item slider__item_active";
        dotsArr[activeImage].className = "slider__dot slider__dot_active";
    } else {
        imagesArr[activeImage].className = "slider__item";
        dotsArr[activeImage].className = "slider__dot";
        activeImage = 0;
        imagesArr[activeImage].className = "slider__item slider__item_active";
        dotsArr[activeImage].className = "slider__dot slider__dot_active";
    }
}

function prevImage() {
    if (activeImage > 0) {
        imagesArr[activeImage].className = "slider__item";
        dotsArr[activeImage].className = "slider__dot";
        activeImage = activeImage - 1;
        imagesArr[activeImage].className = "slider__item slider__item_active";
        dotsArr[activeImage].className = "slider__dot slider__dot_active";
    } else {
        imagesArr[activeImage].className = "slider__item";
        dotsArr[activeImage].className = "slider__dot";
        activeImage = imagesArr.length - 1;
        imagesArr[activeImage].className = "slider__item slider__item_active";
        dotsArr[activeImage].className = "slider__dot slider__dot_active";
    }
}

arrowNext[0].onclick = nextImage;
arrowPrev[0].onclick = prevImage;

//понимаю что код ниже нужно оптимизировать, но не пойму как

function dotAction0 () {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
    activeImage = 0;
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

dotsArr[0].onclick = dotAction0;

function dotAction1 () {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
    activeImage = 1;
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

dotsArr[1].onclick = dotAction1;

function dotAction2 () {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
    activeImage = 2;
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

dotsArr[2].onclick = dotAction2;

function dotAction3 () {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
    activeImage = 3;
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

dotsArr[3].onclick = dotAction3;

function dotAction4 () {
    imagesArr[activeImage].className = "slider__item";
    dotsArr[activeImage].className = "slider__dot";
    activeImage = 4;
    imagesArr[activeImage].className = "slider__item slider__item_active";
    dotsArr[activeImage].className = "slider__dot slider__dot_active";
}

dotsArr[4].onclick = dotAction4;