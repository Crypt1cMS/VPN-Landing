import './nav.css'
import '../global.css'
import Logo from '../../public/VPN-Lasle-logo.svg'

function Nav() {

    return(
        <>
            <nav className='nav-container'>

                <div className="nav-content">

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

                </div>

                <div className="nav-burger-menu" id='open-ham-menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="25px" width="25px"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </div>

            </nav>

            <section className='ham-menu-off-screen'>

                <div className="x-ham-menu" id='close-ham-menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="25px" width="25px"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                </div>

                <ul>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                
            </section>
        </>
    )
}

export default Nav