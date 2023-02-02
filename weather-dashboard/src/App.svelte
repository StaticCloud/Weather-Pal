<script>
  import Dashboard from './lib/Dashboard.svelte'

  const key = "6c824467b18388bbc515d17b0f0e72db";
  const city = "los angeles"
  const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + key;

  let validCity;

  async function getCity() {
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    return geoData;
  }

  async function getWeather() {
    validCity = await getCity();

    console.log(validCity)

    const weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + validCity[0].lat + "&lon=" + validCity[0].lon + "&units=imperial&appid=" + key;
    
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();
    
    console.log(weatherData)

    return weatherData
  }

</script>

<main class="main-wrapper">
  {#await getWeather()}
    <p>...loading</p>
  {:then data}
    <Dashboard cityName={validCity[0].name} data={data}/>
  {/await}
</main>

<style>
  .main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
