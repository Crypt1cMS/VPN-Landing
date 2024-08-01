import './footer.css'
import '../global.css'
import Logo from '../../public/VPN-Lasle-logo.svg'
import Twitter from '../../public/Twitter-footer.svg'
import Facebook from '../../public/Facebook-footer.svg'
import Instagram from '../../public/instagram-footer.svg'

function Footer() {

    return(
        <>
            <footer>
                <div className="footer-wrapper">

                    <div className="footer-newsletter">

                        <div className="newsletter-content">

                            <div className="newsletter-content-left">

                                <div className="newsletter-text">
                                    <h2>Subscribe Now for Get Special Features!</h2>
                                    <p>Lets subscribe with us and find the fun.</p>
                                </div>
                                
                            </div>

                            <div className="newsletter-content-right">
                                <button type='submit'>Subscribe Now!</button>
                            </div>

                        </div>

                    </div>

                    <div className="footer-content">

                        <div className="footer-content-left">

                            <div className="content-VPN-info">
                                <img src={Logo} alt="VPN Logo" />
                                <p><span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                            
                                <div className="VPN-social-media">
                                    <img src={Facebook} alt="Facebook"/>
                                    <img src={Twitter} alt="Twitter"/>
                                    <img src={Instagram} alt="Instagram"/>
                                </div>

                                <p id='stamp'>©2020LaslesVPN</p>
                            </div>

                        </div>

                        <div className="footer-content-right">

                            <div className="footer-lists">

                                <div className="footer-product-list">
                                    <h4>Product</h4>
                                    <ul>
                                        <li><p>Download</p></li>
                                        <li><p>Pricing</p></li>
                                        <li><p>Locations</p></li>
                                        <li><p>Server</p></li>
                                        <li><p>Countries</p></li>
                                        <li><p>Blog</p></li>
                                    </ul>
                                </div>

                                <div className="footer-product-list">
                                    <h4>Engage</h4>
                                    <ul>
                                        <li><p>LaslesVPN</p></li>
                                        <li><p>FAQ</p></li>
                                        <li><p>Tutorials</p></li>
                                        <li><p>About Us</p></li>
                                        <li><p>Privacy Policy</p></li>
                                        <li><p>Terms of Service</p></li>
                                    </ul>
                                </div>

                                <div className="footer-product-list">
                                    <h4>Earn Money</h4>
                                    <ul>
                                        <li><p>Affiliate</p></li>
                                        <li><p>Become Partner</p></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer;