import './nav.css'
import '../global.css'
import Logo from '../../public/VPN-Lasle-logo.svg'

function Nav() {

    return(
        <>
            <nav className='nav-container'>

                <div className="nav-logo">
                    <img src={Logo} alt="Lasle VPN Logo" />
                </div>

                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Help</a></li>
                </ul>

                <div className="signin-login">
                    <a href="#">Log In</a>
                    <a href="#" id='register'>Register</a>
                </div>

            </nav>
        </>
    )
}

export default Nav