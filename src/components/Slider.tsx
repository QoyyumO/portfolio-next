'use client';

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  techStack: string[];
}

// Helper function to get shields.io badge URL for each technology
const getTechBadgeUrl = (tech: string): string => {
  const badgeMap: { [key: string]: string } = {
    'Python': 'https://img.shields.io/badge/-Python-e3ba00?style=for-the-badge&logo=Python',
    'JavaScript': 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    'TypeScript': 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    'C++': 'https://img.shields.io/badge/-C++-008080?style=for-the-badge&logo=cplusplus',
    'Next.js': 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
    'React': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Firebase': 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white',
    'Java': 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white',
    'MySQL': 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
    'MongoDB': 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    'Node.js': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    'Express': 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    'OpenCV': 'https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white',
    'MUI': 'https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
    'Vue.js': 'https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D',
    'HTML': 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'CSS': 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'AI': 'https://img.shields.io/badge/AI-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white',
    'Stripe': 'https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white',
    'SaaS': 'https://img.shields.io/badge/SaaS-FF6B6B?style=for-the-badge',
    'Chatbot': 'https://img.shields.io/badge/Chatbot-00A8E8?style=for-the-badge',
    'Authentication': 'https://img.shields.io/badge/Auth-4285F4?style=for-the-badge&logo=google&logoColor=white',
    'Data Structures': 'https://img.shields.io/badge/Data%20Structures-FF6B6B?style=for-the-badge',
    'Java Swing': 'https://img.shields.io/badge/Java%20Swing-ED8B00?style=for-the-badge&logo=java&logoColor=white',
    'JavaMail': 'https://img.shields.io/badge/JavaMail-ED8B00?style=for-the-badge&logo=java&logoColor=white',
    'Google Gemini': 'https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white',
  };

  return badgeMap[tech] || `https://img.shields.io/badge/${encodeURIComponent(tech)}-gray?style=for-the-badge`;
};

const projects: Project[] = [
  {
    title: "TaxMate AI",
    description: "A web based application for income tax analysis using google gemini. Built with Next.js and TypeScript, this platform leverages advanced AI technologies, and Firebase for backend services and authentication",
    imageUrl: "/assets/taxmate.png",
    link: "https://taxmate-ai-sandy.vercel.app",
    techStack: ["Next.js", "TypeScript", "Firebase", "Google Gemini", "AI"]
  },
  {
    title: "Attendance & Shift Management System (ASMS)",
    description: "A Java Swing application with MySQL backend that automates staff attendance tracking via biometric sign-in/out, shift scheduling, and supervisor-approved shift swaps, featuring role-based access and email notifications. Built with OpenCV for image capture and JavaMail for automated communications.",
    imageUrl: "/assets/asms.png",
    link: "https://github.com/QoyyumO/ASMS",
    techStack: ["Java", "Java Swing", "MySQL", "OpenCV", "JavaMail"]
  },
  {
    title: "Toothfixers",
    description: "A web-based application for managing patients' clinical records for ToothFixers Ltd., a large dental company with multiple dentists.",
    imageUrl: "/assets/toothfixers.png",
    link: "https://github.com/QoyyumO/toothfixers-project",
    techStack: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Cafeteria Management System (CMS)",
    description: "A Java Swing application that streamlines food ordering processes with role-based dashboards, real-time inventory tracking, and automated email notifications, using MySQL for data storage and OpenCV for photo capture functionality. Designed to improve efficiency and reduce fraud in institutional cafeterias.",
    imageUrl: "/assets/cms.png",
    link: "https://github.com/QoyyumO/CMS",
    techStack: ["Java", "Java Swing", "MySQL", "OpenCV"]
  },
  {
    title: "SkillUp-AI",
    description: "An AI-powered skill development platform designed to help users enhance their skills through personalized recommendations and learning paths. Built with Next.js and TypeScript, this platform leverages advanced AI technologies, Firebase for backend services, and MUI for a responsive and clean user interface.",
    imageUrl: "/assets/skillup-ai.png",
    link: "https://skillup-ai.vercel.app",
    techStack: ["Next.js", "TypeScript", "Firebase", "MUI", "AI"]
  },
  {
    title: "Event Management System",
    description: "A C++ application for implementing data structures that provides comprehensive functionality for managing events, participants, and check-ins.",
    imageUrl: "/assets/ems.png",
    link: "https://github.com/QoyyumO/Data-Structures/tree/main/Event%20Management%20System",
    techStack: ["C++", "Data Structures"]
  },
  {
    title: "AI-Powered Flashcard SaaS",
    description: "A modern web application that revolutionizes study methods by leveraging AI to generate custom flashcards. Built with Next.js and Firebase, this SaaS platform offers user authentication, AI-driven content creation, and a subscription-based model.",
    imageUrl: "/assets/ai-flashcard.png",
    link: "https://ai-flashcard-app-dlap.vercel.app",
    techStack: ["Next.js", "Firebase", "AI", "Stripe", "SaaS"]
  },
  {
    title: "CBT project",
    description: "A C++ project on Computer based testing",
    imageUrl: "/assets/CBT.jpg",
    link: "https://github.com/QoyyumO/CBT",
    techStack: ["C++"]
  },
  {
    title: "AI-Customer Support",
    description: "This project is a Next.js-based customer support chatbot that leverages artificial intelligence to provide intelligent responses to user queries.",
    imageUrl: "/assets/ai-customersupport.png",
    link: "https://ai-customer-app.vercel.app",
    techStack: ["Next.js", "AI", "Chatbot"]
  },
  {
    title: "Parcel Delivery System",
    description: "A C++ program designed to manage parcel deliveries efficiently. It includes features for registering parcels, managing loading and delivery processes, searching parcels by ID, generating reports, and undoing or redoing actions.",
    imageUrl: "/assets/pds.webp",
    link: "https://github.com/QoyyumO/Data-Structures/tree/main/Event%20Management%20System",
    techStack: ["C++", "Data Structures"]
  },
  {
    title: "Pantry Manager",
    description: "Pantry Manager is a React and Firebase-based app that simplifies pantry management for personal use with secure authentication, item management, and search functionality. It's optimized for both desktop and mobile, showcasing modern web development practices.",
    imageUrl: "/assets/pantry.png",
    link: "https://pantry-manager-qoyyumo.vercel.app",
    techStack: ["React", "Firebase", "Authentication"]
  },
  {
    title: "NFT preview card",
    description: "A web design template of a preview card for nft using HTML and CSS.",
    imageUrl: "/assets/nft-review-card.jpg",
    link: "https://nft-preview-card-qoyyumo.vercel.app",
    techStack: ["HTML", "CSS"]
  },
  {
    title: "Vue-multi-projects",
    description: "A multi-project, counter, notes and quiz app, made with vue js, a javascript framework.",
    imageUrl: "/assets/vue-projects.png",
    link: "https://vue-projects-nu.vercel.app",
    techStack: ["Vue.js", "JavaScript"]
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwipeActive, setIsSwipeActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .slider-container {
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        position: relative;
        transition: background-image 0.5s ease-in-out;
        touch-action: pan-y;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }
      .slider-container.swipe-active {
        transition: none;
      }
      .slider-content {
        position: absolute;
        bottom: 300px;
        left: 50px;
        color: #fec86a;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        max-width: 50%;
        padding: 20px;
        border-radius: 8px;
        z-index: 2;
      }
      .slider-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        z-index: -1;
      }
      .slider-title {
        font-size: 36px;
        margin-bottom: 10px;
        color: #fec86a;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
      }
      .slider-description {
        font-size: 18px;
        margin-bottom: 20px;
        color: #fec86a;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
      }
      .slider-tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 20px;
      }
      .slider-tech-card {
        height: 28px;
        display: inline-block;
      }
      .slider-tech-card img {
        height: 100%;
        width: auto;
        border-radius: 4px;
      }
      .slider-see-more {
        background: none;
        border: 2px solid #fec86a;
        color: #fec86a;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
      }
      .slider-see-more:hover {
        color: #34353b;
        background-color: #fec86a;
      }
      .slider-preview-container {
        position: absolute;
        bottom: 50px;
        right: 50px;
        display: flex;
        gap: 10px;
      }
      .slider-preview {
        width: 200px;
        height: 300px;
        background-size: cover;
        background-position: center;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      }
      .slider-nav {
        position: absolute;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 20px;
      }
      .slider-btn {
        background-color: rgba(244, 8, 8, 0.3);
        border: none;
        color: black;
        font-size: 24px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .slider-btn:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
      @media (max-width: 768px) {
        .slider-content {
          left: 20px;
          bottom: 20px;
          max-width: 70%;
        }
        .slider-preview-container {
          right: 20px;
          bottom: 20px;
        }
        .slider-preview {
          width: 80px;
          height: 48px;
        }
        .slider-nav {
          bottom: 20px;
          display: none;
        }
        .slider-container {
          cursor: grab;
        }
        .slider-container:active {
          cursor: grabbing;
        }
        .slider-container::before {
          content: "← Swipe to navigate →";
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          background: rgba(0, 0, 0, 0.5);
          padding: 8px 16px;
          border-radius: 20px;
          z-index: 10;
          animation: fadeInOut 3s ease-in-out infinite;
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.3; }
        }
      }
      @media (max-width: 480px) {
        .slider-content {
          max-width: 90%;
        }
        .slider-title {
          font-size: 24px;
        }
        .slider-description {
          font-size: 14px;
        }
        .slider-tech-stack {
          gap: 6px;
          margin-bottom: 15px;
        }
        .slider-tech-card {
          height: 20px;
        }
        .slider-tech-card img {
          height: 20px;
        }
        .slider-preview-container {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwipeActive(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsSwipeActive(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
    
    setIsSwipeActive(false);
  };

  return (
    <div
      className={`slider-container ${isSwipeActive ? 'swipe-active' : ''}`}
      style={{
        backgroundImage: `url(${projects[activeIndex].imageUrl})`,
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider-content">
        <h2 className="slider-title">{projects[activeIndex].title}</h2>
        <p className="slider-description">{projects[activeIndex].description}</p>
        <div className="slider-tech-stack">
          {projects[activeIndex].techStack.map((tech, index) => (
            <span key={index} className="slider-tech-card">
              <img 
                src={getTechBadgeUrl(tech)} 
                alt={tech}
                style={{ height: '28px', width: 'auto' }}
              />
            </span>
          ))}
        </div>
        <button className="slider-see-more">
          <a href={projects[activeIndex].link} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
            See More -&gt;
          </a>
        </button>
      </div>
      <div className="slider-preview-container">
        {[1, 2, 3].map((offset) => (
          <div
            key={offset}
            className="slider-preview"
            style={{
              backgroundImage: `url(${projects[(activeIndex + offset) % projects.length].imageUrl})`,
            }}
          ></div>
        ))}
      </div>
      <nav className="slider-nav">
        <button className="slider-btn prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
}

