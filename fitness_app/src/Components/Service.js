import React from 'react'
import '../Styles/Service.css'

const Service = () => {
    return (
        <div className="service-fragment" >
            <br /><br />
            <div className="service-area">
                <div className="top-service-content" id='service'>
                    <div className="top-left-serivce-content">
                        <div className="service-title">____ OUR SERVICES FOR YOU</div>
                        PUSH YOUR LIMITS FORWARD WE OffER TO YOU
                    </div>

                    <div className="more-service-btn">
                        MORE SERVICES
                    </div>
                </div>

                <div className="service-card">
                    <div className="single-card card1">
                        <div className="service-icon"><i class="fa-solid fa-dumbbell fa-2xl"></i></div>
                        <div className="service-card-title">QUALITY EQUIPMENT</div>
                        <div className="service-card-content">
                            The sea freight service has grown consider ably in recent years. We spend timetting to kn.
                        </div>
                        <div className="service-hover-msg">
                            DISCOVER MORE ABOUT US
                            <br /> <i class="fa-solid fa-right-long fa-2xl"></i>
                        </div>
                    </div>

                    <div className="single-card card2">
                        <div className="service-icon"><i class="fa-solid fa-hand-holding-heart fa-2xl"></i></div>
                        <div className="service-card-title">HEALTH CARING</div>
                        <div className="service-card-content">
                            The sea freight service has grown consider ably in recent years. We spend timetting to kn.
                        </div>
                        <div className="service-hover-msg">
                            DISCOVER MORE ABOUT US
                            <br /> <i class="fa-solid fa-right-long fa-2xl"></i>

                        </div>
                    </div>

                    <div className="single-card card3">
                        <div className="service-icon"><i class="fa-solid fa-bullseye fa-2xl"></i></div>
                        <div className="service-card-title">GYM STRATEGIES</div>
                        <div className="service-card-content">
                            The sea freight service has grown consider ably in recent years. We spend timetting to kn.
                        </div>
                        <div className="service-hover-msg">
                            DISCOVER MORE ABOUT US
                            <br /> <i class="fa-solid fa-right-long fa-2xl"></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service