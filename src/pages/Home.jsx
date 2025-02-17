import React from 'react'
import product from "../assets";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container gap-3 my-10 mx-auto flex flex-wrap justify-center'>
      {
        product.map((products)=>(
          <Link key={products.id} to={`/products/${products.id}`} className='w-[24%] shadow-2xl'>
            <div className='p-6'>
              <h1 className='text-xl font-bold text-center text-blue-950'>{products.title}</h1>
              <p className='text-sm text-slate-800'>{products.desc}</p>
              <p>Price: {products.price}</p>
              <button className='bg-amber-500 text-amber-950 '>Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home
