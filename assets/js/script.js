// Display date
var currentDay = moment().format("dddd, MMMM Do");

function functionDay() {
  $(".current-date").text(currentDay);
};

// My API Key
var apiKey1 = '0771c372e9b12d916768d6ec72becb9c';

// DOM Elements
var inputEl = document.querySelector('.input');
var results = inputEl.value;
var searchBtnEl = document.querySelector('.search-button');
var citiesListEl = document.querySelector(".cities-list");

// Stores cityName in localStorage
var cityName = "";
// localStorage.getItem('cityNameStore');

// Stores value in localStorage
function recordCityData() {
  localStorage.setItem('cityNameStore', inputEl.value);
}
// Get Weather Function
function getWeather(cityName) {
  var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey1;


  $.ajax({
    url: URLWeather,
    method: "GET"

  })

    // Adds weather info to page
    .then(function (response) {
      console.log(response)

      $('.city').html("<h2>" + response.name + "</h2>");
      $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
      $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
      $('.humidity').text("Humidity: " + response.main.humidity + "%");
      $(".temperature").text("Temperature: " + response.main.temp + " C");
    });

}
// Get Food Function
function getFood(cityName) {
  const settings1 = {
    async: true,
    crossDomain: true,
    url: `https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/auto-complete?text=${cityName}`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com"
    }
  };
  console.log("getFood", settings1)

  $.ajax(settings1).done(function (response) {
    console.log(response);
    var restaurantsNames = [];
    for (let i = 0; i < 5; i = i + 1) {
      // response.data.autocomplete[i].name.text
      console.log(response.data.autocomplete[i].name.text)
      restaurantsNames.push(response.data.autocomplete[i].name.text)
    }
    $('.food').html("<h3>" + "Top Restaurants :  " + restaurantsNames + "</h3>");
  });


}

// Get Hotel Functions
function getHotel(cityName) {
  const settings2 = {
    async: true,
    crossDomain: true,
    url: `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${cityName}`,
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
    }
  };
  console.log("getHotel", settings2)

  $.ajax(settings2).done(function (response) {
    console.log(response);
    var hotelNumber = [];
    var hotelAirport = [];
    for (let i = 0; i < 1; i = i + 1) {
      // console.log (response[0].nr_hotels)
      hotelNumber.push(response[0].nr_hotels)
      hotelAirport.push(response[4].name)
    }
    $('.hotel').html("<h3>" + "Number Of Hotels : " + hotelNumber + "</h3>");
    $('.country').html("<h3>" + "The Closest Atrraction is : " + hotelAirport + "</h3>");
  });
}


searchBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(inputEl.value);
  getWeather(inputEl.value);
  getFood(inputEl.value);
  getHotel(inputEl.value);
})


