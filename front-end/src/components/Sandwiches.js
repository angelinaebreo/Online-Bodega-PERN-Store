import React from 'react'
import Product from './Product'

function Sandwiches({products}) {
    const sandwiches = products.filter(product => product.category === "Sandwhich")
    return (
        <div className="products-list">
            <ul>
                {sandwiches.map(sandwich => <li key={sandwich.id}> <Product product={sandwich}/> </li>)}
            </ul>
        </div>
    )
}

export default Sandwiches
