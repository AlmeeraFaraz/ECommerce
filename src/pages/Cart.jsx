import React, { useContext } from 'react'
import { store } from '../components/ContextAPI'
import { Link } from 'react-router-dom'

const Cart = () => {
    let { cartP } = useContext(store)
    return (
        <div>
            {
                cartP.map((item, index) => (
                    <Link key={item.id} to={`/products/${item.id}`}>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <p>Price: {item.price}</p>
                        <button>Add To Cart</button>
                    </Link>
                ))
            }

        </div>
    )
}

export default Cart
