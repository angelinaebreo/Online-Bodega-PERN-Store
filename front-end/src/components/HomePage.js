import React from 'react'
import { Link } from 'react-router-dom'
import door from"../assets/door.jpg"

function HomePage() {
    return (
        <div id="home">
            <div className="door-container">
                <img src={door} alt="store door" height="500px"/>
             
                    <Link to="/products"> 
                    <button>
                    ENTER
                    </button> 
                    </Link>
                   
        
            </div>           
        </div>
    )
}

export default HomePage