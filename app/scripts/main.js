const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

const slideWidth = slides[0].offsetWidth;

let offset = 0;


//METHODS
//children
//firstElementChild
//lastElementChild
//nextElementSibling
//previousElementSibling
//insertBefore
function btnPoll(btn, time) {
    btn.disabled = true;
    setTimeout(function() {
        btn.disabled = false;
    }, time);
}


//click right, move slides to right
btnNext.addEventListener('click', () => {

    const firstSlide = track.children[0];
    const lastSlide = track.children[track.children.length - 1];

    animaImg(lastSlide, 'right');

    // setTimeout(() => {
    // lastSlide.remove();
    // offset = offset + slideWidth;
    // track.style.transform = 'translateX(' + offset + 'px)';
    // track.children[0].style.transform = 'translateX(' + offset + 'px)';
    // track.children[1].style.transform = 'translateX(' + offset + 'px)';
    // }, 1000);





    setTimeout(() => {
        // offset = 0;
        // track.style.transform = 'translateX(' + offset + 'px)';
        // track.children[0].style.transform = 'translateX(' + offset + 'px)';
        // track.children[1].style.transform = 'translateX(' + offset + 'px)';

        track.insertBefore(lastSlide, firstSlide);

    }, 1000);

    btnPoll(btnNext, 2000);

});

//click left, move slides to left
btnPrev.addEventListener('click', () => {
    const firstSlide = track.children[0];
    const lastSlide = track.children[track.children.length - 1];
    animaImg(firstSlide, 'left');
    window.setTimeout(() => {
        track.appendChild(firstSlide, lastSlide);
    }, 1000)
    btnPoll(btnPrev, 2000);

});

const animaImg = (element, direction) => {

    switch (direction) {
        case 'right':
            element.animate([
                { opacity: 1, transform: 'translateX(0%) scale(1)' },
                { opacity: 0, transform: 'translateX(100%) scale(1.7)' },
                { opacity: 0, transform: 'translateX(-100%) scale(1.7)' },
                { opacity: 1, transform: 'translateX(0%) scale(1)' },
            ], {
                duration: 2000, //milliseconds
                easing: 'ease-in-out', //'linear', a bezier curve, etc.
                delay: 10, //milliseconds
                iterations: 1, //or a number
                direction: 'normal', //'normal', 'reverse', etc.
            })
            break;
        case 'left':
            element.animate([
                { opacity: 1, transform: 'translateX(0%) scale(1)' },
                { opacity: 0, transform: 'translateX(-100%) scale(1.7)' },
                { opacity: 0, transform: 'translateX(100%) scale(1.7)' },
                { opacity: 1, transform: 'translateX(0%) scale(1)' },
            ], {
                duration: 2000, //milliseconds
                easing: 'ease-in-out', //'linear', a bezier curve, etc.
                delay: 10, //milliseconds
                iterations: 1, //or a number
                direction: 'normal', //'normal', 'reverse', etc.
            })
            break;
        default:
            console.log('please set the value direction slide \'left\' or \'right\'');
    }

};

function raf(fn) {
    window.requestAnimationFrame(function() {
        window.requestAnimationFrame(function() {
            fn();
        })
    })
}