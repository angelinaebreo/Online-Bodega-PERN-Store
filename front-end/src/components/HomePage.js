import React from 'react'
import door from"../assets/door.jpg"

function HomePage() {
    return (
        <div id="home">
            <div className="door-container">
                <img src={door} alt="store door" height="500px"/>
                <button>ENTER</button>
            </div>
           
        </div>
    )
}

export default HomePage
