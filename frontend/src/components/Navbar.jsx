import React, { useState } from "react";
import { Assets } from "../assets/Assets";
import { CiGlobe } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";


const Navbar = ({setloginsetter}) => {
  const [menu, setmenu] = useState("Stays");
  const [navmenu,setnavmenu]=useState(false);
  


  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-[1000]  py-2 flex items-center justify-between px-4">
      <div className="logo-container w-36">
        <img
          className="w-[100%] hover:grayscale-[100%] cursor-pointer"
          src={Assets.logo}
          alt="Airbnb Logo"
        />
      </div>
      <div className="hidden md:flex text-container gap-6">
        <p
          className={`cursor-pointer ${
            menu === "Stays" ? "text-black font-semibold" : ""
          }`}
          onClick={() => setmenu("Stays")}
        >
          Stays
        </p>
        <p
          className={`cursor-pointer ${
            menu === "Experiences" ? "text-black font-semibold" : ""
          }`}
          onClick={() => setmenu("Experiences")}
        >
          Experiences
        </p>
      </div>
      <div className="relative flex items-center gap-4 z-[1100]">
        <p className="hidden md:block text-sm font-semibold">Airbnb Your Home</p>
        <CiGlobe className="text-lg" />
        <div onClick={()=>setnavmenu(prev=>!prev)} className="icons-container flex p-2 border border-[#c0c0c0] rounded-lg items-center gap-2 group relative z-[1200]">
          <IoMenu className="text-lg" />
          <FaCircleUser className="text-lg" />
          {navmenu?<div   className={` text-container fixed top-[60px] right-0  hover:group-flex flex-col gap-3  bg-white z-[9999] rounded-lg shadow-lg p-4 w-[200px] transition-all duration-300 ease-in-out  `}>
            <p onClick={()=>setsignupsetter(prev=>!prev)} className="hover:text-blue-600 cursor-pointer py-1">Sign Up</p>
            <p  onClick={()=>setloginsetter(prev=>!prev)} className="hover:text-blue-600 cursor-pointer py-1">Login</p>
            <div className="w-full h-[1px] bg-[#d0d0d0] my-2 relative z-[9999]"></div>
            <p className="hover:text-blue-600 cursor-pointer py-1">Airbnb Your Home</p>
            <p className="hover:text-blue-600 cursor-pointer py-1">Host An Experience</p>
            <p className="hover:text-blue-600 cursor-pointer py-1">Help Center</p>
          </div>:""}
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
