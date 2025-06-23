import React from 'react'

const Falcon = () => {
  return (
    <div className='bg-[url(/Merlin.jpg)] w-full h-screen bg-cover bg-center p-26'>
       <div className='w-[600px] h-[500px]  flex flex-col '>
         <h2 className='uppercase text-white font-semibold tracking-tight'>Engines</h2>
         <h1 className='uppercase text-5xl -tracking-[2px] text-white font-semibold ml-2'>Merlin</h1>
         <div className='flex uppercase mt-10 gap-5'>
            <h2 className='text-gray-200 text-xl'>sea level</h2>
            <h2 className='text-zinc-700 text-xl tracking-tighter border-l-2 border-gray-500 pl-5'>vacuum</h2>
         </div>
         <p className='text-zinc-200 font-thin mt-10 ml-2'>Merlin is a family of rocket engines developed by SpaceX for use on its Falcon <br /> 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket <br /> grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator <br /> power  cycle. The Merlin engine was originally designed for recovery and reuse.</p>
         <div className='border-b-[1px] border-zinc-700 w-[100%] mt-10 pb-5 flex justify-between p-5'>
            <h2 className='text-zinc-200 uppercase text-lg '>Propellent</h2>
            <h2 className='text-lg text-zinc-200'>Lox <span className='text-zinc-500 text-lg'>/RP-1</span></h2>
         </div>
          <div className='border-b-[1px] border-zinc-700 w-[100%] mt-2 pb-5 flex justify-between p-5'>
            <h2 className='text-zinc-200 uppercase text-lg '>Thrust</h2>
            <h2 className='text-lg text-zinc-200'>845 kN <span className='text-zinc-500 text-lg'>/190,000 lbf</span></h2>
         </div>
       </div>
    </div>
  )
}

export default Falcon
