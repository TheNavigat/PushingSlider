/*
 * PushingSlider
 * http://unlicrea.com
 * Amjad Mash'al
 * Whatever. Just enjoy.
 */

var currentSlide = 0;
var allSlides = 0;
var sliderChildren = null;
var myTimer = 0;
var nextSlideN = 1;

$.fn.UCSlider = function() {

    sliderChildren = $($(this)[0].children);
    sliderChildren = sliderChildren.children('img');

    allSlides = sliderChildren.length;

    console.log(sliderChildren);

    if(allSlides > 1) {
        sliderChildren[0].style.display = "block";
    }

    clearInterval(myTimer);
    myTimer = setInterval(nextSlide , 5000);
};

function nextSlide() {

    console.log(nextSlideN); console.log(currentSlide);

    sliderChildren[nextSlideN].style.left = "900px";
    sliderChildren[nextSlideN].style.display = "block";
    $(sliderChildren[currentSlide]).animate({left: -900}, 1000);
    $(sliderChildren[nextSlideN]).animate({left: 0}, 1000);

    currentSlide = nextSlideN;

    if(nextSlideN < allSlides - 1) nextSlideN = currentSlide + 1; else nextSlideN = 0;
};

function pauseTimer() {
    clearInterval(myTimer);
}

function continueTimer() {
    clearInterval(myTimer);
    myTimer = setInterval(nextSlide , 5000);
}
