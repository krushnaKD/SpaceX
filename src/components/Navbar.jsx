import React from 'react'

const Navbar = () => {
  return (
    <div className='w-ful h-screen '>
      <nav className='flex justify-around '>
        <h1 className='w-48 text-4xl font-semibold text-white'>SapaceX</h1>
         <ul className='flex justify-around items-center w-[70%] text-1xl font-bold text-white uppercase'>
            <li>Falcon9</li>
            <li>Falcon Heavy</li>
            <li>DRAGON</li>
            <li>Starship</li>
            <li>Human SpaceFlight</li>
            <li>Starlink</li>
         </ul>
      </nav>
    </div>
  )
}

export default Navbar
