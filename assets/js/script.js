var apiKey = ''

var searchForm = document.getElementById('seaarch-form');
var seaarchInput = document.getElementById('search-input');
var weatherInfo = document.getElementById ('weather-info');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = searchInput.value;
    getWeather(city);
  });
  
