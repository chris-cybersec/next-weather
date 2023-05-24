"use client"

import { Suspense } from "react"
import {useRouter} from "next/navigation"
import { useForm } from 'react-hook-form'

//styles
import styles from "app/styles/min/Home.module.css"

//components
import Input from "app/components/nested/input"

const FormInput = async() => {
    const router = useRouter()

    //useForm
    const {register,
        formState: { errors },
        handleSubmit,
        reset} = useForm()

    //submitHandler
    const submitHandler = async(data) => {
        // console.log(data)
        const { cityName } = data
        // console.log(cityName)

        const url = "http://localhost:1122/api/geocoding"
        const options = {
            method: "POST",
            body: JSON.stringify({cityName}),
        }

        const res = await fetch(url, options)
        await res.json()

        router.push(`/${cityName}`)
        
        reset()
    }
    

    return (
        <form className={styles.formInput} action={handleSubmit(submitHandler)} >
            <div className={styles.inputContainer}>
                <div className={styles.input}>
                    <Suspense fallback={"Loading..."}>
                        <Input register={register} />
                    </Suspense>
                </div>
                <button type="submit" className={styles.search}>search</button>
            </div>
        </form>
    )
}

export default FormInput