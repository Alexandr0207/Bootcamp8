'use strict';
let coords = {
  lat: null,
  lon: null,
}

function geolocation() {
  const onSuccess = position => {
    const {
      latitude,
      longitude
    } = position.coords;
    let api = `https://api.darksky.net/forecast/67ed82250de42adef4a321e244184a0b/${latitude},${longitude}`;
    coords.lat = latitude;
    coords.lon = longitude;
    fetch(api)
    .then(res => res.json())
    .then(data => console.log(data))
  };
  // const onError = error =>
  //   alert.error('Ошибка при определении положения: ', error);

  navigator.geolocation.getCurrentPosition(onSuccess);
}
console.log(coords);


let btn = document.querySelector('[type="submit"]');
btn.addEventListener('click', geolocation);