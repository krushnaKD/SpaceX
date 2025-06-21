import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="bg-[url(./public/main1.jpg)] bg-cover bg-center h-screen w-full">
        <Navbar/>
         {/* <div className='w-56'>
          <h1>Upcomming Launch</h1>
          <h1>AX-4 Mission</h1>
          <button className='px-5 py-6 border-[1px] border-white'>Learn More</button>
        </div> */}
        <div className='bg-[url(/Mars.jpg)] bg-cover bg-center h-[95%] bg-no-repeat relative'>
          <div className=' w-[500px]  absolute top-[55%] left-28'>
            <h1 className='text-4xl font-bold text-white tracking-wider leading-10'>THE ROAD TO MAKING <br /> LIFE MULTIPLANETARY</h1>
           <button className="px-10 py-3 border-[2px] border-white text-1xl font-semibold text-white outline-none mt-8 transition delay-120 hover:scale-125 hover:bg-white hover:text-black ">
          Learn More
        </button>
          </div>
        </div>
         <div className='bg-[url(/rocket.jpg)] bg-cover bg-center h-full relative'>
 <div className=' w-[500px]  absolute top-[55%] left-28'>
            <p className='uppercase text-[#fcfdfd]'>Recent Launch</p>
            <h1 className='text-4xl font-bold text-[#ffffff] tracking-wider leading-10'>Starship's Ninth <br />Flight Test</h1>
           <button className="px-10 py-3 border-[2px] border-white text-md font-semibold text-white outline-none mt-8 transition delay-120 hover:scale-125 hover:bg-white hover:text-black uppercase">
          Rewatch
        </button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
