let currentSlide = 0;

const slideImages = document.getElementsByClassName("slide-item");
const slideButtons = document.getElementsByClassName("slide-button");

slideImages[0].style.left = 0;
//next slide
function nextSlide() {
    let nextNumber = currentSlide + 1;
    if (currentSlide >= slideImages.length - 1) nextNumber = 0;

    slideImages[nextNumber].className = "slide-item slideIn-right ";
    slideImages[currentSlide].className = "slide-item slideOut-Left";

    slideButtons[currentSlide].className = "slide-button";
    slideButtons[nextNumber].className = "slide-button run";
    currentSlide = nextNumber;
}


// prev slide
function prevSlide() {
    let prevNumber = currentSlide - 1;
    if (currentSlide === 0) prevNumber = slideImages.length - 1;

    slideImages[prevNumber].style.left = "-100%";
    slideImages[currentSlide].style.left = 0;

    slideImages[prevNumber].className = "slide-item slideIn-left ";
    slideImages[currentSlide].className = "slide-item slideOut-right";

    slideButtons[currentSlide].className = "slide-button";
    slideButtons[prevNumber].className = "slide-button run";
    currentSlide = prevNumber;
}


//button slide
function clickButton(number) {
    if (currentSlide === number) return;

    if (currentSlide < number) {
        // slideImages[number].style.left = "100%";
        // slideImages[currentSlide].style.left = 0;

        slideImages[number].className = "slide-item slideIn-right ";
        slideImages[currentSlide].className = "slide-item slideOut-Left";

        slideButtons[currentSlide].className = "slide-button";
        slideButtons[number].className = "slide-button run";
    } else {
        slideImages[number].style.left = "-100%";
        slideImages[currentSlide].style.left = 0;

        slideImages[number].className = "slide-item slideIn-left ";
        slideImages[currentSlide].className = "slide-item slideOut-right";

        slideButtons[currentSlide].className = "slide-button";
        slideButtons[number].className = "slide-button run";
    }
    currentSlide = number;
};
let handleEventClickSlideButton = function() {
    document.getElementById("slide-next").addEventListener("click", nextSlide);
    document.getElementById("slide-prev").addEventListener("click", prevSlide);

    for (let i = 0; i < slideButtons.length; i++) {
        slideButtons[i].addEventListener("click", () => clickButton(i))
    }
}

//scroll
let ScrollHighlightMenu = function() {
    const block_list = document.getElementsByClassName("common");
    const menu = this.document.getElementsByClassName("menu1");
    for (let i = 0; i < block_list.length; i++) {
        if (i === 0) {
            if ((this.scrollY + 10) < block_list[i + 1].offsetTop) {
                defaultMenu();
                menu[i].className += " active";
                break;
            }
        }
        if (i === block_list.length - 1) {
            if ((this.scrollY + 10) >= (block_list[i].offsetTop)) {
                defaultMenu();
                menu[i].className += " active";
                break;
            }
        }
        if ((this.scrollY + 10) >= block_list[i].offsetTop && (this.scrollY + 10) < block_list[i + 1].offsetTop) {
            defaultMenu();
            menu[i].className += " active";
            break;
        }
    }
}

function defaultMenu() {
    const menu = document.getElementsByClassName("menu1");
    for (let i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "");
    }
}

let handleEventScrollMeunu = function() {
    window.addEventListener("scroll", ScrollHighlightMenu)
}

let main = function() {
    handleEventClickSlideButton();
    handleEventScrollMeunu();
}
main();