import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';
import { apiURL } from '../util/apiURL';
import { Link } from "react-router-dom";

const API = apiURL()

function ProductView({deleteProduct}) {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
      axios
        .get(`${API}/products/${id}`)
        .then((response) => setProduct(response.data.payload))
        .catch((e) => console.log(e));
    }, [id]);

    return (
        <div id="show-container">
              {product.is_popular ? <p className="best">Best Seller 💫</p> : null}
            <h1 className="prod-row">{product.name}</h1>
          
            <span className="prod-row"><img src={product.img} alt={product.name} className="prod-pic "/></span>
            <p className="prod-row show-price">${product.price}</p>
            <Link to={`/products/${id}/reviews`}><button>Reviews</button>  </Link>
            <button onClick={() => deleteProduct(id)}>Delete</button>
            <Link to={`/products/${id}/edit`}> <button>Edit</button></Link>
            <Link to={`/products/`}> <button>Back to Products</button></Link>
        </div>
    )
}

export default ProductView
