

const apiKey = "7f87a80286a813d432f2968540680887";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


//  Function to get the weather data from OpenWeather
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');



async function checkWeather(city) {

  // Data fetch through API-url
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // Error handling 
  if(response.status == 404) {
    document.querySelector(".error").style.display = 'block';
    document.querySelector(".weather").style.display = 'none';
  } 
  else {
    var data = await response.json();

    console.log(data);

    // data fetch from API and change in UI according to city name 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    // Display the image according to weather conditions
    if(data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png"
    } 


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = 'none';

  }

}

// on-click for search icon, get the value from the input field and call the function 
searchBtn.addEventListener("click", ()=> {
  checkWeather(searchBox.value);
})
