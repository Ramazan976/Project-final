import React, { useState } from "react"

function Header() {

    const [open, setOpen ] = useState(false);

    return (
        <div className="header">
            <div className="head">
            <p className="logo">L</p>
            <h2>Lawliet</h2>
            </div>

            <div className={open ? "link active" : "link" }>
                <a href="#footer">Contact</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#services">About</a>
                <a href="#stats">Terms</a>
                
            <span>
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            </div>
            
            <div className="menu" onClick={() =>setOpen(!open)}>
                ≡
            </div>
            
        </div>
    )
}
export default Header