const showNavButton = document.querySelector('.nav__button-main');
const nav = document.querySelector('.navigation__nav');

showNavButton.addEventListener('click', () => {
    nav.classList.toggle('show__nav')
    document.querySelector('.nav__button--1').classList.toggle('rotate-positive')
    document.querySelector('.nav__button--2').classList.toggle('hide')
    document.querySelector('.nav__button--3').classList.toggle('rotate-negative')
})

const slides = document.querySelector('.carousel');
const btns = document.querySelector('.btn');
const currentSlide = 1;


let manualNav = function(manual) {
    slides.forEach((carousel) => {
        carousel.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

    let repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    let repeater = () => {
        setTimeout(function() {

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i) {
                i = 0;
            }
            if(i >= slides.length) {
                return;
            }
            repeater();
        }, 1000);
    }
    repeater ();
}

repeat();

let faq =document.getElementsByClassName (".faq-page");
let i;
for (i=0; i < faq.length; i++);
faq[i].addEventListener("click", function () {
    this.classlist.toggle("active");
let body = this.nextElementSibling;
if (body.style.display === "block") {
    body.style.display ="none";
    
} else {
    body.style.display ="block";
}
});
