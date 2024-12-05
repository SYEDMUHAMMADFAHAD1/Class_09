import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 overflow-hidden w-full">
      <header className="text-center">
        {/* Title Section */}
        <h1 className="bg-gradient-to-bl from-pink-500 to-purple-500 lg:text-6xl text-2xl p-4 text-white font-bold font-serif cursor-pointer 
          hover:transform hover:scale-105 transition-transform duration-300">
          مسك المحل MUSK AL MAHAL
        </h1>

        {/* Navigation Links */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 text-white font-bold font-serif lg:text-xl p-2 lg:space-x-14 space-x-5 text-sm shadow-lg rounded-md flex justify-center items-center">
          <Link href="/" className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-300 transition-all duration-300 py-2">Home</Link>
          <Link href="#card1" className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-300 transition-all duration-300 py-2">Perfumes</Link>
          <Link href="#card3" className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-300 transition-all duration-300 py-2">BEST SELLER</Link>
          <Link href="#card2" className="hover:text-indigo-300 hover:border-b-2 hover:border-indigo-300 transition-all duration-300 py-2">TESTER</Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
