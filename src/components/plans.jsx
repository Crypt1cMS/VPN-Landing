import './plans.css'
import '../global.css'
import Planimg from '../../public/plan-img.svg'
import Planscheckmark from '../../public/Planscheckmark2.png'

function Plans() {

    return(
        <>
            <section className='plans-container'>

                <div className="plans-heading">
                    <h2>Choose Your Plan</h2>
                    <p>Lets choose the package that is best for you and explore it happily and cheerfully.</p>
                </div>

                <div className="plans-grid">

                    <div className="grid-container">
                        <div className="grid-content">

                            <div className="plans-img-text">
                                <img src={Planimg} alt="Plan Ilustration" />
                                <h3>Free Plan</h3>
                            </div>

                            <ul className='plans-features-list'>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Unlimited Bandwitch</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Encrypted Connection</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>No Traffic Logs</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Works on All Devices</p>
                                </li>

                            </ul>

                            <div className="plans-pricing-button">
                                <h3>Free</h3>
                                <button type='submit'><p>Select</p></button>
                            </div>

                        </div>
                    </div>

                    <div className="grid-container">
                        <div className="grid-content">

                            <div className="plans-img-text">
                                <img src={Planimg} alt="Plan Ilustration" />
                                <h3>Standard Plan</h3>
                            </div>

                            <ul className='plans-features-list'>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Unlimited Bandwitch</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Encrypted Connection</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Yes Traffic Logs</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Works on All Devices</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Connect Anyware</p>
                                </li>

                            </ul>

                            <div className="plans-pricing-button">
                                <h3>$9 <span>/ mo</span></h3>
                                <button type='submit'><p>Select</p></button>
                            </div>

                        </div>
                    </div>

                    <div className="grid-container">
                        <div className="grid-content">

                            <div className="plans-img-text">
                                <img src={Planimg} alt="Plan Ilustration" />
                                <h3>Premium Plan</h3>
                            </div>

                            <ul className='plans-features-list'>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Unlimited Bandwitch</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Encrypted Connection</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Yes Traffic Logs</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Works on All Devices</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Connect Anyware</p>
                                </li>

                                <li>
                                    <img src={Planscheckmark} alt="Check Mark" />
                                    <p>Get New Features</p>
                                </li>

                            </ul>

                            <div className="plans-pricing-button">
                                <h3>$12 <span>/ mo</span></h3>
                                <button type='submit'><p>Select</p></button>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Plans