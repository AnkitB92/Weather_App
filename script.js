console.log('running...');

const input = document.getElementById('user-input');
const search = document.getElementById('search-btn');

input.focus()
const defaultLocation = 'New Delhi';

const currLocation = document.getElementById('curr-location');
const cityTemp = document.getElementById('city-temp');
const cityTime = document.getElementById('city-time');
const weather = document.getElementById('weather');
input.value = defaultLocation;

getWeather();


window.addEventListener('keydown', e => {
  if (e.key !== 'Enter') {
    return;
  }
  getWeather();
})

search.addEventListener('click', () => getWeather())

// get your api key from weather www.weatherapi.com
// WARNING: KEEP YOUR API KEY SECRET
// AVOID EXPOSURE TO GIT PUSH

async function fetchData(city) {

  // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}&aqi=yes`);
  // return await response.json();

  // remove the code below and use above code in line: 33, 34
  return fake_api() // remove this
}

async function getWeather() {
  const { value } = input;
  console.log(value);
  currLocation.innerText = 'loading...';
  const weatherData = await fetchData(value || defaultLocation);
  console.log(weatherData);

  const { location, current } = weatherData;
  currLocation.innerText = `${location.name}, ${location.country}`;
  weather.querySelector('img').src = `https:${current.condition.icon}`;
  weather.querySelector('h3').innerText = `${current.temp_c}°c`;
  cityTime.innerText = location.localtime.split(' ')[1];
}



function fake_api() {
  return {
    "location": {
      "name": "London",
      "region": "City of London, Greater London",
      "country": "United Kingdom",
      "lat": 51.52,
      "lon": -0.11,
      "tz_id": "Europe/London",
      "localtime_epoch": 1613896955,
      "localtime": "2021-02-21 8:42"
    },
    "current": {
      "last_updated_epoch": 1613896210,
      "last_updated": "2021-02-21 08:30",
      "temp_c": 11,
      "temp_f": 51.8,
      "is_day": 1,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
      },
      "wind_mph": 3.8,
      "wind_kph": 6.1,
      "wind_degree": 220,
      "wind_dir": "SW",
      "pressure_mb": 1009,
      "pressure_in": 30.3,
      "precip_mm": 0.1,
      "precip_in": 0,
      "humidity": 82,
      "cloud": 75,
      "feelslike_c": 9.5,
      "feelslike_f": 49.2,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 1,
      "gust_mph": 10.5,
      "gust_kph": 16.9,
      "air_quality": {
        "co": 230.3,
        "no2": 13.5,
        "o3": 54.3,
        "so2": 7.9,
        "pm2_5": 8.6,
        "pm10": 11.3,
        "us-epa-index": 1,
        "gb-defra-index": 1
      }
    }
  }
}
