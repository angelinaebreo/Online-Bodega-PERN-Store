import React from 'react'

function Product({product}) {
    return (
        <div>
            <p>{product.name}</p>
            <img src={product.img}/>
            {product.is_popular ? <p>Best Seller 💫</p> : null}
            <p>${product.price}</p>            
        </div>
    )
}

export default Product
