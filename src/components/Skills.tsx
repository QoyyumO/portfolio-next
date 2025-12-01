'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const skills = [
  { src: '/assets/react.svg', alt: 'React JS/Native', label: 'React JS/Native' },
  { src: '/assets/js.svg', alt: 'JavaScript', label: 'JavaScript' },
  { src: '/assets/ts.png', alt: 'TypeScript', label: 'TypeScript' },
  { src: '/assets/c++.svg', alt: 'C++', label: 'C++' },
  { src: '/assets/nodejs.svg', alt: 'Node JS', label: 'Node JS' },
  { src: '/assets/pg.png', alt: 'PostgreSQL', label: 'PostgreSQL' },
  { src: '/assets/nextjs.svg', alt: 'Next JS', label: 'Next JS' },
  { src: '/assets/vuejs.png', alt: 'Vue JS', label: 'Vue JS' },
  { src: '/assets/java.png', alt: 'Java', label: 'Java' },
  { src: '/assets/mysql.svg', alt: 'MySQL', label: 'MySQL' },
  { src: '/assets/python.svg', alt: 'Python', label: 'Python' },
  { src: '/assets/tailwind.png', alt: 'Tailwind CSS', label: 'Tailwind CSS' },
  { src: '/assets/mui.png', alt: 'Material UI', label: 'Material UI' },
  { src: '/assets/git.svg', alt: 'Git', label: 'Git' },
];

export default function Skills() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        #skills {
          padding: 0 20px 40px 20px !important;
          margin-top: 0;
        }
        #skills h1 {
          font-size: 36px !important;
          margin-bottom: 0;
        }
        #skills .cards {
          margin-top: 30px !important;
          gap: 20px !important;
        }
        #skills .skill-card {
          height: 120px !important;
          width: 120px !important;
          padding: 15px;
          min-width: 120px;
        }
        #skills .skill-card img {
          height: 50px !important;
          width: 50px !important;
        }
        #skills .skill-card h2 {
          font-size: 14px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="skills" className="flex flex-col items-center justify-center" style={{ padding: '0 100px 50px 100px' }}>
      <h1 className="text-white font-['Libre_Baskerville',serif] text-center" style={{ fontSize: '56px', fontWeight: 700 }}>
        My Skills
      </h1>
      <div className="cards flex flex-wrap items-center justify-center w-full" style={{ marginTop: '50px', gap: '2.5vh' }}>
        {skills.map((skill) => (
          <div
            key={skill.alt}
            className="skill-card bg-[#3d3e42] rounded-[20px] flex flex-col overflow-hidden items-center justify-center transition-all duration-500 hover:bg-[#fec86a] cursor-pointer"
            style={{ height: '20vw', width: '20vw', gap: '2.5vh' }}
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={100}
              height={100}
              className="object-contain"
              style={{ height: '7.5vw', width: '7.5vw' }}
            />
            <h2 className="text-white text-center" style={{ fontSize: '24px', fontWeight: 400 }}>
              {skill.label}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

