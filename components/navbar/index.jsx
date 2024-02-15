"use client";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "../NavLink";
import { navRoutes } from "@/utills/navlink";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full h-20  bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="log"
            width={102}
            height={46}
            priority
            className="cursor-pointer transition-transform duration-300 transform hover:scale-105"
          />
        </Link>
        <div className="hidden md:flex space-x-4 flex-wrap">
          {navRoutes.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-700 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-8 w-full flex flex-col bg-white">
            <div className="transition-transform duration-300 transform scale-y-[1.1] origin-top">
              {navRoutes.map((item, index) => (
                <NavLink
                
                  key={index}
                  href={item.href}
                  className="block px-4 pl-3 py-2 hover:bg-gray-100 items-center text-gray-800 border-b"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;