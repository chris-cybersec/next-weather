// "use server"
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

export { getCityName }