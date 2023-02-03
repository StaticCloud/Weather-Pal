<script>
    import { unixConvert } from "../utils/epoch";
    import { getWeather } from "../utils/getWeatherIcon";

    import { getWind, getTemp, getHumid } from "../utils/getMiscWeatherInfo";
    
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
                <div class="weekday-meta">
                    <img class="meta-icon" src={getWind(day.wind_speed)} alt="what"/>
                    <img class="meta-icon" src={getTemp(day.temp.max)} alt="what"/>
                    <img class="meta-icon" src={getHumid(day.humidity)} alt="what"/>
                </div>
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
        justify-content: space-between;
        padding: 10px;
    }

    .day-icons {
        width: 50px;
        margin:30px 10px;
        
    }

    .meta-icon {
        flex: 1 0;
        width: 15px;
        height: 15px;
    }
</style>

