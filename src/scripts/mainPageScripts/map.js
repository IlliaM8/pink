export function initMap() {
  var mark = document.querySelector(".map__marker");
  var pos = { lat: 46.30156959231706, lng: 30.653228 };
  var opt = {
    center: pos,
    zoom: 19,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
  };

  map = new google.maps.Map(document.getElementById("map"), opt);

  const marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: "Спавн шизов",
    icon: mark,
  });
}
