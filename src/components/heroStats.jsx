import './heroStats.css'
import '../global.css'
import UserIcon from '../../public/user-icon.png'
import LocationIcon from '../../public/location-icon.png'
import ServerIcon from '../../public/Server.png'

function HeroStats() {

    return(
        <>
            <section className='heroStats-container'>
                
                <div className="heroStats-content-grid">
                    
                    <div className="grid-content" id="grid-divider">
                        <img src={UserIcon} alt="User Icon" />
                        
                        <div className="grid-text">
                            <h3>90+</h3>
                            <p>Users</p>
                        </div>
                    </div>

                    <div className="grid-content" id="grid-divider">
                        <img src={LocationIcon} alt="User Icon" />
                        
                        <div className="grid-text">
                            <h3>30+</h3>
                            <p>Locations</p>
                        </div>
                    </div>

                    <div className="grid-content">
                        <img src={ServerIcon} alt="User Icon" />
                        
                        <div className="grid-text">
                            <h3>50+</h3>
                            <p>Servers</p>
                        </div>
                    </div>

                </div>

                <div className="heroStats-background"></div>
                            
            </section>        
        </>
    )
}

export default HeroStats