import './hero.css'
import '../global.css'
import Heroimg from '../../public/VPN-Hero.svg'

function Hero() {
    
    return(
        <>
            <div className="hero-container">

                <div className="hero-content-left">

                    <div className="hero-left-text">
                        <h1>Want anything to be easy with <span>LaslesVPN</span>.</h1>
                        <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                        <button type='submit'>Get Started</button>
                    </div>

                </div>

                <div className="hero-content-right">
                    <img src={Heroimg} alt="Hero Image" draggable="false" />
                </div>

            </div>
        
        </>

    )
}

export default Hero