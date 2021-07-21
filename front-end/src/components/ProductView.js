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
        .then((response) => setProduct(response.data))
        .catch((e) => console.log(e));
    }, [id]);

    return (
        <div>
            <p>{product.name}</p>
            <img src="product.img" alt={product.name}/>
            <p>{product.price}</p>
            <button>Reviews</button>  
            <button onClick={() => deleteProduct(id)}>Delete</button>
            <Link to={`products/${id}/edit`}> <button>Edit</button></Link>
        </div>
    )
}

export default ProductView
