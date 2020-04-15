/*
1) add CSS style to IMAGE and remove old css Style from CSS
2) Style we will ADD with JS

*/


function SliderBuilder(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.next = document.querySelector(obj.next);
    this.prev = document.querySelector(obj.prev);
    // this.moveLastItems = document.querySelector(obj.moveLastItems);
    this.activeNext = obj.activeNext || false;
    this.activePrev = obj.activePrev || false;
    this.rate = obj.rate || 1000;
    this.auto = obj.auto;
    this.stopDurationTime = obj.stopDurationTime || 3000;

    


    let i = 0;
    let slider = this;
    let timeout;


    const eventsSlider = {

        clearTime: () => {
            clearInterval(timeout);
            timeout = setTimeout(function () {
                btnNextAuto()
            }, slider.stopDurationTime);
        },

        imgEventNext: () => {
            slider.images[i].classList.remove(slider.activeNext);
            i++;
            if (i >= slider.images.length) {
                i = 0;
            }
            slider.images[i].classList.add(slider.activeNext);
            // let moveItams = moveLastItems.length - 1;
            // moveItams.classList.add(slider.)
        },

        imgEventPrev: () => {
            slider.images[i].classList.remove(slider.activePrev);
            i--;
            if (i < 0) {
                i = slider.images.length - 1;
            }
            slider.images[i].classList.add(slider.activePrev);
        },
    };


    const btnNextAuto = () => {
        if (slider.auto === true) {
            timeout = setInterval(() => {
                eventsSlider.imgEventNext();
            }, slider.rate);
        }
    };
    btnNextAuto();

    const btnNext = () => {
        slider.next.addEventListener('click', () => {
            eventsSlider.imgEventNext();
            eventsSlider.clearTime();
        });
    };
    btnNext();

    const btnPrev = () => {
        slider.prev.addEventListener('click', () => {
            eventsSlider.imgEventPrev();
            eventsSlider.clearTime();
        });
    };
    btnPrev();

    return slider;
}




const slider = new SliderBuilder({
    images: '.img',
    prev: '#prev',
    next: '#next',
    activeNext: 'active-next',
    activePrev: 'active-prev',
    auto: false,
    rate: 1000,
    stopDurationTime: 5000
});
