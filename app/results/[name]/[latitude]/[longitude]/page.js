"use client"

import { getData } from "app/configs/get-data"
import { useParams } from "next/navigation"

import { Suspense } from "react"

//fonts
import { Playfair_Display, Lora } from "next/font/google"
const playFairDisplay = Playfair_Display({weight: "400", subsets: ["latin"]})
const lora = Lora({weight: "400", subsets:["latin"]})

//styles
import styles from "app/styles/min/Result.module.css"

//components
import Current from "app/results/current"
import Hourly from "app/results/hourly"
import Daily from "app/results/daily"


const Result = async() => {
    const params = useParams()
    const { name, latitude, longitude } = params
    // console.log(params)

    //getData
    const myData = await getData(latitude, longitude)
    
    return (
        <div className={styles.container}>
            <div className={styles.title}><div className={lora.className}>{name}</div></div>
            <div className={styles.currentContainer}>
                <Suspense fallback={"Loading..."}><Current currentData={myData.current_weather}/></Suspense>
            </div>
            <div className={styles.hourlyContainer}>
                <Suspense fallback={"Loading..."}><Hourly myData={myData} /></Suspense>
            </div>
            <div className={styles.dailyContainer}>
                <Suspense fallback={"Loading..."}><Daily myData={myData} /></Suspense>
            </div>
        </div>
    )
}
{/* latitude: {latitude}
<p>longitude: {longitude}</p>
<p>{name}</p> */}

export default Result