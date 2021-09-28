const slideImages = document.getElementsByClassName("slide-item");
const slideButtons = document.getElementsByClassName("slide-button");
let currentSlide = 0;

function nextSlide() {
    let nextNumber = currentSlide + 1;
    if (currentSlide >= slideImages.length - 1) nextNumber = 0;;

    addClassSlideActive(nextNumber, currentSlide, 'slideIn-right', 'slideOut-Left')
    currentSlide = nextNumber;
}


function prevSlide() {
    let prevNumber = currentSlide - 1;
    if (currentSlide === 0) prevNumber = slideImages.length - 1;

    slideImages[prevNumber].style.left = "-100%";
    slideImages[currentSlide].style.left = 0;
    addClassSlideActive(prevNumber, currentSlide, 'slideIn-left', 'slideOut-right')
    currentSlide = prevNumber;
}

function addClassSlideActive(nextNumber, currentSlide, classNameNextnumber, classNameCurrentSlide) {
    slideImages[nextNumber].className = `slide-item  ${classNameNextnumber} `;
    slideImages[currentSlide].className = `slide-item  ${classNameCurrentSlide}`;
    slideButtons[currentSlide].className = "slide-button";
    slideButtons[nextNumber].className = "slide-button run";
}



function clickButton(number) {
    if (currentSlide === number) return;
    if (currentSlide < number) {
        addClassSlideActive(number, currentSlide, 'slideIn-right', 'slideOut-Left')
    } else {
        slideImages[number].style.left = "-100%";
        slideImages[currentSlide].style.left = 0;
        addClassSlideActive(number, currentSlide, 'slideIn-left', 'slideOut-right')
    }
    currentSlide = number;
};

function handleEventClickSlideButton() {
    document.getElementById("slide-next").addEventListener("click", nextSlide);
    document.getElementById("slide-prev").addEventListener("click", prevSlide);

    for (let i = 0; i < slideButtons.length; i++) {
        slideButtons[i].addEventListener("click", () => clickButton(i))
    }
}

function scrollHighlightMenu() {
    const blockList = document.getElementsByClassName("scroll-event-active");
    const menu = this.document.getElementsByClassName("menu");
    for (let i = 0; i < blockList.length; i++) {
        if (i === 0) {
            if ((this.scrollY + 10) < blockList[i + 1].offsetTop) {
                defaultMenu();
                menu[i].className += " active";
                break;
            }
        }
        if (i === blockList.length - 1) {
            if ((this.scrollY) >= (blockList[i].offsetTop - blockList[i - 1].offsetHeight / 2)) {
                defaultMenu();
                menu[i].className += " active";
                break;
            }
        }
        if ((this.scrollY + 10) >= blockList[i].offsetTop && (this.scrollY + 10) < blockList[i + 1].offsetTop) {
            defaultMenu();
            menu[i].className += " active";
            continue;
        }
    }
}

function defaultMenu() {
    const menu = document.getElementsByClassName("menu");
    for (let i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "");
    }
}

function handleEventScrollMeunu() {
    window.addEventListener("scroll", scrollHighlightMenu)
}

function prepareDisplayImageDefaultforSlide() {
    slideImages[0].style.left = 0;
}

function main() {
    prepareDisplayImageDefaultforSlide();
    handleEventClickSlideButton();
    handleEventScrollMeunu();
}
main();