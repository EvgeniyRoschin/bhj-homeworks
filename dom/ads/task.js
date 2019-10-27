let adsBlocks = Array.from(document.getElementsByClassName("rotator__case"));

function changeAds() {
    for (let i = 0; i < adsBlocks.length; i++) {
        if (adsBlocks[i].classList.contains('rotator__case_active')) {
            adsBlocks[i].classList.remove('rotator__case_active');
            if (i + 1 == adsBlocks.length) {
                i = 0;
                adsBlocks[i].classList.add('rotator__case_active');
                adsBlocks[i].style.color = adsBlocks[i].dataset.color;
                interval = adsBlocks[i].dataset.speed;
            } else {
                adsBlocks[i + 1].classList.add('rotator__case_active');
                adsBlocks[i + 1].style.color = adsBlocks[i + 1].dataset.color;
                interval = adsBlocks[i + 1].dataset.speed;
            }
            break;
        }
    }
    return interval;
}

let changer = setInterval(changeAds, changeAds());