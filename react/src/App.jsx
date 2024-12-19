import { useState } from 'react'
import './App.css'
import "./index.css"
import Header from "./shared/Header"
import Footer from "./shared/Footer"
import Head from "./shared/Head"
import Button from './shared/Button'
import { LanguageProvider } from './LanguageContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider >
        <Head></Head>
        <Header></Header>
        <Footer></Footer>
        <Button></Button>
      </LanguageProvider>
    </>
  )
}

export default App
