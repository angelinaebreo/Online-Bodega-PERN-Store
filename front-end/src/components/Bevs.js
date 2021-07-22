import React from 'react'
import Product from "./Product"

function Bevs({products}) {
    const bevs = products.filter(product => product.category === "Beverage")
    return (
        // <div className="products-list">
        <div className="products-container">
            <ul  className="products-list">
                {bevs.map(bev => <li key={bev.id}> <Product product={bev}/> </li>)}
            </ul>
        </div>
    )
}

export default Bevs