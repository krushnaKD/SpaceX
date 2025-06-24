import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-5 absolute top-0 w-full z-50">
      <Link to="/" className="w-48 text-4xl font-semibold text-white cursor-pointer">
        SpaceX
      </Link>

      <ul className="flex justify-around items-center w-[70%] text-lg font-bold text-white uppercase cursor-pointer">
        <li className="transition hover:scale-110">
          <Link to="/falcon">Falcon 9</Link>
        </li>
        <li className="transition hover:scale-110">Falcon Heavy</li>
        <Link to="/dragon" className="transition hover:scale-110">Dragon</Link>
        <li className="transition hover:scale-110">Starship</li>
      </ul>
    </nav>
  );
};

export default Navbar;
