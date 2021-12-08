// elements for today's and weekly weather
var todayEl = $("#today");
var weekEl = $("#week");

// api key and url
var key = "6c824467b18388bbc515d17b0f0e72db";
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=46.729728&lon=-117.181843&units=imperial&appid=" + key;

// fetch the url then parse the response into human readable data via JSON
fetch(apiUrl).then(function(response) {
    if (response.ok) {
        response.json().then(function(data) {
            // render the weather for today and the week
            displayTodaysWeather(data.daily[0]);
            displayWeeklyWeather(data.daily)
        })
    } else {
        alert("An error occurred when trying to load weather data.");
    }
})

// display the weather for the day
var displayTodaysWeather = function(day) {
    // get the value of the day in dt and convert it to a human readable date
    var today = unixConverter(day.dt);
    // create elements for the city and date
    var city = $("<h1>").text("Placeholder").addClass("card-title");

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

// convert epoch time to human readable text
var unixConverter = function(epoch) {
    return new Date(epoch * 1000);
}