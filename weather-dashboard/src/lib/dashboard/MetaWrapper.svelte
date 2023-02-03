<script>
    import wind from '../../assets/weather-icons/wind-solid.svg'
    import temp from '../../assets/weather-icons/temperature-half-solid.svg'
    import humidity from '../../assets/weather-icons/humidity.svg'

    import ProgressSvg from "./ProgressSvg.svelte";
    import { getWindColor, getTempColor, getHumidColor, getUVIColor } from "../utils/getMiscWeatherInfo";
    export let day;
</script>

<div class="card meta-card">
    <div class="meta-wrapper">
        <div id="wind">
            <h4>Wind Speed</h4>
            <ProgressSvg maxVal=100 percent={day.wind_speed} color={getWindColor(day.wind_speed)} units={" mph"}/>
            <img src={wind} alt="wind">
        </div>
        <div id="temp">
            <h4>Temperature</h4>
            <ProgressSvg maxVal=100 percent={day.temp.max} color={getTempColor(day.temp.max)} units={"°F"}/>
            <img src={temp} alt="temp">
        </div>
        <div id="humidity">
            <h4>Humidity</h4>
            <ProgressSvg maxVal=100 percent={day.humidity} color={getHumidColor(day.humidity)} units={"%"}/>
            <img src={humidity} alt="humidity">
                
        </div>
        <div id="uvi">
            <h4>UVI</h4>
            <ProgressSvg maxVal=5 percent={day.uvi} color={getUVIColor(day.uvi)} units={""}/>
        </div>
    </div>
</div>

<style>
    #wind,
    #temp,
    #humidity,
    #uvi {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .meta-card {
        padding-bottom: 20px;
    }

    .meta-wrapper {
        display: flex;
        margin: 0 20px;
        padding: 20px;
        justify-content: space-around;

        background-color: var(--dark-gray);
        border-radius: 5px;
    }

    h4 {
        padding-top: 7px;
    }

    img {
        width: 20px;
    }
</style>