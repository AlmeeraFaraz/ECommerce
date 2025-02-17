import React from 'react'
import { Link} from "react-router-dom";
import Home  from "./pages/Home";
const App = () => {

  return (
  <div>
     <div className='flex justify-around items-center w-full h-16 border-2 bg-purple-300'>
      <h1 className='text-4xl text-blue-950 font-bold '>LOGO</h1>
      <ul className='flex justify-around gap-4 text-2xl text-fuchsia-950 italic'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
      <button className='bg-fuchsia-950 text-amber-50 h-8 w-24 rounded '>SIGN UP</button>
    </div>

    <Home/>
</div>
  )
}

export default App

