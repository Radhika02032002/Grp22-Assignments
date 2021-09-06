let images = new Map();
images.set("Clear", "./images/clearSky.jpg");
images.set("Haze", "./images/haze/jpg");
images.set("Clouds", "./images/cloudy.jpg");
images.set("Mist", "./images/mist.jpg");
images.set("Fog", "./images/mist.jpg");
images.set("Thunderstorm", "./images/thunderStorm.jpg");
images.set("Rain", "./images/rain.jpg");
images.set("Drizzle", "./images/drizzle.jpg");
images.set("Tornado", "./images/tornado.jpg");
images.set("Snow", "./images/snow.jpg");
images.set("Dust", "./images/dust.jpg");
images.set("Smoke", "./images/Smoke.jpg");
window.onload = function () {
  let city = "Chandigarh";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a8a49eaaca94312cff84c65812ad5c1`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("city").value = "";
      showTemp(data, city);
    })
    .catch((err) => console.log(err));
};

function setBackgroundImage(weather) {
  let image = images.get(weather);
  document.body.style.backgroundImage = "url(" + image + ")";
}

function showTemp({ main, weather }, city) {
  setBackgroundImage(weather[0].main);
  document.getElementById("cityName").textContent =
    city.charAt(0).toUpperCase() + city.slice(1);
  document.getElementById("temp").textContent = `${Math.round(
    main.temp - 273.15
  )} °C`;
  document.getElementById("weather").textContent = weather[0].description;
}

document.getElementById("submit").onclick = function getCity() {
  let city = document.getElementById("city").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a8a49eaaca94312cff84c65812ad5c1`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("city").value = "";
      showTemp(data, city);
    })
    .catch((err) => {
      document.getElementById("cityName").textContent = "Enter a valid City";
      document.getElementById("temp").textContent = "";
      document.getElementById("weather").textContent = "";
      document.body.style.backgroundImage = "url('./images/error.jpg')";
    });
};
