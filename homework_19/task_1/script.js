const API_KEY = "d4aea8f367a16ffa92897b86051237a6";
const CITY = "Odesa";

const elements = {
    date: document.getElementById("date"),
    time: document.getElementById("time"),
    temp: document.getElementById("temp"),
    feels: document.getElementById("feels"),
    desc: document.getElementById("desc"),
    humidity: document.getElementById("humidity"),
    pressure: document.getElementById("pressure"),
    wind: document.getElementById("wind"),
    icon: document.getElementById("weather-icon"),
    city: document.getElementById("city"),
};

function updateTimeAndDate() {
    const now = new Date();
    elements.time.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    elements.date.textContent = now.toDateString();
}

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&l&appid=${API_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod !== 200) {
            alert("Помилка: " + data.message);
            return;
        }

        elements.temp.textContent = `${Math.round(data.main.temp)}°C`;
        elements.feels.textContent = `${Math.round(data.main.feels_like)}°C`;
        elements.desc.textContent = data.weather[0].description;
        elements.humidity.textContent = `${data.main.humidity}`;
        elements.pressure.textContent = `${data.main.pressure}`;
        elements.wind.textContent = `${data.wind.speed} m/s`;
        elements.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        elements.city.textContent = data.name;

        updateTimeAndDate();
    } catch (e) {
        alert("Помилка з'єднання.");
    }
}

document.getElementById("refresh").addEventListener("click", fetchWeather);

fetchWeather();
setInterval(updateTimeAndDate, 60000);
