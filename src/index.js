import './style.css';

const search = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function getWeather(city) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=23ee9de704354907b9202412231406&q=${city}&aqi=no`,
        { mode: 'cors' }
    );

    const weatherData = await response.json();

    console.log(weatherData);

    const temp = document.querySelector('.temp');
    temp.textContent = Math.round(weatherData.current.temp_f) + '°f';

    const currentCity = document.querySelector('.city');
    currentCity.textContent = weatherData.location.name;

    const humidity = document.querySelector('#humidity');
    humidity.textContent = weatherData.current.humidity + ' %';

    const wind = document.querySelector('#wind');
    wind.textContent = weatherData.current.wind_mph + ' mph';

    if (weatherData.current.condition.code === 1000) {
        weatherIcon.src = '/weather-icons/113.png';
    } else if (weatherData.current.condition.code === 1003) {
        weatherIcon.src = '/weather-icons/116.png';
    } else if (weatherData.current.condition.code === 1006) {
        weatherIcon.src = '/weather-icons/119.png';
    } else if (weatherData.current.condition.code === 1009) {
        weatherIcon.src = '/weather-icons/122.png';
    } else if (weatherData.current.condition.code === 1030) {
        weatherIcon.src = '/weather-icons/143.png';
    } else if (weatherData.current.condition.code === 1063) {
        weatherIcon.src = '/weather-icons/176.png';
    } else if (weatherData.current.condition.code === 1066) {
        weatherIcon.src = '/weather-icons/179.png';
    } else if (weatherData.current.condition.code === 1069) {
        weatherIcon.src = '/weather-icons/182.png';
    } else if (weatherData.current.condition.code === 1072) {
        weatherIcon.src = '/weather-icons/185.png';
    } else if (weatherData.current.condition.code === 1087) {
        weatherIcon.src = '/weather-icons/200.png';
    } else if (weatherData.current.condition.code === 1114) {
        weatherIcon.src = '/weather-icons/227.png';
    } else if (weatherData.current.condition.code === 1117) {
        weatherIcon.src = '/weather-icons/230.png';
    } else if (weatherData.current.condition.code === 1135) {
        weatherIcon.src = '/weather-icons/248.png';
    } else if (weatherData.current.condition.code === 1147) {
        weatherIcon.src = '/weather-icons/260.png';
    } else if (weatherData.current.condition.code === 1150) {
        weatherIcon.src = '/weather-icons/263.png';
    } else if (weatherData.current.condition.code === 1153) {
        weatherIcon.src = '/weather-icons/266.png';
    } else if (weatherData.current.condition.code === 1168) {
        weatherIcon.src = '/weather-icons/281.png';
    } else if (weatherData.current.condition.code === 1171) {
        weatherIcon.src = '/weather-icons/284.png';
    } else if (weatherData.current.condition.code === 1180) {
        weatherIcon.src = '/weather-icons/293.png';
    } else if (weatherData.current.condition.code === 1183) {
        weatherIcon.src = '/weather-icons/296.png';
    } else if (weatherData.current.condition.code === 1186) {
        weatherIcon.src = '/weather-icons/299.png';
    } else if (weatherData.current.condition.code === 1189) {
        weatherIcon.src = '/weather-icons/302.png';
    } else if (weatherData.current.condition.code === 1192) {
        weatherIcon.src = '/weather-icons/305.png';
    } else if (weatherData.current.condition.code === 1195) {
        weatherIcon.src = '/weather-icons/308.png';
    } else if (weatherData.current.condition.code === 1198) {
        weatherIcon.src = '/weather-icons/311.png';
    } else if (weatherData.current.condition.code === 1201) {
        weatherIcon.src = '/weather-icons/314.png';
    } else if (weatherData.current.condition.code === 1204) {
        weatherIcon.src = '/weather-icons/317.png';
    } else if (weatherData.current.condition.code === 1207) {
        weatherIcon.src = '/weather-icons/320.png';
    } else if (weatherData.current.condition.code === 1210) {
        weatherIcon.src = '/weather-icons/323.png';
    } else if (weatherData.current.condition.code === 1213) {
        weatherIcon.src = '/weather-icons/326.png';
    } else if (weatherData.current.condition.code === 1216) {
        weatherIcon.src = '/weather-icons/329.png';
    } else if (weatherData.current.condition.code === 1219) {
        weatherIcon.src = '/weather-icons/332.png';
    } else if (weatherData.current.condition.code === 1222) {
        weatherIcon.src = '/weather-icons/335.png';
    } else if (weatherData.current.condition.code === 1225) {
        weatherIcon.src = '/weather-icons/338.png';
    } else if (weatherData.current.condition.code === 1237) {
        weatherIcon.src = '/weather-icons/350.png';
    } else if (weatherData.current.condition.code === 1240) {
        weatherIcon.src = '/weather-icons/353.png';
    } else if (weatherData.current.condition.code === 1243) {
        weatherIcon.src = '/weather-icons/356.png';
    } else if (weatherData.current.condition.code === 1246) {
        weatherIcon.src = '/weather-icons/359.png';
    } else if (weatherData.current.condition.code === 1249) {
        weatherIcon.src = '/weather-icons/362.png';
    } else if (weatherData.current.condition.code === 1252) {
        weatherIcon.src = '/weather-icons/365.png';
    } else if (weatherData.current.condition.code === 1255) {
        weatherIcon.src = '/weather-icons/368.png';
    } else if (weatherData.current.condition.code === 1258) {
        weatherIcon.src = '/weather-icons/372.png';
    } else if (weatherData.current.condition.code === 1261) {
        weatherIcon.src = '/weather-icons/374.png';
    } else if (weatherData.current.condition.code === 1264) {
        weatherIcon.src = '/weather-icons/377.png';
    } else if (weatherData.current.condition.code === 1273) {
        weatherIcon.src = '/weather-icons/386.png';
    } else if (weatherData.current.condition.code === 1276) {
        weatherIcon.src = '/weather-icons/389.png';
    } else if (weatherData.current.condition.code === 1279) {
        weatherIcon.src = '/weather-icons/392.png';
    } else if (weatherData.current.condition.code === 1282) {
        weatherIcon.src = '/weather-icons/395.png';
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(search.value);
});
