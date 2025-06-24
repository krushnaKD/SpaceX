import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Falcon from "./components/Falcon";
import { Route, Routes } from "react-router-dom";
import Dragon from "./components/Dragon";

const App = () => {
  return (
    <div className="w-full h-full">
      <Navbar />   {/* Global Navbar visible on every page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/falcon" element={<Falcon />} />
        <Route path="/dragon" element={<Dragon/>}/>
      </Routes>
    </div>
  );
};

export default App;
