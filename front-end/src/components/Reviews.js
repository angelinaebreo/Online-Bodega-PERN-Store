import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { apiURL } from '../util/apiURL'

const api = apiURL()

function Reviews() {
    const [reviews , setReviews] = useState([])
    const [newReview, setReview] = useState("")
    let { id } = useParams();

    useEffect(() => {
      axios.get(`${api}/products/${id}/reviews`)
      .then((response)=> setReviews(response.data))
      .catch((e) => console.log(e));
    }, [id])

    const handleText = (event) => {
    setReview(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        // post request ??
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
            <label htmlFor="newReview">Leave a review:</label>
            <textarea id="newReview" onChange={handleText}></textarea>
            </form>
            
        </div>
    )
}

export default Reviews
