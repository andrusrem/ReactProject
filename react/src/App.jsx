import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./shared/Header.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
