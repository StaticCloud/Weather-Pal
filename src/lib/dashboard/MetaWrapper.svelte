<script>
    import wind from '../../assets/weather-icons/wind-solid.svg'
    import temp from '../../assets/weather-icons/temperature-half-solid.svg'
    import humidity from '../../assets/weather-icons/humidity.svg'

    import ProgressSvg from "./ProgressSvg.svelte";
    import ProgressSvgMini from './ProgressSvgMini.svelte';
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
    <div class="meta-mini">
        <div>
            <div id="wind">
                <ProgressSvgMini maxVal=100 percent={day.wind_speed} color={getWindColor(day.wind_speed)} units={" mph"}/>
                <img src={wind} alt="wind">
            </div>
            <div id="temp">
                <ProgressSvgMini maxVal=100 percent={day.temp.max} color={getTempColor(day.temp.max)} units={"°F"}/>
                <img src={temp} alt="temp">
            </div>
        </div>
        <div>
            <div id="humidity">
                <ProgressSvgMini maxVal=100 percent={day.humidity} color={getHumidColor(day.humidity)} units={"%"}/>
                <img src={humidity} alt="humidity">
            </div>
            <div id="uvi">
                <ProgressSvgMini maxVal=5 percent={day.uvi} color={getUVIColor(day.uvi)} units={""}/>
                <h5>UVI</h5>
            </div>
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
        padding-bottom: 50px;
    }

    .meta-card {
        padding-bottom: 20px;
    }

    .meta-wrapper,
    .meta-mini {
        overflow-x: scroll;
        margin: 0 20px;
        padding: 0 20px 20px 20px;
        border-radius: 0 0 5px 5px;
        background-color: var(--dark-gray);
    }

    .meta-wrapper {
        display: none;
        justify-content: space-between;
    }

    .meta-mini {
        display: flex;
        justify-content: space-around;
    }

    h4 {
        padding-top: 7px;
    }

    img, h5 {
        
        margin-top: 10px;
    }

    img {
        width: 15px;
    }

    @media screen and (min-width: 907px) {
        .meta-wrapper {
            display: flex;
            padding: 20px;
            justify-content: space-around;
            border-radius: 5px;       
        }

        .meta-mini {
            display: none;
        }

        #wind,
        #temp,
        #humidity,
        #uvi {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 0px;
        }

        img, h5 {
            margin-top: 0px;
        }
    }
</style>