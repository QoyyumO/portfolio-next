'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        #contact-loc {
          padding: 40px 20px !important;
          margin-top: 0;
          margin-left: 0;
        }
        #contact-loc h1 {
          font-size: 36px !important;
          font-weight: 500 !important;
          text-align: center;
          margin-bottom: 30px;
        }
        #contact-loc .contact {
          flex-direction: column !important;
          gap: 15px !important;
          align-items: center;
        }
        #contact-loc .contact-card {
          padding: 15px !important;
          gap: 15px !important;
          margin-top: 0 !important;
          font-size: 14px;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="contact-loc" className="contact-me w-full flex flex-col items-center justify-center" style={{ padding: '100px' }}>
      <h1 className="text-white font-['Libre_Baskerville',serif]" style={{ fontSize: '56px', fontWeight: 700 }}>
        Contact Me
      </h1>
      <div className="contact flex" style={{ gap: '24px', marginTop: '7.5vh' }}>
        <div className="contact-card bg-[#fec86a] rounded-lg flex items-center" style={{ padding: '10px', gap: '10px' }}>
          <FaEnvelope className="text-[#34353b]" style={{ fontSize: '20px' }} />
          <p className="text-[#34353b]">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=oyinlolaoyadeyi@gmail.com"
              className="contact-link no-underline text-[#34353b]"
            >
              oyinlolaoyadeyi@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-card bg-[#fec86a] rounded-lg flex items-center" style={{ padding: '10px', gap: '10px' }}>
          <FaPhone className="text-[#34353b]" style={{ fontSize: '20px' }} />
          <p className="text-[#34353b]">
            <a
              className="contact-link no-underline text-[#34353b]"
              href="https://wa.me/+2348052628593"
            >
              +234 805 262 8593
            </a>
          </p>
        </div>
        <div className="contact-card bg-[#fec86a] rounded-lg flex items-center" style={{ padding: '10px', gap: '10px' }}>
          <FaMapMarkerAlt className="text-[#34353b]" style={{ fontSize: '20px' }} />
          <p className="text-[#34353b]">Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  );
}

