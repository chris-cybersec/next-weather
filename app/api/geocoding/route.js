import { NextResponse } from "next/server";

export const POST = async(request) => {
    const { cityName } = await request.json()
    // console.log(`cityName:----- ${cityName}`)

    const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`
    const options = {
        headers: { "Content-Type": "application/json" }
    }

    const res = await fetch(endpoint, options)
    const data = await res.json()

    // console.log(data.results)

    return NextResponse.json(data.results)
}