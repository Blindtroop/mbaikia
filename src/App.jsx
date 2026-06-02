import './App.css'
import Hero from './assets/components/HERO/hero'
import Navbar from './assets/components/navbar/navbar'
import ThePromise from './assets/components/promise/promise'
import Manifesto from './assets/components/manifesto/manifesto' 
import MissingChildren from './assets/components/missing/missing'

function App() {
  return (
    <>
    <div className="min-h-screen bg-[#f5f4f0]">
    <Navbar />
    <Hero />
    <ThePromise />
    <Manifesto />
    <MissingChildren />
    </div>
    </>
  )
}

export default App
