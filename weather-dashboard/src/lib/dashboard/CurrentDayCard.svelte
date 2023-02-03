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

<div class="card current-day">
    <div class="block-wrapper">
        <img class="day-icon" src={getWeather(firstDay.weather[0].main)} alt={unixConverterLong(firstDay.dt) + " " + firstDay.weather[0].main}>
        <h1>{cityName}</h1>
        <p class="date">{dateTime}</p>
    </div>
</div>

<style>
    .current-day {
        display: flex;
        flex: 1 0;
        align-items: center;
        justify-content: center;
    }

    .date {
        color: var(--light-gray)
    }

    .block-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        margin: 20px;
    }

    .day-icon {
        width: 100px;
        margin-bottom: 15px;
        flex: 1;
    }
</style>