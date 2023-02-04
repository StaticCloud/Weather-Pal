<script>
    import { fly } from 'svelte/transition'

    import CurrentDayCard from "./dashboard/CurrentDayCard.svelte";
    import WeeklyWrapper from "./dashboard/WeeklyWrapper.svelte";
    import MetaWrapper from "./dashboard/MetaWrapper.svelte";
    import Search from "./Search.svelte";
    import LoadingSpinner from "./utils/LoadingSpinner.svelte";

    const key = "6c824467b18388bbc515d17b0f0e72db";

    if (!localStorage.getItem("city")) {
        localStorage.setItem("city", "los angeles")
    }

    let city = localStorage.getItem("city");

    async function getCity(city) {
        const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + key;
       
        let geoRes;
        let geoData;

        try {
            geoRes = await fetch(geoUrl);
            geoData = await geoRes.json();
        } catch (e) {
            console.log(e)
        }

        if (geoData.length) {
            return getWeather(geoData)
        } else {
            return getCity(localStorage.getItem("city"))
        }
    }

    async function getWeather(data) {
        const firstCity = data[0];
        localStorage.setItem("city", firstCity.name)

        const weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + firstCity.lat + "&lon=" + firstCity.lon + "&units=imperial&appid=" + key;
        
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        return { weather: weatherData, name: firstCity.name }
    }

    $: promise = getCity(city)
</script>
 
{#await promise}
    <div class="spinner-wrap">
        <LoadingSpinner/>
    </div>
{:then data}
    <div class="dashboard" in:fly={{ duration: 1000 }}>
        <Search bind:city={city}/>
        <div class="dashboard-wrap">
            <CurrentDayCard cityName={data.name} firstDay={data.weather.daily[0]}/>
            <WeeklyWrapper days={data.weather.daily}/>
        </div>
        <div class="meta-wrap">
            <MetaWrapper day={data.weather.daily[0]}/>
        </div>
    </div>
{/await}

<style>
    .dashboard {
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    .spinner-wrap {
        display: flex;
        align-items: center;
        height: 100vh;
        justify-content: center;
    }

    @media screen and (min-width: 907px) {
        .dashboard-wrap {
            width: 100%;
            display: flex;
        }

        .dashboard {
            height: auto;
        }
    }

    @media screen and (min-width: 1185px) {
        .dashboard {
            min-width: 1020px;
        }
    }
</style>