"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const getLinkClass = (path: string) =>
    pathname === path
      ? "text-slate-950 bg-blue-50 xl:mx-7 lg:mx-1 mx-0 px-4 py-[0.4rem] rounded-lg hover:scale-105 transition duration-500"
      : "text-blue-50 xl:mx-7 lg:mx-1 mx-0 px-4 py-[0.4rem] rounded-lg hover:scale-105 transition duration-500";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <nav
        // onClick={() => setShowDropdown(false)}
        className="bg-bg1 text-white shadow-lg"
      >
        <div className="container flex flex-row justify-between items-center py-2 px-6 pl-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/Logo.png"
              alt="GradGo Logo"
              width={50}
              height={50}
              className="rounded-[40%]"
            />
            {/* <span className="font-bold text-lg px-1">GradGo</span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:contents xl:text-[1rem] md:text-[0.7rem] mt-2 flex-grow">
            <nav className="flex flex-row justify-start">
              <div className="flex flex-row">
                <div className="relative">
                  <Link href="/" className={getLinkClass("/")}>
                    Home
                  </Link>
                </div>
                <div className="relative">
                  <Link href="/about" className={getLinkClass("/about")}>
                    About Us
                  </Link>
                </div>
                <div className="relative">
                  <Link
                    href="/services"
                    className={getLinkClass("/services")}
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Services
                  </Link>
                  {showDropdown && (
                    <div className="absolute left-0 mt-2 w-48 bg-[#0f0f2e] rounded-md shadow-xl py-1 z-50">
                      <Link
                        href="/services/tech"
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-blue-600 transition-colors duration-200 border-b border-gray-700"
                        onClick={() => setShowDropdown(false)}
                      >
                        Technology Solutions
                      </Link>
                      <Link
                        href="/services/marketing"
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-blue-600 transition-colors duration-200 border-b border-gray-700"
                        onClick={() => setShowDropdown(false)}
                      >
                        Digital Marketing
                      </Link>
                      <Link
                        href="/services/consultancy"
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-blue-600 transition-colors duration-200"
                        onClick={() => setShowDropdown(false)}
                      >
                        Consultancy Services
                      </Link>
                    </div>
                  )}
                  <Link href="/careers" className={getLinkClass("/careers")}>
                    Careers
                  </Link>
                  <Link href="/projects" className={getLinkClass("/projects")}>
                    Projects
                  </Link>
                </div>
              </div>
              <div className="relative flex ml-auto">
                <div>
                  <Link href="/contact" className={getLinkClass("/contact")}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden" onClick={toggleMenu}>
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </nav>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } bg-bg1 text-txt w-full flex flex-col justify-start items-start p-4 pt-0`}
      >
        <nav
          className="flex flex-col px-2 w-full box-border"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/services" className={getLinkClass("/services")}>
            Services
          </Link>
          {/* <Link href="/careers" className={getLinkClass("/careers")}>
            Careers
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            Projects
          </Link> */}
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
