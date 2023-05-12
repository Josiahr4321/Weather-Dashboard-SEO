var apiKey = ''

var searchForm = document.getElementById('seaarch-form');
var seaarchInput = document.getElementById('search-input');
var weatherInfo = document.getElementById ('weather-info');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = searchInput.value;
    getWeather(city);
  });
  
  function getWeather(city) {
    fetch(``)
      .then((response) => response.json())
      .then((data) => {
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const cityName = data.name;
        weatherInfo.innerHTML = `${cityName}: ${temperature}°C, ${description}`;
      })
      .catch((error) => {
        console.log(error);
        weatherInfo.innerHTML = 'An error occurred. Please try again.';
      });
  }