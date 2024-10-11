"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">WebVerseR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-blue-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-6">
            <button className="py-2 px-3 border rounded-md hover:text-blue-400">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-violet-800 py-2 px-3 rounded-md hover:from-violet-800 hover:to-blue-500">
              Create an account
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-8 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex mt-4 space-x-6">
              <button className="py-2 px-3 border rounded-md hover:text-blue-400">Sign In</button>
              <button className="bg-gradient-to-r from-blue-600 to-violet-800 py-2 px-3 rounded-md hover:from-violet-800 hover:to-blue-500">
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
