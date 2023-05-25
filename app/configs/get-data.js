
//getCityName
const getCityName = async(cityName) => {
    //    console.log("city", cityName)
       const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`
       const options = { "Content-Type": "application/json" }

        const res = await fetch(endpoint, options)
        const data = await res.json()

        // console.log(data)
        return data
    }
    
//getData
const getData = async(latitude, longitude) => {
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&current_weather=true&timezone=auto`
    const options = { "Content-Type": "application/json" }

    const res = await fetch(endpoint, options)
        const data = await res.json()

        // console.log(data)
        return data
}
export { getCityName, getData }