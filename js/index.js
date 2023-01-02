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

function showSlide(n) {
  // Remove the active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('hero-banner-slider--active'));
  dots.forEach(dot => dot.classList.remove('hero-slider-dots__active'));
  currentSlideIndex = n;
  // Add the active class to the specified slide and dot
  slides[n].classList.add('hero-banner-slider--active');
  dots[n].classList.add('hero-slider-dots__active');
  clearInterval(interval);
  interval = setInterval(changeSlide, 5000);
}
// Set the interval for the automatic slideshow/dots
let interval = setInterval(changeSlide, 5000);
function changeSlide(){
  // Remove the "active" class from the current slide/dot
  slides[currentSlideIndex].classList.remove('hero-banner-slider--active');
  dots[currentSlideIndex].classList.remove('hero-slider-dots__active');

  // Increment the current slide/dot index, or reset to 0 if we've reached the end
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Add the "active" class to the next slide
  slides[currentSlideIndex].classList.add('hero-banner-slider--active');
  dots[currentSlideIndex].classList.add('hero-slider-dots__active');
}

window.onload = function () {
  const button = document.querySelector('#show-search-btn');
  const input = document.querySelector('#search-btn');

  const stringToSearch = document.documentElement.innerHTML;

  button.addEventListener('click', () => {
    const searchTerm = input.value;

    const regex = new RegExp(searchTerm, 'g');

    const match = regex.test(stringToSearch);

    if(match){
      alert("String found");
    }
    else{
      alert("String not found");
    }
  });
}