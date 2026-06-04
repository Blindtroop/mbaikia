import './App.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import Hero2 from './assets/components/HERO/hero2'
import Navbar from './assets/components/navbar/navbar'
import ThePromise from './assets/components/promise/promise'
import Manifesto from './assets/components/manifesto/manifesto'
import MissingChildren from './assets/components/missing/missing'
import Change from './assets/components/change/change'
import Join from './assets/components/join/join'
import Donate from './assets/components/donate/donate'
import Footer from './assets/components/footer/footer'
import Contact from './assets/components/contact/contact'
import Doc from './assets/components/manifesto-doc/doc'

function Homepage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f4f0]">
      <Navbar />
      <Hero2 />
      <ThePromise />
      <Manifesto />
      <MissingChildren />
      <Change />
      <Join onContactOpen={() => setContactOpen(true)} />
      <Donate />
      <Footer onContactOpen={() => setContactOpen(true)} />
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/manifesto" element={<Doc />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;