document.addEventListener("DOMContentLoaded", () => {
  let cityInput = document.getElementById("city-input");
  let getWeatherButton = document.getElementById("getWeather-button");
  let weatherInfo = document.getElementById("weather-info");
  let cityName = document.getElementById("city-name");
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let errorMessage = document.getElementById("error-message");

  const API_KEY = "d7dd6d3cef56c0041cc8a2aa8f4d354b";

  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("City not found!");
    }
  }

  function displayWeatherData(data) {
    console.log(data);
    cityInput.value = "";
    const { name, main, weather } = data;
    if (data) {
      weatherInfo.classList.remove("hidden");
      errorMessage.classList.add("hidden");
      cityName.textContent = name;
      temperature.textContent = `Temperature : ${main.temp}`;
      description.textContent = `Weather : ${weather[0].description}`;
    }
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
