import React from 'react'
import Product from './Product'

function Misc({products}) {
    const misc = products.filter(product => product.category === "Misc")
    return (
        <div>
            <ul>
                {misc.map(item => <li key={item.id}> <Product product={item}/> </li>)}
            </ul>
        </div>
    )
}

export default Misc
