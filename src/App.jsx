import { Suspense, lazy } from 'react'
import Hero from './components/Hero'
import Differentials from './components/Differentials'
import './App.css'

const Testimonials = lazy(() => import('./components/Testimonials'))
const AmbientsCarousel = lazy(() => import('./components/AmbientsCarousel'))
const Footer = lazy(() => import('./components/Footer'))
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'))

function App() {
  return (
    <div className="font-sans text-neutral-900 antialiased selection:bg-[#C8A951] selection:text-white">
      <Hero />
      <div className="content-visibility-auto">
        <Differentials />
      </div>
      <Suspense fallback={null}>
        <div className="content-visibility-auto">
          <Testimonials />
        </div>
        <div className="content-visibility-auto">
          <AmbientsCarousel />
        </div>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  )
}

export default App
