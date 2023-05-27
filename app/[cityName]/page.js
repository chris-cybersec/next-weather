"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'

//fonts
import { Playfair_Display } from "next/font/google"
const playfairDisplay = Playfair_Display({weight:"400", subsets:["latin"]})

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
                    <p className={playfairDisplay.className}>{name}</p>
                    <p className={playfairDisplay.className}>{country_code}</p>    
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