const apiKey = "a209ea9d26b2c89a9c0c101eebef022c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

async function checkWeather(city) {

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.status == 404) {

        document.querySelector(".weather").style.display = "none";

    } else {

        const temperature = data.main.temp;
        const windSpeed = data.wind.speed;

        document.querySelector("#city").innerHTML = data.name;

        document.querySelector("#temp").innerHTML =
            Math.round(temperature) + "°C";

        document.querySelector("#condition").innerHTML =
            data.weather[0].description;

        document.querySelector("#wind").innerHTML =
            windSpeed + " m/s";
        document.querySelector("#humidity").innerHTML =
            data.main.humidity;
    }
}

checkWeather("fortaleza");