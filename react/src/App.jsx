import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./shared/Header.jsx"
import Footer from "./shared/Footer.jsx"
import Head from "./shared/Head.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Head></Head>
        <Header></Header>

        <Footer></Footer>
    </>
  )
}

export default App
