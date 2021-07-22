import React from 'react'
import Product from './Product'

function Misc({products}) {
    const misc = products.filter(product => product.category === "Mischellaneous")
    return (
        <div className="products-container">
        <ul  className="products-list">
                {misc.map(item => <li key={item.id}> <Product product={item}/> </li>)}
            </ul>
        </div>
    )
}

export default Misc
