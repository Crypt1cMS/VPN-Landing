import '../global.css'
import './herofeatures.css'
import Imgfeatures from '../../public/Vpn-Illustration 2.svg'
import Checkmark from '../../public/checkmark-vpn.png'

function Features() {

    return(
        <>
            <section className='features-container'>

                <div className="container-left">
                    <img src={Imgfeatures} alt="Features Ilustrutions" />
                </div>

                <div className="container-right">
                    
                    <div className="content-right">

                        <div className='features-heading'>
                            <h2>We Provide Many Features You Can Use</h2>
                            <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                        </div>

                        <ul className='features-list'>

                            <li>
                                <img src={Checkmark} alt="Check Mark" />
                                <p>Powerfull online protection.</p>                            
                            </li>

                            <li>
                                <img src={Checkmark} alt="Check Mark" />
                                <p>Internet without borders.</p>
                            </li>

                            <li>
                                <img src={Checkmark} alt="Check Mark" />
                                <p>Supercharged VPN.</p>
                            </li>

                            <li>
                                <img src={Checkmark} alt="Check Mark" />
                                <p>No specific time limits.</p>    
                            </li>

                        </ul>
                        
                    </div>


                </div>

            </section>
        </>
    )
}

export default Features