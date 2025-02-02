import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Activities from './activities/index.jsx';
import ShowActivity from "./activities/show.jsx";
import CreateActivity from './activities/create.jsx';
import DeleteActivity from './activities/delete.jsx';
import Head from './shared/Head.jsx';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer'
import Button from './shared/Button'
import { LanguageProvider } from './LanguageContext.jsx';
import Accommodations from './Accommodations/index.jsx';
import Contact from './Contact/index.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Head></Head>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/activities/show/' element={<ShowActivity />} />
          <Route path='/activities/create' element={<CreateActivity />} />
          <Route path='/activities/delete/' element={<DeleteActivity/>}/>
          <Route path='/accommodations' element={<Accommodations />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer></Footer>
        <Button></Button>
    </div>
  )
}

export default App
