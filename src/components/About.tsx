'use client';

import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        #about {
          padding: 40px 20px 20px 20px !important;
          min-height: auto !important;
        }
        #about h1 {
          font-size: 36px !important;
          text-align: center;
          margin-bottom: 30px;
        }
        #about .description {
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        #about .line {
          width: 80px !important;
          height: 3px !important;
          margin-right: 0 !important;
        }
        #about .description > div {
          flex-direction: column !important;
          gap: 20px !important;
        }
        #about .description p {
          font-size: 16px !important;
          text-align: center;
          line-height: 1.6;
        }
        #about button {
          margin-left: 0 !important;
          margin-top: 20px;
          align-self: center;
          display: block;
          margin-left: auto !important;
          margin-right: auto;
        }
        #about .description > div a {
          display: flex;
          justify-content: center;
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="about" className="w-full" style={{ padding: '100px 100px 50px 100px' }}>
      <h1 className="text-white font-['Libre_Baskerville',serif]" style={{ fontSize: '56px', fontWeight: 700 }}>
        About Me
      </h1>
      <div className="description flex items-start">
        <div className="line bg-[#fec86a]" style={{ height: '2.5px', width: '150px', marginRight: '32px', flexShrink: 0 }}></div>
        <div className="flex-1 max-w-4xl flex items-start gap-8">
          <div className="text-white flex-1" style={{ fontSize: '20px' }}>
            <p className="start">Junior software engineer with a strong interest in intelligent systems and automation.</p>
            <p className="end">
              I work confidently with Python, JavaScript, TypeScript, and Java to build reliable, efficient, and 
              adaptable software solutions.<br />My development approach is grounded in clean code, practical design, and 
              continuous learning. I'm particularly drawn to projects that bridge software with real-world systems such as robotics, AI,
              and infrastructure automation. <br />I value integrity, discipline, and thoughtful engineering. My goal is to contribute to 
              the development of systems that not only solve problems, but do so intelligently, by adapting, learning, and 
              interacting seamlessly with users and the environment.
            </p>
          </div>
          <a 
            href="/resume.pdf" 
            download="Oyadeyi_Abdul-Qoyyum_Resume.pdf"
            className="flex-shrink-0"
          >
            <button 
              className="bg-transparent border-2 border-[#fec86a] rounded-lg text-[#fec86a] transition-all duration-500 hover:bg-[#fec86a] hover:text-[#34353b]"
              style={{ height: '48px', width: '144px', fontSize: '16px' }}
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

