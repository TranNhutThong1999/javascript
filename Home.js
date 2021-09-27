let currentSlide = 0;

const images = document.getElementsByClassName("slide-item");
const buttons = document.getElementsByClassName("slide-button");

images[0].style.left = 0;
//next slide
function nextSlide() {
    let nextNumber = currentSlide + 1;
    if (currentSlide >= images.length - 1) nextNumber = 0;

    //  images[nextNumber].style.left = "100%";
    //  images[currentSlide].style.left = 0;

    images[nextNumber].className = "slide-item slideIn-right ";
    images[currentSlide].className = "slide-item slideOut-Left";

    buttons[currentSlide].className = "slide-button";
    buttons[nextNumber].className = "slide-button run";
    currentSlide = nextNumber;
}
document.getElementById("slide-next").addEventListener("click", nextSlide);

// prev slide
function prevSlide() {
    let prevNumber = currentSlide - 1;
    if (currentSlide === 0) prevNumber = images.length - 1;

    images[prevNumber].style.left = "-100%";
    images[currentSlide].style.left = 0;

    images[prevNumber].className = "slide-item slideIn-left ";
    images[currentSlide].className = "slide-item slideOut-right";

    buttons[currentSlide].className = "slide-button";
    buttons[prevNumber].className = "slide-button run";
    currentSlide = prevNumber;
}
document.getElementById("slide-prev").addEventListener("click", prevSlide);

//button slide
function button(number) {
    if (currentSlide === number) return;

    if (currentSlide < number) {
        // images[number].style.left = "100%";
        // images[currentSlide].style.left = 0;

        images[number].className = "slide-item slideIn-right ";
        images[currentSlide].className = "slide-item slideOut-Left";

        buttons[currentSlide].className = "slide-button";
        buttons[number].className = "slide-button run";
    } else {
        images[number].style.left = "-100%";
        images[currentSlide].style.left = 0;

        images[number].className = "slide-item slideIn-left ";
        images[currentSlide].className = "slide-item slideOut-right";

        buttons[currentSlide].className = "slide-button";
        buttons[number].className = "slide-button run";
    }
    currentSlide = number;
}
const button_slide = document.getElementsByClassName("slide-button");
for (let i = 0; i < button_slide.length; i++) {
    button_slide[i].addEventListener("click", () => button(i));
}

//scroll
window.addEventListener("scroll", function() {
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
})

function defaultMenu() {
    const menu = document.getElementsByClassName("menu1");
    for (let i = 0; i < menu.length; i++) {
        menu[i].className = menu[i].className.replace(" active", "");
    }
}

function randomInteger(min, max) {
    alert(Math.floor(Math.random() * (max - min + 1)) + min)
}