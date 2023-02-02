<script>
  import Dashboard from './lib/Dashboard.svelte'

  const key = "6c824467b18388bbc515d17b0f0e72db";
  const city = "los angeles"
  const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + key;

  async function getWeather() {
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();

    const weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geoData[0].lat + "&lon=" + geoData[0].lon + "&units=imperial&appid=" + key;
    
    const weatherRes = await fetch(weatherUrl);
    const weatherData = await weatherRes.json();
    
    console.log(weatherData)

    return weatherData
  }

</script>

<main>
  {#await getWeather()}
    <p>...loading</p>
  {:then data}
    <p>not loading</p>
    <Dashboard data={data}/>
  {/await}
</main>

<style>

</style>
