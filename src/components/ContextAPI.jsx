import React from "react";
import { createContext, useState } from 'react'

let store= createContext()

const ContextAPI = ({children}) => {
    let [count, setCount]= useState(0)
    let [cartP, setCartP]=useState([])
    console.log(cartP)
    let values={count, setCount, cartP, setCartP}
  return (
    <store.Provider value={values}>
        {children}
    </store.Provider>
  )
}

export {ContextAPI, store}
