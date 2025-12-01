'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 flex items-center justify-center w-full z-50 shadow-lg" style={{ backgroundColor: '#34353b' }}>
        <nav className="flex justify-between items-center w-11/12 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Image 
              src="/assets/carepy_logo-1.svg" 
              alt="logo" 
              width={40}
              height={40}
              className="h-10 w-10 filter invert" 
            />
            <span className="text-white font-bold ml-2 text-sm sm:text-base lg:text-lg">PORTFOLIO</span>
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
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </button>
        </nav>
      </header>
      
      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '80px' }}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ backgroundColor: '#34353b', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
      >
        <ul className="flex flex-col py-4">
          <li>
            <Link 
              href="/" 
              className="text-white hover:text-[#fec86a] hover:bg-[#3d3e42] block transition-all duration-300 px-6 py-4 text-lg font-medium border-l-4 border-transparent hover:border-[#fec86a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/#about" 
              className="text-white hover:text-[#fec86a] hover:bg-[#3d3e42] block transition-all duration-300 px-6 py-4 text-lg font-medium border-l-4 border-transparent hover:border-[#fec86a]"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/#skills" 
              className="text-white hover:text-[#fec86a] hover:bg-[#3d3e42] block transition-all duration-300 px-6 py-4 text-lg font-medium border-l-4 border-transparent hover:border-[#fec86a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              href="/#experience" 
              className="text-white hover:text-[#fec86a] hover:bg-[#3d3e42] block transition-all duration-300 px-6 py-4 text-lg font-medium border-l-4 border-transparent hover:border-[#fec86a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="text-white hover:text-[#fec86a] hover:bg-[#3d3e42] block transition-all duration-300 px-6 py-4 text-lg font-medium border-l-4 border-transparent hover:border-[#fec86a]"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

