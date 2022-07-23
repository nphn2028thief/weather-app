const APP_ID = '0d6a74dd18833df489db31313d961646';
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('.search_input');
const cityName = document.querySelector('.city_name');
const weatherState = document.querySelector('.weather_state');
const weatherImage = document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind_speed');

searchInput.onchange = e => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json()
            cityName.innerText = data.name || DEFAULT_VALUE;
            weatherState.innerText = data.weather[0].description || DEFAULT_VALUE;
            weatherImage.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temperature.innerText = Math.round(data.main.temp) || DEFAULT_VALUE;
            sunrise.innerText = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerText = moment.unix(data.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humidity.innerText = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerText = data.wind.speed * 3.6 || DEFAULT_VALUE;
            e.target.value = '';
        })
}
