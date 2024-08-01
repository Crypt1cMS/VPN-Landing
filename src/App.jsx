import './global.css'
import Nav from './components/nav'
import Hero from './components/hero'
import HeroStats from './components/heroStats'
import Features from './components/herofeatures'
import Plans from './components/plans'
import Network from './components/network'
import Testimonials from './components/testimonials'
import Newsletter from './components/newsletter'
import Footer from './components/footer'


function App() {

  return (
    <>
      <div id="main-wrapper">
        <Nav/>
          <Hero/>
            <HeroStats/>
              <Features/>
              <Plans/>
            <Network/>
          <Testimonials/>
        <Newsletter/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
