<!-- 
    This component is for the current day located on the left
-->

<script>
    import { unixConverterLong } from "../utils/epoch";
    import { getWeather } from "../utils/getWeatherIcon";
    export let firstDay;
    export let cityName;

    const dateTime = unixConverterLong(firstDay.dt)
</script>

<div class="block-wrapper card">
    <h1>{cityName}</h1>
    <p class="date">{dateTime}</p>
    <img class="day-icon" src={getWeather(firstDay.weather[0].main)} alt={unixConverterLong(firstDay.dt) + " " + firstDay.weather[0].main}>
</div>

<style>
    .date {
        color: var(--light-gray)
    }

    .block-wrapper {
        flex: 1 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .day-icon {
        width: 50px;
    }
</style>