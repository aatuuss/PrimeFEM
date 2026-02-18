import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
// import Footer from './Components/Footer'
import Home from './Apps/Home'
import About from './Apps/About'
import Contact from './Apps/Contact'
import SimulasiFea from './Apps/simulasifea'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'

function HomePage() {
  return (
    <>
      {/* 
        Hero Section (Home) 
        position: sticky allows it to stick to the top while the next content scrolls over it.
        top-0: sticks to the top.
        z-0: sits behind the About section.
        h-screen: takes up full viewport height.
      */}
      <div id="home" className="sticky top-0 z-0 h-[100dvh] w-full scroll-mt-24">
        <Home />
      </div>

      {/* 
        About Section
        It naturally flows after the Home div.
        Because Home is sticky, About will scroll 'over' it.
        We add z-10 (or higher inside About) to ensure it covers Home.
      */}
      <div id="about" className="relative z-10 mt-[20vh] md:mt-[30vh] scroll-mt-24">
        <About />
      </div>
    </>
  )
}

function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
      {/* <SimulasiFea /> */}
      {/* <Footer /> */}
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans antialiased text-gray-900 bg-black">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/simulasifea" element={<SimulasiFea />} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App
