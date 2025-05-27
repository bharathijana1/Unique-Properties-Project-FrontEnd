import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PageNotFound from './Components/PageNotFound'
import  Services from './Components/Services/Services'
import { AboutMeMainPage } from './Components/About/AboutMeMainPage'
import Home from './Components/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMeMainPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </>
   
  )
}

export default App
