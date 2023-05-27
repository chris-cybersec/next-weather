"use client"

import { getData } from "app/configs/get-data"
import { useParams } from "next/navigation"

import { Suspense } from "react"

//fonts
import { Lora, Raleway } from "next/font/google"
const lora = Lora({weight: "400", subsets:["latin"]})
const raleway = Raleway({weight: "100", subsets:["latin"]})

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
                <div className={styles.scrollMe}><span>«</span>&nbsp;<span className={raleway.className}>scroll</span>&nbsp;<span>»</span></div>
               <div><Suspense fallback={"Loading..."}><Hourly myData={myData} /></Suspense></div> 
            </div>
            <div className={styles.dailyContainer}>
                <div className={styles.scrollMe}><span>«</span>&nbsp;<span className={raleway.className}>scroll</span>&nbsp;<span>»</span></div>
                <Suspense fallback={"Loading..."}><Daily myData={myData} /></Suspense>
            </div>
        </div>
    )
}

export default Result