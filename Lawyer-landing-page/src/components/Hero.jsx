import React from "react"


function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
            <p className="text-new"><button>New</button> Stay connected to the upcoming & Recent jobs</p>
            <h1>Your Solution Legal Consultacy</h1>
            <p className="text-3">We are here to help you take care of yout legality with the best service especially for you.</p>
            <button className="started">GET STARTED</button>
            <p className="text-2">Trusted by 10+ companies in indonesia</p>
            <div className="logo-company">
            <img src="src/assets/Airbnb Logo.png" className="comp" />
            <img src="src/assets/Google Logo.png" className="comp" />
            <img src="src/assets/Hubspot Logo.png" className="comp"  />
            <img src="src/assets/Microsoft Logo.png"  className="comp" />
            </div>
            </div>

            <div className="images">
            <img src="src/assets/Ellipse 1.png" className="circle-1"/>
            <img src="src/assets/Ellipse 2 (1).png" className="circle" />
            <img src="src/assets/creating.png" className="person"/>
            <div className="about">
            <p className="name">Tiara Andini</p>
            <p className="specialist">-Lawyer</p>
            </div>
            </div>
        </div>
    )
}
export default Hero