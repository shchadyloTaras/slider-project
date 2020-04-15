
// const t0 = performance.now();

const track = document.querySelector('.track');
const slides = Array.from(track.children);

const images = document.querySelectorAll('.img');
const img = document.querySelector('.img');
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');



//arrange the slides next to one enather
// for (let i = 0; i < slides.length; ++i) {
//     slides[i].style.position = 'absolute';
//     slides[i].style.width = '160px';
//     slides[i].style.height = '160px';
//   }
// const slideWidth = slides[0].getBoundingClientRect().width;
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// }
// slides.forEach(setSlidePosition);

let i = 0;




// function moveLastToFirstElementInArray(this_array) {
//     let new_array = new Array();
//     new_array[0] = this_array[this_array.length - 1]; //first element is last element    
//     for (let i = 1; i < this_array.length; i++) { //subsequent elements start at 1
//         new_array[i] = this_array[i - 1];
//     }
//     return new_array;
// }

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.children.style.transform = 'translateX(' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//click left, move slides to left
btnPrev.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    //move to the next slide
    moveToSlide(track, currentSlide, prevSlide)
});


btnNext.addEventListener('click', () => {  
    //children

    //firstElementChild
    //lastElementChild

    //nextElementSibling
    //previousElementSibling
   
    //insertBefore
    // console.log(track.children);
    
    let firstSlide = track.firstElementChild;
    let lastSlide = track.lastElementChild;

    console.log(lastSlide);
    

    //move to the next slide
    // animaImg(lastSlide);

    // setTimeout(() => {
    //     slides[i].classList.remove('current-slide');
    //     i++;
    //     if (i >= slides.length) {
    //         i = 0;
    //     }
    //     const amountToMove = slides[i].style.left;
    //     slides[0].style.transform = 'translateX(' + amountToMove + ')';
    //     slides[1].style.transform = 'translateX(' + amountToMove + ')';
    //     slides[i].classList.add('current-slide');
    // }, 500)
 
    // setTimeout(() => {
    //     track.lastElementChild.remove()

    // }, 500)

    
    track.prepend(lastSlide);
});



//1)make function loop 

// const animaImg = (element) => {
//     element.animate([
//         { opacity: 1, transform: 'translateX(0%) scale(1.1)' },
//         { opacity: 0, transform: 'translateX(100%) scale(1.5)' },
//         { opacity: 0, transform: 'translateX(-100%) scale(1.5)' },
//         { opacity: 1, transform: 'translateX(0%) scale(1.1)' },
//     ], {
//         duration: 2000, //milliseconds
//         easing: 'ease-in-out', //'linear', a bezier curve, etc.
//         delay: 10, //milliseconds
//         iterations: 1, //or a number
//         direction: 'normal', //'normal', 'reverse', etc.
//     })
// }

// const t1 = performance.now();
// console.log(t1 - t0, 'milliseconds');
