import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
   <div className="bg-[url('/main1.jpg')] bg-cover bg-center h-screen w-full flex pl-28 relative">
      
      <div className="w-[400px] h-[320px] p-5 absolute top-[54%] left-[8%]">
        <h2 className="uppercase text-2xl text-white mb-3 tracking-tighter">
          Upcoming Launch
        </h2>
        <h1 className="uppercase text-5xl text-white font-bold tracking-tighter">
          AX-4 Mission
        </h1>
        <button className="px-10 py-4 border-2 border-white text-lg font-bold text-white mt-8 transition hover:scale-125 hover:bg-white hover:text-black">
          Learn More
        </button>
      </div>

    </div>

  {/* Section 2 - Mars */}
  <div className="bg-[url('/Mars.jpg')] bg-cover bg-center h-[95vh] bg-no-repeat relative">
    <div className="w-[500px] absolute top-[55%] left-28 text-white">
      <h1 className="text-4xl font-bold tracking-wider leading-10">
        THE ROAD TO MAKING <br /> LIFE MULTIPLANETARY
      </h1>
      <button className="px-10 py-3 border-2 border-white text-lg font-semibold mt-8 transition hover:scale-110 hover:bg-white hover:text-black">
        Learn More
      </button>
    </div>
  </div>

  {/* Section 3 - Rocket Launch */}
  <div className="bg-[url('/rocket.jpg')] bg-cover bg-center h-screen relative">
    <div className="w-[500px] absolute top-[55%] left-28 text-white">
      <p className="uppercase">Recent Launch</p>
      <h1 className="text-4xl font-bold tracking-wider leading-10">
        Starship's Ninth <br /> Flight Test
      </h1>
      <button className="px-10 py-3 border-2 border-white text-md font-semibold mt-8 uppercase transition hover:scale-110 hover:bg-white hover:text-black">
        Rewatch
      </button>
    </div>
  </div>

  <Footer />

</>

    // </div>
  );
};

export default Home;
