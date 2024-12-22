import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Activities from './activities/index.jsx';
import Head from './shared/Head.jsx';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer'
import Button from './shared/Button'
import { LanguageProvider } from './LanguageContext.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Head></Head>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/activities' element={<Activities />} />
        </Routes>
        <Footer></Footer>
        <Button></Button>
    </div>
  )
}

export default App
