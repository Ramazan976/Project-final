import React from "react"

function Stats() {
    return (
        <div className="stats">
            <img src="src/assets/BG.png" className="BG" />

            <div className="stats-text">
            <h1 className="stats-head">Some count that matters</h1>
            <p className="stats-2">Our achievement in the journey depicted in numbers</p>
            
            <div className="stats-about">
            
            <div className="stats-num">
            <p className="num">30</p>
            <p>Clients</p>
            </div>
            <div className="stats-num-2">
            <p className="num">300+</p>
            <p> Taken business legalities</p>
            </div>
            <div className="stats-num">
            <p className="num">8</p>
            <p> Years of Journey</p>
            </div>

            </div>
            
            </div>

        </div>
    )
}
export default Stats