"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'

//styles
import styles from "app/styles/min/CityName.module.css"

//components
import { getCityName } from 'app/configs/get-data'

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
            <Link href={`/results/${name}/${latitude}/${longitude}`} key={id} className={styles.container}>
                <div className={styles.content}>
                    <p>{name}</p>
                    <p>{country_code}</p>    
                </div>
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