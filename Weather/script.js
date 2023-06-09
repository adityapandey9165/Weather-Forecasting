const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cc8a4e19fdmsh087f07792c5db32p124f9bjsn9556278ef69a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  cityName.innerHTML = city;

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;

      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;

      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => {
      console.error(err);
      cityName.innerHTML = "Error";
    });
};
getWeather("Delhi");
sumbit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value[0].toUpperCase() + city.value.slice(1));
});
getWeather(c1.innerHTML.value);
