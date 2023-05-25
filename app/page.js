import { Suspense } from "react"

//styles
import styles from "app/styles/min/Home.module.css"

//components
import FormInput from "app/components/forminput"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainInput}>
        <Suspense fallback={"Loading..."}><FormInput /></Suspense>
      </div>
    </div>
  )
}
