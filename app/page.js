//styles
import styles from "app/styles/min/Home.module.css"
import { Suspense } from "react"
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
