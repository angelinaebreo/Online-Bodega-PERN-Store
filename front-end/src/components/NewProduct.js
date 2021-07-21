import React from 'react'
import { useState } from 'react'

const NewProduct = ({addProduct}) => {

  
    const [product, setProduct] = useState({
        name:"", 
        price: "", 
        category:"", 
        is_popular: false, 
        img: ""
    });
  
    // const [name, setName] = ''
    // const [price, setPrice] = ''
    // const [category, setCategory] = ''
    // const [is_popular, setIs_popular] = ''
    // const [img_link, setImg_link] = ''
    // const [review, setReview] = ''

    const handleChange_input = (e) => {
        const { value } = e.target
        setProduct({ ...product, [e.target.id]: value });
    }
    const handleChange_is_popular = (e) => {
        setProduct({ ...product, is_popular: !product.is_popular});
    }
    const handleChange_category = (e) => {
        const { value } = e.target
        setProduct({...product, category: value})
    }
    // handleChange_is_popular = (e) => {
    //     const { value } = e.target
    //     setIs_popular(value)
    // }
    
    // const handleChange_review = (e) => {
    //     const { value } = e.target
    //     setReview(value)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(product)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleChange_input}
          placeholder='Product Name'
        //   placeholder="Name of Product"
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          value={product.price}
          placeholder="Price"
          onChange={handleChange_input}
        />
        <label htmlFor="category">Category:</label>
        <select id="category" value={product.category} onChange={handleChange_category} >
        <option value="Beverage">Beverages</option>
  <option value="Misc">Miscellaneous</option>
  <option value="Sandwich">Sandwiches</option>
  <option value="Snacks">Snacks</option>
        </select>


        <label htmlFor="img">Image Link:</label>
        <input
          id="img"
          type="text"
          pattern="http[s]*://.+"
          required
          value={product.img}
          placeholder="http://"
          onChange={handleChange_input}
        />
     
        <label htmlFor="is_popular">Popular?</label>
        <input
          id="is_popular"
          type="checkbox"
          onChange={handleChange_is_popular}
          checked={product.is_popular}
        />
        <br />

        <input type="submit" />
      </form>
            {/* <form>
                <input
                    type='text'
                    placeholder='Product Name'/>
                <input
                    type='text'
                    placeholder='Price'/>
                <input
                    type='text'
                    placeholder='Category'/>
                <input  
                    type='text'
                    placeholder='Favourite' /> */}
                {/* make this a checkbox */}
                {/* <button
                    type='submit'>
                    Submit
                </button>
                                
            </form> */}
        </div>
    )
}

export default NewProduct
