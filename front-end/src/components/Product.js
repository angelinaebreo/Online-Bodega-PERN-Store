import React from 'react'
import { Link } from "react-router-dom";


function Product({product}) {
    return (
        <div className="product">
            <p className="prod-row">{product.name}</p>
            <img src={product.img}  alt={product.name} className="prod-row prod-pic"/>
            {product.is_popular ? <p className="prod-row">Best Seller 💫</p> : null}
            <p className="prod-row">${product.price}</p>   
            <Link to={`/products/${product.id}`}> <button className="prod-row">View Product</button>  </Link>
            <Link to={`/products/${product.id}/reviews`}><button>Reviews</button> </Link>      
        </div>
    )
}

export default Product;
