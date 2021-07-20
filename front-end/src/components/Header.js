import React from 'react'
import cat from "../assets/cat.png"

function Header() {
    return (
        <div id="header">
            <h1>ONLINE BODEGA</h1>
            <img src={cat} alt="bodega cat" id="cat-pic" width="200px"/>
        </div>
    )
}

export default Header
