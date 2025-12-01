'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center w-full z-50" style={{ backgroundColor: '#34353b' }}>
      <nav className="flex justify-between items-center w-11/12 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image 
            src="/assets/carepy_logo-1.svg" 
            alt="logo" 
            width={40}
            height={40}
            className="h-10 w-10 filter invert" 
          />
        </div>
        <ul className="hidden md:flex items-center" style={{ gap: '2rem' }}>
          <li>
            <Link href="/" className="text-white hover:text-[#fec86a] text-sm sm:text-base transition-colors duration-300 px-4 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-white hover:text-[#fec86a] text-sm sm:text-base transition-colors duration-300 px-4 py-2">
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-white hover:text-[#fec86a] text-sm sm:text-base transition-colors duration-300 px-4 py-2">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-white hover:text-[#fec86a] text-sm sm:text-base transition-colors duration-300 px-4 py-2">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-[#fec86a] text-sm sm:text-base transition-colors duration-300 px-4 py-2">
              Projects
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex search bg-gray-700 items-center rounded-lg p-1 w-48">
          <input 
            type="search" 
            placeholder="search" 
            className="bg-transparent border-none text-white w-full outline-none px-4 ml-2" 
          />
          <i className="ri-search-line text-gray-400"></i>
        </div>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 border-t border-gray-700" style={{ backgroundColor: '#34353b' }}>
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-[#fec86a] block transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/#about" 
                className="text-white hover:text-[#fec86a] block transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/#skills" 
                className="text-white hover:text-[#fec86a] block transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                href="/#experience" 
                className="text-white hover:text-[#fec86a] block transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-white hover:text-[#fec86a] block transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

