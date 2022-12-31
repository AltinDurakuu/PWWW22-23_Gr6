  function initMap() {
    let ourLocation = {
        lat: 42.661911567240736,
        lng: 21.162545989865308
    }
  let map = new google.maps.Map(document.getElementById('map'),{
    center: ourLocation,
    zoom: 20
  });
}
// Get the slider container/dots container and slides/dots
const sliderContainer = document.querySelector('.hero-banner-slider-container');
const dotsContainer = document.querySelector('.hero-slider-dots');
const slides = Array.from(sliderContainer.querySelectorAll('.hero-banner-slider'));
const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

// Set the current slide/dot index to 0
let currentSlideIndex = 0;

// Add the "active" class to the first slide/dot
slides[currentSlideIndex].classList.add('hero-banner-slider--active');
dots[currentSlideIndex].classList.add('hero-slider-dots__active');

// Set the interval for the automatic slideshow/dots
const interval = setInterval(() => {
  // Remove the "active" class from the current slide/dot
  slides[currentSlideIndex].classList.remove('hero-banner-slider--active');
  dots[currentSlideIndex].classList.remove('hero-slider-dots__active');

  // Increment the current slide/dot index, or reset to 0 if we've reached the end
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Add the "active" class to the next slide
  slides[currentSlideIndex].classList.add('hero-banner-slider--active');
  dots[currentSlideIndex].classList.add('hero-slider-dots__active');
}, 3000);


// Testimonials slider

const tSliderContainer = document.querySelector('.tst-main-container');
const tSlides = Array.from(tSliderContainer.querySelectorAll('.tst-main'));

let tCurrentSlideIndex = 0;

tSlides[tCurrentSlideIndex].classList.add('tst-main--active');

const tInterval = setInterval(() => {
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');
  
  tCurrentSlideIndex = (tCurrentSlideIndex + 1) % tSlides.length;

  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');

},1000)


document.getElementById("tst-move-forward").addEventListener("click",tMoveForward);
document.getElementById("tst-move-backwards").addEventListener("click",tMoveBackwards);

function tMoveForward(){
  tCurrentSlideIndex = tCurrentSlideIndex + 1;
}

function tMoveBackwards(){
  tCurrentSlideIndex = tCurrentSlideIndex - 1;
}


