import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Header() {
  return (
    <nav className="border-gray-200 backdrop-blur-md bg-white bg-opacity-10 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center ">
          <span className="self-center md:text-3xl text-3xl font-mono  font-semibold whitespace-nowrap text-yellow-500">
            ByteBattle
          </span>
        </Link>

        <div className="lg:gap-10 flex text-yellow-400 flex-row">
          <Link href='/' className="relative hidden  md:flex items-center gap-2 font-normal lg:text-lg text-white group">
            <p className="relative transition-colors duration-300 group-hover:text-yellow-500">
              <span className="absolute inset-0 w-0 overflow-hidden text-yellow-500 transition-all duration-300 group-hover:w-full">
                Home
              </span>
              Home
            </p>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/registration"
            className="relative flex items-center gap-2 font-normal lg:text-lg text-white group"
          >
            <p className="relative flex flex-row items-center transition-colors duration-300 group-hover:text-yellow-500">
              <span className="absolute inset-0 w-0 overflow-hidden text-yellow-500 transition-all duration-300 group-hover:w-full">
                Registration &nbsp; <FaArrowRightLong className='mt-1' />
              </span>
              Registration &nbsp; <FaArrowRightLong className='mt-1'/>
            </p>
            
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
