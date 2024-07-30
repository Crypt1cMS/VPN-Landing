import './network.css'
import '../global.css'
import Globalmap from '../../public/Globalmap.svg'
import Netflix from '../../public/Netflix-vpn.svg'
import Reddit from '../../public/reddit-vpn.svg'
import Amazon from '../../public/amazon-vpn.svg'
import Discord from '../../public/discord-vpn.svg'
import Spotify from '../../public/spotify-vpn.png'

function Network() {

    return(
        <>
            <section className='network-container'>

                <div className="network-heading">
                    <h2>Huge Global Network of Fast VPN</h2>
                    <p>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
                </div>

                <div className='network-global-img'>
                    <img src={Globalmap} alt="Global Map" />
                </div>

                <ul className='network-list'>
                    <li>
                        <img src={Netflix} alt="Netflix" />
                    </li>

                    <li>
                        <img src={Reddit} alt="Reddit" />
                    </li>

                    <li>
                        <img src={Amazon} alt="Amazon" />
                    </li>

                    <li>
                        <img src={Discord} alt="Discord" />
                    </li>

                    <li>
                        <img src={Spotify} alt="Spotify" />
                    </li>
                </ul>

            </section>
        </>
    )
}

export default Network