var key = "6c824467b18388bbc515d17b0f0e72db";
var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=45.5234&lon=-122.6762&appid=" + key;

fetch(apiUrl).then(function(response) {
    if (response.ok) {
        response.json().then(function(data) {
            console.log(data);
        })
    } else {
        alert("An error occurred when trying to load weather data.");
    }
})