import React from 'react'

const Dragon = () => {
  return (
    <div className="bg-[url('/humans.jpg')] bg-cover bg-center w-full h-screen relative">
        <div className='w-130 h-[40%] text-white absolute top-30 right-30 '>
            <h1 className='uppercase text-5xl font-semibold'>Taking humans to <br /> space</h1>
            <p className='text-md mt-3 font-light text-zinc-400'>
                In 2020, SpaceX returned America’s ability to fly NASA astronauts to and from <br /> the International Space Station on American vehicles for the first time since <br /> 2011. In addition to flying astronauts to space for NASA, SpaceX’s Dragon <br />   spacecraft can also carry commercial astronauts to Earth orbit, the ISS or <br /> beyond.
            </p>
            <button className="px-8 py-3 border-2 border-white text-lg font-bold text-white mt-8 transition hover:scale-125 hover:bg-white hover:text-black">
          Learn More
        </button>
        </div>
    </div>
  )
}

export default Dragon
