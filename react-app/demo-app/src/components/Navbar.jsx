import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-purple-600 p-4 flex justify-between items-center'>
      Books App
      <div className='hamburger hover:border cursor-pointer md:hidden	'>
        <div className="line h-0.5 w-6 bg-black m-2 "></div>
        <div className="line h-0.5 w-6 bg-black m-2"></div>
        <div className="line h-0.5 w-6 bg-black m-2"></div>
      </div>

      <ul className=' space-x-4 hidden md:flex'>
        <Link to='/movie' className='cursor-pointer hover:text-white hover:underline-offset-8 hover:underline'>Movie</Link>
        <Link to='/resturant' className='cursor-pointer hover:text-white hover:underline-offset-8 hover:underline'>Resturant</Link>
        <li className='cursor-pointer hover:text-white hover:underline-offset-8 hover:underline'>Login</li>
        <li className='cursor-pointer hover:text-white hover:underline-offset-8 hover:underline'>Signup</li>
      </ul>
      
    </div>
  )
}

export default Navbar