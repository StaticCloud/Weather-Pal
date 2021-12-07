var todayEl = $("#today");
var weekEl = $("#week");

var key = "6c824467b18388bbc515d17b0f0e72db";
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=45.5234&lon=-122.6762&units=imperial&appid=" + key;

fetch(apiUrl).then(function(response) {
    if (response.ok) {
        response.json().then(function(data) {
            displayTodaysWeather(data.daily[0]);
        })
    } else {
        alert("An error occurred when trying to load weather data.");
    }
})

var displayTodaysWeather = function(day) {
    var today = unixConverter(day.dt);
    var city = $("<h1>").text("Placeholder").addClass("card-title");
    var date = $("<h3>").text((today.getMonth() + 1)
                            + "/" + today.getDate()
                            + "/" + today.getFullYear()).addClass("card-subtitle text-muted");

    todayEl.append(city).append(date);

    var temp = $("<p>").text("Temp: " + day.temp.max + "F").addClass("card-text");
    var humidity = $("<p>").text("Humidity: " + day.humidity + "%").addClass("card-text");
    var wind = $("<p>").text("Wind: " + day.wind_speed + "MPH").addClass("card-text");
    var uv = $("<p>").text("UVI: " + day.uvi).addClass("card-text");

    var info = $("<div>").addClass("card-body").append(temp).append(humidity).append(wind).append(uv);

    todayEl.append(info);
}

var unixConverter = function(epoch) {
    return new Date(epoch * 1000);
}