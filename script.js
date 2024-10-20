
// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = 'fa8ff08028663a01dac70c7e7083b1e1';
const CITY = 'Brampton'; // You can change this to any city of your choice
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(WEATHER_API_URL);
        if (!response.ok) {
            // Log the status and status text for better debugging
            console.error(`HTTP error! status: ${response.status}, status text: ${response.statusText}`);
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('weather-container').innerHTML = '<p>Error loading weather data.</p>';
    }
}

// Function to display weather data on the webpage
function displayWeather(data) {
    // Get the weather container
    const weatherContainer = document.getElementById('weather-container');
    
    // Clear the loading message
    weatherContainer.innerHTML = '';

    // Create HTML elements for weather data
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather');

    const city = document.createElement('h2');
    city.classList.add('city');
    city.innerText = `${data.name}, ${data.sys.country}`;

    const temp = document.createElement('p');
    temp.classList.add('temp');
    temp.innerText = `Temperature: ${data.main.temp} °C`;

    const description = document.createElement('p');
    description.classList.add('temp');
    description.innerText = `Weather: ${data.weather[0].description}`;

    // Append city, temperature, and description to the weather div
    weatherDiv.appendChild(city);
    weatherDiv.appendChild(temp);
    weatherDiv.appendChild(description);

    // Append the weather div to the weather container
    weatherContainer.appendChild(weatherDiv);
}

// Call the fetchWeather function when the script loads
fetchWeather();