window.onload = function () {
  const form = document.querySelector("#search-form");
  const input = document.querySelector("#search-btn");

  const stringToSearch = document.querySelector("main").innerHTML;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = input.value;

    const regex = new RegExp(searchTerm, 'g');

    const match = regex.test(stringToSearch);

    if (match){
      alert("Found");
    }
    else{
      alert("Not found");
    }
  })
}
  
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
// Testimonials slider

const tSliderContainer = document.querySelector('.tst-main-container');
const tSlides = Array.from(tSliderContainer.querySelectorAll('.tst-main'));

let tCurrentSlideIndex = 0;

tSlides[tCurrentSlideIndex].classList.add('tst-main--active');

const tInterval = setInterval(() => {
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');
  
  tCurrentSlideIndex = (tCurrentSlideIndex + 1) % tSlides.length;

  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');

},20000)


document.getElementById("tst-move-forward").addEventListener("click",tMoveForward);
document.getElementById("tst-move-backwards").addEventListener("click",tMoveBackwards);

function tMoveForward(){
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');
  tCurrentSlideIndex = (tCurrentSlideIndex + 1) % tSlides.length; 
  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');
}

function tMoveBackwards(){
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');
  if(tCurrentSlideIndex==0){
    tCurrentSlideIndex=tSlides.length-1;
  }
  else{
    tCurrentSlideIndex = (tCurrentSlideIndex - 1) % tSlides.length;
  }
  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');
}