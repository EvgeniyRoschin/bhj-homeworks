let tabs = document.getElementsByClassName("tab");
let tabContent = document.getElementsByClassName("tab__content");

tabs[0].addEventListener('click', function() {
    tabs[0].className = "tab tab_active";
    tabContent[0].className = "tab__content tab__content_active";
    tabs[1].className = "tab";
    tabContent[1].className = "tab__content";
    tabs[2].className = "tab";
    tabContent[2].className = "tab__content";
});

tabs[1].addEventListener('click', function() {
    tabs[1].className = "tab tab_active";
    tabContent[1].className = "tab__content tab__content_active";
    tabs[0].className = "tab";
    tabContent[0].className = "tab__content";
    tabs[2].className = "tab";
    tabContent[2].className = "tab__content";
});

tabs[2].addEventListener('click', function() {
    tabs[2].className = "tab tab_active";
    tabContent[2].className = "tab__content tab__content_active";
    tabs[1].className = "tab";
    tabContent[1].className = "tab__content";
    tabs[0].className = "tab";
    tabContent[0].className = "tab__content";
});