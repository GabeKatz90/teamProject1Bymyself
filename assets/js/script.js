// Display date
var currentDay = moment().format("dddd, MMMM Do");

function functionDay() {
  $(".current-date").text(currentDay);
};

// My API Key
var apiKey1 = '0771c372e9b12d916768d6ec72becb9c';
<<<<<<< HEAD
=======
var apiKey2 = 'f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f'
>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d

// DOM Elements
var inputEl = document.querySelector('.input');
var results = inputEl.value;
var searchBtnEl = document.querySelector('.search-button');
var citiesListEl = document.querySelector(".cities-list");

<<<<<<< HEAD
=======

>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d
// Stores cityName in localStorage
var cityName = "";
// localStorage.getItem('cityNameStore');

// Stores value in localStorage
function recordCityData() {
  localStorage.setItem('cityNameStore', inputEl.value);
}
<<<<<<< HEAD
// Get Weather Function
function getWeather(cityName) {
  var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey1;

=======

// Event Listener upon the click of the search button
// searchBtnEl.addEventListener('click', getWeather);



// api variables
// var URLFood = "https://the-fork-the-spoon.p.rapidapi.com/locations/v2/auto-complete?text=" + cityName;
// var URLHotels = "https://hotels4.p.rapidapi.com/locations/v3/search?q=" + cityName + "locale=en_US&langid=1033&siteid=300000001";

function getWeather(cityName) {
  var URLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey1;
  
>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d

  $.ajax({
    url: URLWeather,
    method: "GET"
<<<<<<< HEAD

  })

    // Adds weather info to page
    .then(function (response) {
      console.log(response)
=======
    
  })
  
    // Adds weather info to page
    .then(function (response) {
      console.log (response)
>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d

      $('.city').html("<h2>" + response.name + "</h2>");
      $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
      $('.wind').text("Wind Speed: " + response.wind.speed + " MPH");
      $('.humidity').text("Humidity: " + response.main.humidity + "%");
      $(".temperature").text("Temperature: " + response.main.temp + " C");
    });
<<<<<<< HEAD

}
// Get Food Function
=======
   
}

>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d
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
<<<<<<< HEAD
  console.log("getFood", settings1)
=======
console.log ("getFood",settings1)
>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d

  $.ajax(settings1).done(function (response) {
    console.log(response);
    var restaurantsNames = [];
<<<<<<< HEAD
    for (let i = 0; i < 5; i = i + 1) {
      // response.data.autocomplete[i].name.text
      console.log(response.data.autocomplete[i].name.text)
      restaurantsNames.push(response.data.autocomplete[i].name.text)
    }
    $('.food').html("<h3>" + "Top Restaurants :  " + restaurantsNames + "</h3>");
  });


}

// Get Hotel Functions
=======
    for (let i = 0; i < 5; i=i+1){
      // response.data.autocomplete[i].name.text
      console.log (response.data.autocomplete[i].name.text)
      restaurantsNames.push (response.data.autocomplete[i].name.text)
    }
    $('.food').html("<h3>" + "Top Restaurants :  "+ restaurantsNames + "</h3>");
  });
  

}


>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d
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
<<<<<<< HEAD
  console.log("getHotel", settings2)
=======
console.log ("getHotel",settings2)
>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d

  $.ajax(settings2).done(function (response) {
    console.log(response);
    var hotelNumber = [];
    var hotelAirport = [];
<<<<<<< HEAD
    for (let i = 0; i < 1; i = i + 1) {
      // console.log (response[0].nr_hotels)
      hotelNumber.push(response[0].nr_hotels)
      hotelAirport.push(response[4].name)
    }
    $('.hotel').html("<h3>" + "Number Of Hotels : " + hotelNumber + "</h3>");
    $('.country').html("<h3>" + "The Closest Atrraction is : " + hotelAirport + "</h3>");
  });
}


=======
    for (let i = 0; i < 1; i=i+1){
      // console.log (response[0].nr_hotels)
      hotelNumber.push (response[0].nr_hotels)
      hotelAirport.push (response[4].name)
    }
    $('.hotel').html("<h3>" + "Number Of Hotels : " + hotelNumber + "</h3>");
    $('.country').html("<h3>" + "The Closest Airport Or Train Station is : "+ hotelAirport + "</h3>");
    
    
  });
  

}



>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d
searchBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(inputEl.value);
  getWeather(inputEl.value);
  getFood(inputEl.value);
  getHotel(inputEl.value);
})
<<<<<<< HEAD


=======
>>>>>>> 2b5ba06adfa194b89302a9e1f9d45135a622a94d
