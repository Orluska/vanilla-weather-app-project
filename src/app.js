let now = new Date();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
document.querySelector("#dayWeek").innerHTML = `${day}`;
document.querySelector("#time").innerHTML = `${hours}:${minutes}`;

function displayWeather(response) {
  console.log(response);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#city").innerHTML = response.data.city;
  document.querySelector("#description").innerHTML =
    response.data.condition.description;
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.temperature.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

let apiKey = "b73t865943aecob0f48a91ff9b719c02";
let query = "Paris";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

axios.get(apiUrl).then(displayWeather);
