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