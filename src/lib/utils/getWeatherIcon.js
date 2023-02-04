import cloudSolid from '../../assets/weather-icons/cloud-solid.svg'
import rainSolid from '../../assets/weather-icons/cloud-rain-solid.svg'
import sunSolid from '../../assets/weather-icons/sun-solid.svg'
import snowSolid from '../../assets/weather-icons/snowflake-solid.svg'

export const getWeather = (weather) => {
    switch (weather) {
        case "Clouds":
            return cloudSolid
        case "Rain":
            return rainSolid
        case "Clear":
            return sunSolid
        case "Snow":
            return snowSolid;
    }
}