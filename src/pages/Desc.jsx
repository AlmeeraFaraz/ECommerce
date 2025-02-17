import React from 'react'
import product from "../assets";
import { useParams } from 'react-router-dom';

const Desc = () => {
    let { id } = useParams()
    // let [filterProduct] = product.filter((item) => item.id == id)
    console.log(id);

    return (
        <div>
            <h1>{filterProduct.title}</h1>
            <p>{filterProduct.desc}</p>
            <p>Price: {filterProduct.price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Desc
