import './testimonials.css'
import '../global.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Profileimg1 from '../../public/profile-1-vpn.svg'
import Star from '../../public/Star-vpn.svg'
import Profileimg2 from '../../public/profile-2-vpn.svg'
import Profileimg3 from '../../public/profile-3-vpn.svg'

function Testimonials() {

    return(
        <>
            <section className='testimonials-container'>

                <div className="testimonials-heading">
                    <h2>Trusted by Thousands of Happy Customer</h2>
                    <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                </div>

                <div className="swiper-main-container">


                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={150}
                        slidesPerView={1}
                        autoplay={true}
                        pagination={{ clickable: true }}
                    >

                    <SwiperSlide>

                        <div className="testimonial-container">

                            <div className="testimonial-profile-container">

                                <div className="profile-container">  
                                    <div className="testimonial-profile-img">
                                        <img src={Profileimg1} alt="Profile Image" />
                                    </div>

                                    <div className="testimonial-profile-text">
                                        <h4>Viezh Robert</h4>
                                        <p>Warsaw, Poland</p>
                                    </div>
                                </div>

                                <div className="testimonial-profile-rating">
                                    <p>4.5</p>
                                    <img src={Star} alt="Star" />
                                </div>

                            </div>
                            
                            <div className="swiper-testimonial">
                                <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="testimonial-container">

                            <div className="testimonial-profile-container">

                                <div className="profile-container">  
                                    <div className="testimonial-profile-img">
                                        <img src={Profileimg2} alt="Profile Image" />
                                    </div>

                                    <div className="testimonial-profile-text">
                                        <h4>Yessica Christy</h4>
                                        <p>Shanxi, China</p>
                                    </div>
                                </div>

                                <div className="testimonial-profile-rating">
                                    <p>5</p>
                                    <img src={Star} alt="Star" />
                                </div>

                            </div>
                            
                            <div className="swiper-testimonial">
                                <p>“I like it because I like to travel far and still can connect with high speed”.</p>
                            </div>

                        </div>

                    </SwiperSlide>

                    <SwiperSlide>

                        <div className="testimonial-container">

                            <div className="testimonial-profile-container">

                                <div className="profile-container">  
                                    <div className="testimonial-profile-img">
                                        <img src={Profileimg3} alt="Profile Image" />
                                    </div>

                                    <div className="testimonial-profile-text">
                                        <h4>Kim Young Jou</h4>
                                        <p>Seoul, South Korea</p>
                                    </div>
                                </div>

                                <div className="testimonial-profile-rating">
                                    <p>4.9</p>
                                    <img src={Star} alt="Star" />
                                </div>

                            </div>
                            
                            <div className="swiper-testimonial">
                                <p>“This is very unusual for my business that currently requires a virtual private network that has high security”.</p>
                            </div>

                        </div>

                    </SwiperSlide>

                </Swiper>

                </div>

            </section>
        </>
    )
}

export default Testimonials;