import React from 'react'
import Product from "./Product"

function Bevs({products}) {
    const bevs = products.filter(product => product.category === "Beverage")
    return (
        <div>
            <ul>
                {bevs.map(bev => <li key={bev.id}> <Product product={bev}/> </li>)}
            </ul>
        </div>
    )
}

export default Bevs