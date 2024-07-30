import './global.css'
import Nav from './components/nav'
import Hero from './components/hero'
import HeroStats from './components/heroStats'
import Features from './components/herofeatures'
import Plans from './components/plans'
import Network from './components/network'


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
      </div>
    </>
  )
}

export default App
