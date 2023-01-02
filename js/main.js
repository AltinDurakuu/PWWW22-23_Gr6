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
