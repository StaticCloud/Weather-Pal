<script>
    import { unixConvert } from "../utils/epoch";
    import { getWeather } from "../utils/getWeatherIcon";
    export let days;
    let forecast = days.slice(1, days.length - 2)
    console.log(forecast)
</script>

<div class="weeklyAndMeta card">
    <div class="day-wrapper">
        {#each forecast as day}
            <div class="day-card">
                <h3>{unixConvert(day.dt)}</h3>
                <img class="day-icons" src={getWeather(day.weather[0].main)} alt={unixConvert(day.dt) + " " + day.weather[0].main}>
            </div>
        {/each}
    </div>
</div>

<style>
    .weeklyAndMeta {
        flex: 2 0;
    }

    .day-wrapper {
        display: flex;
        margin: 20px;
        padding: 20px;
        justify-content: space-between;

        background-color: var(--dark-gray);
        border-radius: 10px;
    }

    .day-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .day-icons {
        width: 50px;
        margin: 10px;
    }
</style>

