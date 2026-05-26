import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Notice from './Components/Notice'
import Footer from './Components/Footer'
import { IoCall } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'

const App = () => {
  return (
    <>
      <Router>
        <Notice/>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='https://thedigicoders.com/about' />
          <Route path='https://digicoders.in/Home/SoftwareDevelopment' />
          <Route path='https://thedigicoders.com/registration' />
          <Route path='https://thedigicoders.com/placement' />
          <Route path='https://thedigicoders.com/summer-training' />
          <Route path='https://thedigicoders.com/gallery' />
          <Route path='https://thedigicoders.com/contact' />
        </Routes>
        <Footer/>
        {/* Side floating buttons */}
        <NavLink to='' className='hidden md:block fixed text-white px-2 py-1 bg-orange-600 rotate-90 left-[-57px] top-1/2 -translate-y-1/2 z-30 text-sm font-semibold'>
          Assessment Portal
        </NavLink>
        <NavLink to='' className='hidden md:block fixed text-white px-2 py-1 bg-green-600 rotate-90 right-[-63px] top-1/2 -translate-y-1/2 z-30 text-sm font-semibold'>
          Register For Training
        </NavLink>

        {/* Call & WhatsApp FABs */}
        <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
          <a href="tel:+919198483820"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white text-xl shadow-lg hover:-translate-y-0.5 transition-all">
            <IoCall />
          </a>
          <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white text-xl shadow-lg hover:-translate-y-0.5 transition-all">
            <FaWhatsapp />
          </a>
        </div>
      </Router>

      
    </>
  )
}

export default App