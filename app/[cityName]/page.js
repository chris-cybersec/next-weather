"use client"

import { useParams } from 'next/navigation'
import React from 'react'

//components
import { getCityName } from 'app/configs/get-data'
import Link from 'next/link'

const CityResult = async() => {
    const params = useParams()
    const {cityName} = params

    //getcityName
    const data = await getCityName(cityName)

    const myData = data.results.map(item => {
        // console.log(item)
        const { id, name, latitude, longitude, country_code } = item
        // console.log(id)
        return(
            <Link href={`/results/${latitude}/${longitude}`} key={id}>
                <p>{name}</p>
                <p>{country_code}</p>    
            </Link>
        )
    })
    

    return (
        <div>
            {myData}
        </div>
    )
}

export default CityResult