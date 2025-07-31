const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d28c0eae75d75e16ee143f80d8a3ac67";

const stateId = document.querySelector("#search");
const btn = document.querySelector("#search-btn");
const weatherIcon = document.querySelector(".weather-icon");


async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
           throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        
        
        document.getElementsByClassName("city")[0].innerText = data.name;
        document.querySelector(".temp").innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i>${Math.round(data.main.temp)}°C`;
        document.querySelectorAll(".value")[0].innerText = data.main.humidity + "%";
        document.querySelectorAll(".value")[1].innerHTML = `${data.wind.speed}<small>km/h<small>`;

        const condn = data.weather[0].main.toLowerCase();
        if (condn === "clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (condn === "clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (condn === "rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (condn === "snow") {
            weatherIcon.src = "images/snow.png";
        }
        else if (condn === "thunderstorm") {
            weatherIcon.src = "images/thunderstorm.png";
        }
        else {
            weatherIcon.src = "images/default.png"; // Fallback icon
        }
    }
        
    catch(error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again later.");
    }

}

btn.addEventListener("click", () => {
    const city = stateId.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

