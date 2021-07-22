import React from 'react'
import { Link } from "react-router-dom";


function Product({product}) {
    return (
        <div className="product">
            <p className="prod-row title">{product.name}</p>
            {product.is_popular ? <p className="prod-row best">Best Seller 💫</p> : null}
            <span className="prod-row "><img src={product.img}  alt={product.name} className="prod-pic"/></span>
            <p className="prod-row price">${product.price}</p>   
            <Link to={`/products/${product.id}`} className="prod-row"> <button >View Product</button>  </Link>
            <Link to={`/products/${product.id}/reviews`} className="prod-row"><button>Reviews</button> </Link>      
        </div>
    )
}

export default Product;
