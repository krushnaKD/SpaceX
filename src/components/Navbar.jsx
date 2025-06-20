import React from "react";

const Navbar = () => {
  return (
    <div className="w-ful h-screen p-5 relative">
      <nav className="flex justify-around ">
        <h1 className="w-48 text-4xl font-semibold text-white cursor-pointer">
          SapaceX
        </h1>
        <ul className="flex justify-around items-center w-[70%] text-1xl font-bold text-white uppercase cursor-pointer">
          <li className=" transition delay-150 duration-300 ease-in-out hover:scale-110">
            Falcon9
          </li>
          <li>Falcon Heavy</li>
          <li>DRAGON</li>
          <li>Starship</li>
          <li>Human SpaceFlight</li>
          <li>Starlink</li>
        </ul>
      </nav>
      <div className=" w-98 h-80 p-5 absolute top-[54%] left-30">
        <h2 className="uppercase text-2xl text-white mb-3 tracking-tighter">
          Upcomming Launch
        </h2>
        <h1 className="uppercase text-5xl text-white font-bold tracking-tighter ">
          AX-4 Mission
        </h1>
        <button className="px-10 py-4 border-[3px] border-white text-1xl font-bold text-white outline-none mt-8 transition delay-150 hover:scale-125 hover:bg-white hover:text-black ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Navbar;
