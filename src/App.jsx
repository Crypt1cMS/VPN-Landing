import './global.css'
import Nav from './components/nav'
import Hero from './components/hero'
import HeroStats from './components/heroStats'
import Features from './components/herofeatures'


function App() {

  return (
    <>
      <div id="main-wrapper">
        <Nav/>
          <Hero/>
            <HeroStats/>
              <Features/>
      </div>
    </>
  )
}

export default App
