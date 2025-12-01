'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .hero-section {
          padding: 20px !important;
          padding-top: 90px !important;
          min-height: 100vh;
          height: auto;
          display: flex !important;
          align-items: flex-start !important;
        }
        .hero-section .landing {
          flex-direction: column;
          min-height: auto;
          height: auto;
          gap: 10px;
          padding-top: 0;
          justify-content: flex-start;
        }
        .hero-section .intro {
          order: 2;
          align-items: center;
          width: 100%;
          gap: 10px !important;
        }
        .hero-section .intro a {
          margin-top: 10px !important;
        }
        .hero-section .intro h3 {
          font-size: 24px !important;
          margin-left: 0 !important;
          line-height: 1.4;
          text-align: center;
        }
        .hero-section .intro h3 span {
          font-size: 2.5rem !important;
        }
        .hero-section .intro a {
          margin-left: 0 !important;
          margin-top: 20px;
        }
        .hero-section .socials {
          flex-direction: row;
          gap: 20px;
          margin-top: 30px !important;
          margin-right: 0 !important;
          order: 3;
        }
        .hero-section .socials .line {
          display: none;
        }
        .hero-section .socials a {
          font-size: 32px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="hero-section min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-24 lg:pt-20" style={{ backgroundColor: '#34353b' }}>
      <div className="landing flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto min-h-[90vh] gap-8 lg:gap-0">
        <div className="intro flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 gap-6">
          <h3 className="text-white font-normal text-2xl sm:text-3xl lg:text-4xl leading-relaxed" style={{ marginLeft: '10vw' }}>
            I&apos;M <span className="text-[#fec86a] font-semibold text-3xl sm:text-4xl lg:text-5xl">Abdul-Qoyyum</span>
            <span className="block mt-2">Junior Software Engineer &<br />Aspiring Robotics Developer</span>
          </h3>
          <Link 
            href="#contact-loc"
            className="h-12 w-36 bg-transparent border-2 border-[#fec86a] rounded-lg text-[#fec86a] text-base transition-all duration-500 hover:bg-[#fec86a] hover:text-[#34353b] flex items-center justify-center no-underline"
            style={{ marginLeft: '10vw', marginTop: '2.5vh' }}
          >
            Contact Me
          </Link>
        </div>
        <div className="socials flex flex-row lg:flex-col gap-5 lg:gap-2.5 items-center justify-center lg:mt-[50vh] order-3 lg:order-2" style={{ marginRight: '10vw', marginTop: '50vh' }}>
          <div className="hidden lg:block bg-[#fec86a] h-40 w-0.5"></div>
          <a 
            href="https://github.com/QoyyumO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl lg:text-5xl transition-all duration-300 hover:text-[#fec86a] hover:scale-110"
          >
            <FaGithub />
          </a>
          <a 
            href="https://twitter.com/Qoyyuumo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl lg:text-5xl transition-all duration-300 hover:text-[#fec86a] hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.linkedin.com/in/qoyyumo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-3xl lg:text-5xl transition-all duration-300 hover:text-[#fec86a] hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a 
            href="#contact-loc"
            className="text-white text-3xl lg:text-5xl transition-all duration-300 hover:text-[#fec86a] hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

