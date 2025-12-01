'use client';

import { useEffect } from 'react';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Skilladder AI',
    desc: `● Deepened understanding of AI-powered assessment systems engineered for large-scale deployment across Africa, focusing on scalable architecture and ethical AI design.<br>
    ● Applied data analytics and engineering principles to monitor, evaluate, and ensure reliability and integrity of assessment workflows for high-volume operations.<br>
    ● Improved system reliability and throughput by refining backend architecture to support high-volume assessments with low latency and minimal downtime.<br>
    ● Optimized and automated assessment workflows by building pipelines for test creation, grading, result validation, and reporting to enhance operations and reduce manual effort.<br>
    ● Enhanced bias-resistant evaluation by implementing NLP-based scoring frameworks and fairness checks to reduce inconsistency in open-ended submissions.<br>
    ● Drove data-driven insights by working on dashboards and analytics that provide actionable intelligence for learners, educators, and partners.`
  },
  {
    title: 'Software Engineering Intern',
    company: 'Codeware Nigeria',
    desc: `● Developed and integrated over 10 Vue.js components for an investment firm website, including custom accordion, dialog, and timeline components, improving user interaction by 30%.<br>
    ● Collaborated in an Agile environment using Azure DevOps, contributing to 15+ sprints and improving team productivity by 25% through efficient task management and version control. <br>
    ● Implemented Microsoft Authentication Library (MSAL) in a Vue.js application, enhancing security protocols and reducing unauthorized access attempts by 95%. <br>
    ● Optimized dashboard performance by refactoring code and implementing lazy loading, resulting in a 40% reduction in page load time.<br>
    ● Contributed to client-facing application development, adapting 8 complex components from transactor view to client view, increasing client engagement by 50%.<br>
    ● Scaled multiple web applications to 20+ active users, continuously optimizing based on user feedback.`
  },
  {
    title: 'Software Engineering Fellow',
    company: 'Headstarter',
    desc: `● Developed and deployed 5 AI-driven projects in 5 weeks, leveraging React JS, Next.js, Firebase, MUI, Groq, OpenAI, Clerk, and Vercel.<br>
    ● Implemented Agile methodologies with weekly sprints and CI/CD practices, ensuring rapid iteration and efficient deployment. <br>
    ● Engineered an interactive customer support agent in a team of 3, utilizing Next.js, MUI, and Groq API integration. <br>
    ● Spearheaded the development of a SaaS product generating AI-powered dynamic flashcards, incorporating Llama 3.1 LLM via Groq API and implementing Stripe API for monetization. <br>
    ● Designed and deployed a web scraper with RAG pipeline, integrating Lang Chain and GPT-4 to provide up-to-date answers from Rate My Professor data stored in Pinecone.<br>
    ● Scaled multiple web applications to 20+ active users, continuously optimizing based on user feedback. <br>
    ● Engaged in weekly mentorship sessions with industry leaders from Google, Y Combinator, Stanford, Amazon, and venture-backed startups.`
  },
  {
    title: 'Lead Programmer',
    company: 'First Global Challenge, Geneva',
    desc: `
    • Led a cross-functional team in the design, programming, and construction of a 
    cutting-edge robot for the prestigious First Global Challenge held in Geneva. 
    Directed the project from inception to completion, overseeing all phases, including design,
     programming, and system integration.<br>
     • Developed and maintained detailed documentation that captured the entire lifecycle of the robot, from the initial design concept to the final 
     implementation. Created comprehensive technical reports and manuals to facilitate knowledge 
     transfer within the team and future reference for similar projects.<br>
     • Faced and resolved a 
     multitude of complex challenges throughout the project, significantly enhancing critical thinking
      and problem-solving skills. Employed innovative solutions to overcome obstacles, demonstrating a 
      proactive and resourceful approach to project management.`
  }
];

export default function Experience() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        #experience h1 {
          position: static !important;
          font-size: 36px !important;
          transform: none !important;
          text-align: center;
          margin-bottom: 30px;
        }
        #experience .lighter-div {
          padding: 40px 20px !important;
          gap: 30px !important;
          align-items: center;
        }
        #experience .exp {
          width: 100% !important;
          margin: 0 !important;
          padding: 20px !important;
          background-color: rgba(61, 62, 66, 0.5) !important;
          border-radius: 10px;
        }
        #experience .exp h2 {
          font-size: 24px !important;
          margin-bottom: 10px;
        }
        #experience .exp-desc {
          padding-left: 0 !important;
        }
        #experience .exp-desc h3 {
          font-size: 18px !important;
          margin-top: 0;
          margin-bottom: 10px;
        }
        #experience .exp-desc p {
          font-size: 14px !important;
          line-height: 1.5;
          margin-top: 10px;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="experience" className="flex flex-col w-full relative items-center justify-center">
      <div className="darker-div bg-[#34353a] w-full" style={{ height: '10vh' }}></div>
      <h1 className="absolute text-white font-['Libre_Baskerville',serif] z-10" style={{ fontSize: '56px', transform: 'translate(-50%, -50%)', top: '7%', left: '15%' }}>
        Experience
      </h1>
      <div className="lighter-div bg-[#3d3e42] w-full flex flex-col" style={{ padding: '10vh', gap: '50px' }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp relative"
            style={{ marginTop: '50px', width: '50vw', marginLeft: '20vh' }}
          >
            <h2 className="text-white font-normal relative" style={{ fontSize: '32px' }}>
              <span className="absolute bg-[#fec86a] rounded-full shadow-[0_0_20px_5px_rgba(254,200,106,1)]" style={{ height: '20px', width: '20px', transform: 'translate(-50%, -50%)', top: '7.5%', left: '-5%' }}></span>
              {exp.title}
            </h2>
            <div className="exp-desc relative">
              <div className="absolute bg-white" style={{ height: '320px', marginTop: '10px', width: '2.5px', transform: 'translate(-50%, -50%)', top: '55%', left: '-5%' }}></div>
              <h3 className="text-white font-light" style={{ fontSize: '24px' }}>
                {exp.company}
              </h3>
              <p
                className="text-white font-light"
                style={{ fontSize: '16px' }}
                dangerouslySetInnerHTML={{ __html: exp.desc }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

