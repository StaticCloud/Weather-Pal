import cloudSolid from '../../assets/weather-icons/cloud-solid.svg'
import rainSolid from '../../assets/weather-icons/cloud-rain-solid.svg'
import sunSolid from '../../assets/weather-icons/sun-solid.svg'

export function getWeather(weather) {
    switch (weather) {
        case "Clouds":
            return cloudSolid
        case "Rain":
            return rainSolid
        case "Clear":
            return sunSolid
    }
}