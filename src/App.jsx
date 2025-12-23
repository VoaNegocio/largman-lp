import Hero from './components/Hero'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import AmbientsCarousel from './components/AmbientsCarousel'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="font-sans text-neutral-900 antialiased selection:bg-[#C8A951] selection:text-white">
      <Hero />
      <Differentials />
      <Testimonials />
      <AmbientsCarousel />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
