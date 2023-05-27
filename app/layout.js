import './globals.css'

//styles
import styles from "app/styles/min/Root.module.css"

//components
import HeaderTop from 'app/components/header'
import Footer from 'app/components/footer'

export const metadata = {
  title: 'next-weather || chris-cybersec.dev',
  description: 'This is my next generation Weather App.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <header><HeaderTop /></header>
          <main>{children}</main>
          <footer><Footer /></footer>
        </div>
      </body>
    </html>
  )
}
