import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="md:hidden bg-black flex fixed justify-center bottom-5 left-0 right-0 mx-auto z-50 w-3/4 max-w-[50rem] p-4 rounded-full outline outline-1 outline-purple-300">
        <div className="flex justify-evenly w-full items-center ">
          <Link href="/" className="hover:font-bold">
            Home
          </Link>
          <Link href="/#research" className="hover:font-bold">
            Research
          </Link>
          <Link href="/#contact" className="hover:font-bold">
            Contact
          </Link>
        </div>
      </div>    
      <div className="hidden lg:visible bg-black md:flex fixed justify-center top-5 left-0 right-0 mx-auto z-50 w-3/4 max-w-[50rem] p-4 rounded-full outline outline-1 outline-purple-300">
        <div className="flex justify-evenly w-full items-center ">
          <Link href="/" className="hover:font-bold">
            Home
          </Link>
          <Link href="/#research" className="hover:font-bold">
            Research
          </Link>
          <Link href="/#contact" className="hover:font-bold">
            Contact
          </Link>
        </div>
      </div>    
    </>

  );
};

export default NavBar;
