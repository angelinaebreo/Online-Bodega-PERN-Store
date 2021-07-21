import React from 'react'


function Product({product}) {
    return (
        <div className="product">
            <p className="prod-row">{product.name}</p>
            <img src={product.img}  alt={product.name} className="prod-row"/>
            {product.is_popular ? <p className="prod-row">Best Seller 💫</p> : null}
            <p className="prod-row">${product.price}</p>   
            <button className="prod-row">View Product</button>         
        </div>
    )
}

export default Product;
