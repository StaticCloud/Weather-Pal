// elements for today's and weekly weather
var todayEl = $("#today");
var weekEl = $("#week");

var form = $("#form");

// api key and url
var key = "6c824467b18388bbc515d17b0f0e72db";

var cityArray = [];
var citiesListEl = $("#cities-list");

// display the weather for the day
var displayTodaysWeather = function(day, city) {
    // get the value of the day in dt and convert it to a human readable date
    var today = unixConverter(day.dt);
    // create elements for the city and date
    var city = $("<h1>").text(city).addClass("card-title");

    // get the weather icon
    var iconUrl = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
    // create an image element with that icon
    var weatherIcon = $("<img>").attr("src", iconUrl).attr("height", "40px");
    var date = $("<h3>").html((today.getMonth() + 1)
                            + "/" + today.getDate()
                            + "/" + today.getFullYear()).addClass("card-subtitle text-muted");

    // append the icon and the date to a container so they can display on the same line
    var dateContainer = $("<div>").css("display", "inline-flex").append(date).append(weatherIcon);

    // append our new elements to the todayEl
    todayEl.append(city).append(dateContainer);

    // then, render the temp, humidity, wind, and uvi
    var temp = $("<p>").text("Temp: " + day.temp.max + "F").addClass("card-text");
    var humidity = $("<p>").text("Humidity: " + day.humidity + "%").addClass("card-text");
    var wind = $("<p>").text("Wind: " + day.wind_speed + "MPH").addClass("card-text");
    var uv = $("<p>").text("UVI: " + day.uvi).addClass("card-text");

    // then append it to a separate div, which would be our body, and append it to tge todayEl
    var info = $("<div>").addClass("card-body").append(temp).append(humidity).append(wind).append(uv);

    todayEl.append(info);
}

// display the weather for the week
var displayWeeklyWeather = function(week) {
    // start at index 1 (tomorrow)
    for (var i = 1; i < 6; i++) {
        // repeat what we we did in displayTodaysWeather (might refactor later to avoid repetition) but for every day of the week
        var day = unixConverter(week[i].dt);
        var weekCard = $("<div>").addClass("card col p-2");

        // get the weather icon to display with our date
        var iconUrl = "http://openweathermap.org/img/w/" + week[i].weather[0].icon + ".png";
        var weatherIcon = $("<img>").attr("src", iconUrl).attr("height", "40px");
        
        var day = $("<h4>").text((day.getMonth() + 1)
                            + "/" + day.getDate()
                            + "/" + day.getFullYear()).addClass("card-title");
        var dateContainer = $("<div>").css("display", "inline-flex").append(day).append(weatherIcon);

        var temp = $("<p>").text("Temp: " + week[i].temp.max + "F").addClass("card-text");
        var humidity = $("<p>").text("Humidity: " + week[i].humidity + "%").addClass("card-text");
        var wind = $("<p>").text("Wind: " + week[i].wind_speed + "MPH").addClass("card-text");

        weekCard.append(dateContainer).append(temp).append(humidity).append(wind);

        weekEl.append(weekCard);
    }
}

// get the coordinates of the city using direct geomapping
var getCity = function(city) {
    // only include cities in the US
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + key;

    // make the API call and retrieve the coordinates and the city and state to display
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                // if there is data to be rendered, get the coordinates and name of that city
                if (data[0]) {
                    getWeather(data[0].lat, data[0].lon, data[0].name);
                } else {
                    // otherwise, alert the user that the city doesn't exist
                    alert("That city doesn't exist!")
                    // and set the query to los angeles by default
                    document.location.replace("./index.html?q=Los Angeles")
                }
            })
        }
    })
}

// finally, with our coordinates and city, get the weather and display it
var getWeather = function(lat, lon, city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key;

    // fetch the url then parse the response into human readable data via JSON
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                // render the weather for today and the week
                displayTodaysWeather(data.daily[0], city);
                displayWeeklyWeather(data.daily);

                if (cityArray.includes(city)) {
                    // do absolutely nothing if the city is already in the array
                } else {
                    cityArray.unshift(city);
                    saveCity();
                }
            })
        } else {
            alert("An error occurred when trying to load weather data.");
        }
    }) 
}

// get the query, if it exists
var getQuery = function() {
    var queryString = document.location.search.split("=")[1];

    if (queryString) {
        getCity(queryString);
    } else {
        // if the query selector is empty, set the city to los angeles
        getCity("Los Angeles")
    }
}

// convert epoch time to human readable text
var unixConverter = function(epoch) {
    return new Date(epoch * 1000);
}

// save our city to localstorage
var saveCity = function() {
    localStorage.setItem("cities", JSON.stringify(cityArray));
}

// load our cities when the page loads
var loadCity = function() {
    // retrieve our array from localstorage
    cityArray = localStorage.getItem("cities");
    cityArray = JSON.parse(cityArray);

    // create a new array if our array is empty
    if (cityArray === null) {
        cityArray = [];
        return;
    }

    // create list elements for the cities
    for (var i = 0; i < cityArray.length; i++) {
        var listItemEl = $("<a>").text(cityArray[i]).addClass("list-group-item");
        listItemEl.attr("href", "./index.html?q=" + cityArray[i]);
        citiesListEl.append(listItemEl);
    }
}

loadCity();
getQuery();

// set the query value to the value of the city textbox
form.submit(function(e) {
    e.preventDefault();
    var city = $("#city").val();

    if (city) {
        document.location.replace("./index.html?q=" + city);
    } else {
        alert("Please enter a value inside the text box.");
    }
})