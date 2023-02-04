import windBreeze from '../../assets/weather-icons/wind/wind-solid-breeze.svg'
import windDanger from '../../assets/weather-icons/wind/wind-solid-danger.svg'
import windModerate from '../../assets/weather-icons/wind/wind-solid-moderate.svg'

import tempCold from '../../assets/weather-icons/temperature/temperature-cool.svg'
import tempMod from '../../assets/weather-icons/temperature/temperature-hot.svg'
import tempHot from '../../assets/weather-icons/temperature/temperature-moderate.svg'

import humidWet from '../../assets/weather-icons/humidity/humid-wet.svg'
import humidComfort from '../../assets/weather-icons/humidity/humid-comfort.svg'
import humidDry from '../../assets/weather-icons/humidity/humid-dry.svg'

export const getWindIcon = (wind) => {
    if (wind < 33) {
        return windBreeze;
    } else if (wind > 66) {
        return windDanger
    } else {
        return windModerate
    }
}

export const getTempIcon = (temp) => {
    if (temp < 50) {
        return tempCold;
    } else if (temp > 70) {
        return tempHot
    } else {
        return tempMod
    }
}

export const getHumidIcon = (humdity) => {
    if (humdity < 33) {
        return humidDry;
    } else if (humdity > 66) {
        return humidWet
    } else {
        return humidComfort
    }
}

export const getWindColor = (wind) => {
    if (wind < 33) {
        return "#49C286";
    } else if (wind > 66) {
        return "#C25B49"
    } else {
        return "#E6DA56"
    }
}

export const getTempColor= (temp) => {
    if (temp < 50) {
        return "#56BAE6";
    } else if (temp > 70) {
        return "#C25B49"
    } else {
        return "#49C286"
    }
}

export const getHumidColor = (humdity) => {
    if (humdity < 33) {
        return "#C25B49";
    } else if (humdity > 66) {
        return "#56BAE6"
    } else {
        return "#E6DA56"
    }
}

export const getUVIColor = (uvi) => {
    if (uvi < 2) {
        return "#49C286";
    } else if (uvi > 5) {
        return "#C25B49"
    } else {
        return "#E6DA56"
    }
}