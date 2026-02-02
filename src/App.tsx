import './styles.css'
import './index.css'
import foto1 from './assets/img/foto1.jpeg'
import nat from './assets/img/nat.jpeg'
import lp360 from './assets/img/lp360.png'
import mbanking from './assets/img/banking.png'
import fotosyn from './assets/img/fotosyn.jpeg'
import db from './assets/img/DB.png'
import mobile from './assets/img/mobile.png'
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import React, { useState, useEffect } from 'react';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll spy functionality
  // Scroll spy functionality
  useEffect(() => {
    document.title = "Safna Yuliani"
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const handleScroll = () => {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(currentSection);
      
      // Update active class on nav links
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scrolling for navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 md:p-8 fixed w-full bg-white z-50 shadow-sm">
        <div className="logonama"><strong>Safna Yuliani</strong></div>
        <ul className="flex list-none m-0 p-0 gap-6 md:gap-8">
          {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`nav-link relative py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full ${
                  activeSection === section ? 'after:w-full text-indigo-600 font-medium' : ''
                }`}
                onClick={(e) => handleNavClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" className="hero min-h-screen flex flex-col md:flex-row items-center justify-between py-24 px-6 md:px-12 mt-16">
        <div className="hero-content max-w-2xl mb-12 md:mb-0 md:mr-12 text-center md:text-left">
          <h1 className="hero-title text-4xl md:text-5xl font-bold mb-6">
            Product & Project Manager — Delivering outcomes, not just features
          </h1>
          <p className="hero-subtitle text-xl  mb-8">
            I lead cross-functional teams to ship customer-focused products, align stakeholders, and measure impact through clear KPIs. I specialise in end-to-end delivery for web & mobile products.
          </p>
        </div>
        <div className="hero-image relative">
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            <div 
              className="hero-circle absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full">
                
              </div>
            <div 
              className="hero-circle-2 absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full">

              </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about py-20 px-6 md:px-12">
        <div className="container max-w-6xl mx-auto">
          <h2 className="about-title text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="about-content flex flex-col md:flex-row items-center gap-16">
            <div className="about-text max-w-2xl">
              <p className="mb-6 text-lg leading-relaxed">
                I'm a Product and Project Management enthusiast with hands-on experience in IT solution delivery and early-stage product development. I've coordinated development timelines, aligned engineering teams, prepared sprint and monthly reports, and ensured on-time delivery for an internal clinic management system used by a client company.
              </p>
              <p className="text-lg leading-relaxed">
                I also have experience supporting the development of a Learning Management System (LMS), where I conducted product research, performed A/B testing, broke down tasks for developers, set priorities, and collaborated with stakeholders to identify user needs. I frequently work with Jira, ClickUp, Miro, and Draw.io to organize workflows and support smooth execution. I enjoy turning ideas into structured plans and working with teams to build meaningful digital solutions.
              </p>
            </div>
            <div className="about-image relative">
              <div className="relative w-80 h-80">
                <img 
                  src={foto1}
                  alt="About Me Image" 
                  className="rounded-xl w-full h-full object-cover"/>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
            <h2 className="experience-title">Experience</h2>
            <div className="experience-grid">
                <div className="experience-item">
                    <h3>Synapsis Sinergi Digital</h3>
                    <h4>Project Manager</h4>
                    <p>Led the delivery of an internal clinic management system by coordinating developers, monitoring timelines, and ensuring on-time delivery. Prepared sprint and monthly reports, managed task distribution using Jira, and supported planning for upcoming sprints. Worked closely with stakeholders to align progress with business needs.</p>
                        <p><b>Impact:</b> Project delivered 100% on schedule and improved internal operational efficiency.</p>
                </div>
                <div className="experience-item">
                    <h3>Nusantara Adidaya Teknologi</h3>
                    <h4>Product Manager</h4>
                    <p>Led early-stage development of a Learning Management System used for corporate training. Conducted product research, supported A/B testing, prioritized features, and translated stakeholder needs into structured development plans. Collaborated with cross-functional teams using ClickUp, Miro, and Draw.io.</p>
                        <p><b>Impact:</b> Delivered a clear MVP roadmap and supported initial adoption by a corporate client.</p>
                </div>
            </div>
            <div className="experience-images">
                <img src={fotosyn}/>
                <img src={nat} alt="Work Image 3"/>
            </div>
        </div>
        <div className="experience-circle"></div>
        <div className="experience-circle-2"></div>
    </section>


      {/* Project 1 Section */}

    <section id="projects" className="project">
        <div className="container">
            <h2 className="project-title">Medical Monitoring Enterprise</h2>
            <div className="project-content">
                <div className="project-text">
                    <p>Led the delivery of an internal clinic management system for a corporate client from planning to release. Coordinated developers, controlled timelines, and ensured each sprint was completed as planned. Prepared sprint and monthly progress reports, supported sprint planning, and aligned development with internal stakeholder needs using Jira, Miro, and Draw.io.</p>
                    <p><b> Outcome:</b> Project delivered 100% on schedule and enabled centralized clinic data management for internal operations.</p>
                </div>
                <div className="project-images">
                  <img style={{ height:"60%", margin: "auto 0" }} src={db}/>
                    <img src={mobile} alt="Project 1 Image 2"/>
                </div>
            </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
    </section>

    {/* Project 2 Section */}
    <section id="projects" className="project">
        <div className="container">
            <h2 className="project-title">Learning Management System</h2>
            <div className="project-content">
                <div className="project-images">
                    <img src={lp360} alt="Project 2 Image 1"/>
                </div>
                <div className="project-text">
                    <p>Led early-stage product development for a Learning Management System used for employee training. Conducted product research, defined feature priorities, and broke down requirements for the development team. Collaborated with stakeholders to understand training needs and supported A/B testing to improve usability and learning flow using Miro, Draw.io, and ClickUp.</p>
                    <p><b> Outcome:</b> LMS successfully adopted for internal training programs by a regional bank.</p>
                  </div>
            </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
    </section>

    {/* Project 3 Section */}
    <section id="projects" className="project">
        <div className="container">
            <h2 className="project-title">Banking System for Regional Bank</h2>
            <div className="project-content">
                <div className="project-text">
                    <p>Led an 8-member cross-functional team to develop a smart banking application. Conducted feature research and collaborated closely with stakeholders to gather business and user needs. Defined feature priorities, broke down tasks for the development team, and oversaw readiness to ensure the application performed well before release.</p>
                    <p><b> Outcome:</b> Delivered a stable smart banking application aligned with stakeholder requirements.</p>
                  </div>
                  <div className="project-images">
                    <img src={mbanking} alt="Project 2 Image 1"/>
                </div>
            </div>
        </div>
        <div className="project-circle"></div>
        <div className="project-circle-2"></div>
    </section>

      {/* Contact Section */}
      <section 
        id="contact" className="contact py-24 px-6 md:px-12 text-center relative">
        <div className="container max-w-4xl mx-auto relative z-10">
          <h2 className="contact-title text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="contact-subtitle text-xl  mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your product vision into reality? Let's discuss how we can work together to create exceptional digital experiences that drive real business results.
          </p>
          <div className="contact-links flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:safnayuliani45@gmail.com"
              className="contact-link flex items-center justify-center gap-3 bg-white  font-medium py-4 px-8 rounded-xl transition-all hover:bg-[#3546ff] hover:text-white"
            >
              <MdEmail className="text-xl" />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/safnayuliani/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link flex items-center justify-center gap-3 bg-white  font-medium py-4 px-8 rounded-xl transition-all hover:bg-[#3546ff] hover:text-white"
            >
              <FaLinkedinIn className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
        <div 
          className="contact-circle"></div>
      </section>

      {/* Footer */}
      <footer className="footer-center">
        <p>© {new Date().getFullYear()} Safna Yuliani. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
