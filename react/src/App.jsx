import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Activities from './activities/index.jsx';
import ShowActivity from "./activities/show.jsx";
import CreateActivity from './activities/create.jsx';
import EditActivity from './activities/edit.jsx';
import DeleteActivity from './activities/delete.jsx';
import Head from './shared/Head.jsx';
import Header from './shared/Header.jsx';
import Footer from './shared/Footer'
import Button from './shared/Button'
import Accommodations from './accommodations/index.jsx';
import CreateAccommodations from './accommodations/create.jsx';
import EditAccommodations from './accommodations/edit.jsx';
import Contact from './Contact/index.jsx';
import NotFound from './NotFound.jsx';
import ShowAccommodation from './accommodations/show.jsx';
import DeleteAccommodation from './accommodations/delete.jsx';


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
          <Route path='/activities/edit/' element={<EditActivity />} />
          <Route path='/activities/delete/' element={<DeleteActivity/>}/>
          <Route path='/accommodations' element={<Accommodations />} />
          <Route path='/accommodations/create' element={<CreateAccommodations />} />
          <Route path='/accommodations/edit/' element={<EditAccommodations/>} />
          <Route path='/accommodations/show/' element={<ShowAccommodation/>}/>
          <Route path='/accommodations/delete/' element={<DeleteAccommodation/>}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<NotFound/>}/>
        </Routes>
        <Footer></Footer>
        <Button></Button>
    </div>
  )
}

export default App
