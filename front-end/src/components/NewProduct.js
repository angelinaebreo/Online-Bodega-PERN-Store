import React from 'react'

const NewProduct = () => {
    const [name, setName] = ''
    const [price, setPrice] = ''
    const [category, setCategory] = ''
    const [is_popular, setIs_popular] = ''
    const [img_link, setImg_link] = ''
    const [review, setReview] = ''

    const handleChange_name = (e) => {
        const { value } = e.target
        setName(value)
    }
    const handleChange_price = (e) => {
        const { value } = e.target
        setPrice(value)
    }
    const handleChange_category = (e) => {
        const { value } = e.target
        setCategory(value)
    }
    // handleChange_is_popular = (e) => {
    //     const { value } = e.target
    //     setIs_popular(value)
    // }
    
    const handleChange_review = (e) => {
        const { value } = e.target
        setReview(value)
    }
    
    const handleSubmit = (e) => {

    }
    return (
        <div>
            <form>
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
                    placeholder='Favourite' />
                {/* make this a checkbox */}
                <button
                    type='submit'>
                    Submit
                </button>
                                
            </form>
        </div>
    )
}

export default NewProduct
