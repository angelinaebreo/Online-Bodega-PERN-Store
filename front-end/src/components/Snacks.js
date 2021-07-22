import React from 'react'
import Product from './Product'

function Snacks({products}) {
    const snacks = products.filter(product => product.category === "Snacks")
    return (
        <div className="products-container">
        <ul  className="products-list">
                {snacks.map(snack => <li key={snack.id}> <Product product={snack}/> </li>)}
            </ul>
        </div>
    )
}

export default Snacks
