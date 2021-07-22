import React from 'react'
import Product from "./Product"

function Bevs({products}) {
    const bevs = products.filter(product => product.category === "Beverage")
    return (
        <div>
            <ul  className="products-list">
                {bevs.map(bev => <li key={bev.id}> <Product product={bev}/> </li>)}
            </ul>
        </div>
    )
}

export default Bevs