"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Dashboard, { landingPageRef } from '@/app/dashboard/page';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (


    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="https://flowbite.com/" className="flex items-center ">
          <Image
            src="/logo-adhah.png"
            alt="Vercel Logo"
            width={168}
            height={40}
            priority
          />
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className={`md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600 ${isMobileMenuOpen ? 'outline-none' : ''
            }`}
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
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
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } md:flex w-full md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a  onClick={() => handleLinkClick(landingPageRef)} href="/dashboard" className="block py-2 px-3   md:bg-transparent md:p-0 text-[#949494] hover:text-[#555555]" aria-current="page">Beranda</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick(landingPageRef)} href="#LandingFour" className="block py-2 px-3   md:bg-transparent md:p-0 text-[#949494] hover:text-[#555555]">Misi Kami</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick(landingPageRef)} href="#LandingFivePage" className="block py-2 px-3   md:bg-transparent md:p-0 text-[#949494] hover:text-[#555555]">Artikel</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick(landingPageRef)} href="#LandingSix" className="block py-2 px-3   md:bg-transparent md:p-0 text-[#949494] hover:text-[#555555]">Informasi Budaya</a>
            </li>
            <li>
              <a onClick={() => handleLinkClick(landingPageRef)} href="/tentang-kami" className="block py-2 px-3   md:bg-transparent md:p-0 text-[#949494] hover:text-[#555555]">Tentang Kami</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
