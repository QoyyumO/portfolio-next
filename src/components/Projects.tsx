'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const featuredProjects = [
  { 
    src: '/assets/taxmate.png', 
    alt: 'TaxMate-AI', 
    label: 'TaxMate AI', 
    desc: 'A web based application for income tax analysis using google gemini. Built with Next.js and TypeScript, this platform leverages advanced AI technologies, and Firebase for backend services and authentication', 
    link: 'https://taxmate-ai-sandy.vercel.app' 
  },
  { 
    src: '/assets/asms.png', 
    alt: 'Attendance & Shift Management System', 
    label: 'ASMS', 
    desc: 'A Java Swing application with MySQL backend that automates staff attendance tracking via biometric sign-in/out, shift scheduling, and supervisor-approved shift swaps, featuring role-based access and email notifications. Built with OpenCV for image capture and JavaMail for automated communications.', 
    link: 'https://github.com/QoyyumO/ASMS' 
  },
  { 
    src: '/assets/skillup-ai.png', 
    alt: 'SkillUp-AI', 
    label: 'SkillUp-AI', 
    desc: 'An AI-powered skill development platform designed to help users enhance their skills through personalized recommendations and learning paths. Built with Next.js and TypeScript, this platform leverages advanced AI technologies, Firebase for backend services, and MUI for a responsive and clean user interface.', 
    link: 'https://skillup-ai.vercel.app' 
  }
];

export default function Projects() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        #portfolio-loc {
          padding: 40px 20px !important;
        }
        #portfolio-loc h1 {
          font-size: 36px !important;
          margin-bottom: 30px;
        }
        #portfolio-loc .portfolio-cards {
          display: flex !important;
          flex-direction: column;
          margin-top: 30px !important;
          gap: 30px !important;
          width: 100%;
          max-width: 400px;
        }
        #portfolio-loc .portfolio-card {
          height: 250px !important;
          width: 100% !important;
          max-width: 400px;
        }
        #portfolio-loc .portfolio-card img {
          height: 250px !important;
          width: 100% !important;
        }
        #portfolio-loc .portfolio-card {
          cursor: pointer;
        }
        #portfolio-loc .portfolio-card .overlay {
          height: 250px !important;
          width: 100% !important;
          padding: 20px !important;
        }
        #portfolio-loc .portfolio-card .overlay h3 {
          font-size: 18px !important;
          margin-bottom: 10px;
        }
        #portfolio-loc .portfolio-card .overlay p {
          font-size: 14px !important;
        }
        #portfolio-loc button {
          margin-top: 30px !important;
          margin-left: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="portfolio-loc" className="flex flex-col items-center justify-center" style={{ padding: '50px 100px' }}>
      <h1 className="text-white font-['Libre_Baskerville',serif]" style={{ fontSize: '56px', fontWeight: 700 }}>
        Projects
      </h1>
      <div className="portfolio-cards grid items-center justify-center w-full" style={{ marginTop: '50px', gridTemplateColumns: 'auto auto auto', gap: '2.5vh', columnGap: '2.5vh', rowGap: '2.5vh' }}>
        {featuredProjects.map((project) => (
          <div
            key={project.alt}
            className="portfolio-card relative bg-[#3d3e42] rounded-[20px] overflow-hidden transition-all duration-500 group cursor-pointer"
            style={{ height: '30vw', width: '30vw' }}
            onClick={() => setActiveCard(activeCard === project.alt ? null : project.alt)}
          >
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className="object-cover"
            />
            <div className={`overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#34353ba2] transition-all duration-500 ${
              activeCard === project.alt ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
              style={{ height: '30vw', width: '30vw', gap: '2.5vh', padding: '24px' }}
            >
              <h3 className="text-white text-center" style={{ fontSize: '24px' }}>
                {project.label}
              </h3>
              <p className="text-white text-center" style={{ fontSize: '16px' }}>
                {project.desc}
              </p>
              <button className="bg-[#fec86a] border border-[#fec86a] rounded-lg text-[#34353b] transition-all duration-500 hover:bg-[#cc9e4e] cursor-pointer" style={{ height: '36px', width: '108px', fontSize: '12px' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="no-underline text-[#34353b]">
                  See More -&gt;
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="bg-[#fec86a] border border-[#fec86a] rounded-lg text-[#34353b] font-medium cursor-pointer transition-all duration-500 hover:bg-[#cc9e4e]"
        style={{ marginTop: '50px', height: '48px', width: '144px', fontSize: '16px', marginLeft: '30px' }}
      >
        <Link href="/projects" className="no-underline text-[#34353b]">
          View More
        </Link>
      </button>
    </section>
  );
}

