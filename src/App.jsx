import './App.css'
import Hero2 from './assets/components/HERO/hero2'
import Navbar from './assets/components/navbar/navbar'
import ThePromise from './assets/components/promise/promise'
import Manifesto from './assets/components/manifesto/manifesto' 
import MissingChildren from './assets/components/missing/missing'
import Change from './assets/components/change/change'
import Join from './assets/components/join/join'
import Footer from './assets/components/footer/footer'

function App() {
  return (
    <>
    <div className="min-h-screen overflow-x-hidden bg-[#f5f4f0]">
    <Navbar />
    <Hero2 />
    <ThePromise />
    <Manifesto />
    <MissingChildren />
    <Change />
    <Join />
    <Footer />
    </div>
    </>
  )
}

export default App
