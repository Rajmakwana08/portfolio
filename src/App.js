import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import clickSound from "./assets/click-sound.mp3"; // Import the sound file
import portfolioVideo from "./assets/Raj IceCreams.mp4"; // Import the video file
import portfolioVideo1 from "./assets/Raj E-commerce Website.mp4";
import portfolioVideo2 from "./assets/Thumbnail Portfolio Website.mp4";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import myPhoto from "./assets/my photo.jpg";


function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const projects = [
    { name: "task-manager", link: "https://rajmakwana08.github.io/raj-task-manager" },
    { name: "Thumbnails website for my client", link: "https://rajmakwana.pythonanywhere.com/" },
    { name: "Textutils", link: "https://rajmakwana08.github.io/textutils" },
  ];

  const handleClick = () => {
    setLoading(true);
    setProgress(0);
    setCompleted(false);

    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play();
    }

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          return prev;
        }
      });
    }, 50);

    setTimeout(() => {
      setLoading(false);
      clearInterval(intervalRef.current);
      setCompleted(true);
    }, 5000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section, .section1, .description-container");
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  

  return (
    <div className="App">
      <audio ref={audioRef} src={clickSound}></audio>
      {!loading && !completed && (
        <div className="button-container">
          <button className="animated-button" onClick={handleClick}>
            Start Exploring
          </button>
        </div>
      )}

      {loading && (
        <>
          <div className="loading-bar"></div>
          <div className="loading-text">{progress}%</div>
        </>
      )}

      {completed && (
        <>
          <div className="image-container">
            <img 
              src={myPhoto} 
              alt="My Profile" 
              className="profile-picture" 
            />
          </div>
          <div className="completion-text">
            <h2>Welcome to Raj Portfolio!</h2>
            <p>Hi, I'm Raj Makwana, a passionate developer with expertise in web development.</p>
            <p>Take a look at my work and let's create something amazing together!</p>
          </div>

          <div className="sections-wrapper">
            <div className="education-section section">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Bachelor of Computer Applications</strong>
                  <br />
                  Bhakta Kavi Narsinh Mehta University
                  <br />
                  <em>Running last sem</em>
                  <br />
                  CGPI: 8.33/10 (up to 5th semester)
                </li>
                <li>
                  <strong>SSC and HSC (Commerce)</strong>
                  <br />
                  Shree Sarvoday High School (GSEB)
                  <br />
                  <em>2018 - 2022</em>
                </li>
              </ul>
            </div>

            <div className="skills-section section">
              <h3>Skills</h3>
              <ul>
                <li>
                  <strong>Languages:</strong> JavaScript, Python, HTML, CSS, C, C++
                </li>
                <li>
                  <strong>Frameworks:</strong> React, Django
                </li>
                <li>
                  <strong>Tools:</strong> Git,  VS Code
                </li>
                <li>
                  <strong>Databases:</strong> MySQL
                </li>
              </ul>
            </div>
          </div>
          <div className="my-works-container">
            <h1 className="my-works-title">My Works</h1>
          </div>

          <div className="video-description">
            <div className="video-container section1">
              <video src={portfolioVideo} controls autoPlay muted loop></video>
            </div>
            <div className="description-container">
              <h3>Raj Ice Creams</h3>
              <p>
              Self-initiated project | [2024] <br />
              <br />Designed and developed a full-featured e-commerce
              website for an ice cream shop using Django, creating
              a seamless online shopping experience for customers
              . <br />
              <br />Implemented essential pages, including homepage with
              carousel and a checkout process with fixed delivery
              location and Cash on Delivery option. <br />
              <br />Skills Used: Django, HTML, CSS, JavaScript, Python, User
              Authentication, E-commerce Functionality, Web Design,
              Database Management
              </p>
            </div>
          </div>


          <div className="video-description">
            <div className="video-container section1">
              <video src={portfolioVideo1} controls autoPlay muted loop></video>
            </div>
            <div className="description-container">
              <h3>Raj E-commerce Website</h3>
              <p>
              Self-initiated project | [2024] <br />
              <br />Developed a single-page application (SPA) with
              React.js and Django, featuring product browsing, cart
              management, user authentication, and personalized
              account management. Styled the frontend using
              Bootstrap for a modern, responsive design and utilized
              Django's admin interface for managing products,
              orders, and user data.<br />

              <br />IBuilt a robust Django backend with secure data
              storage, REST APIs for smooth frontend-backend
              communication, and essential e-commerce features like
              product filtering, categories, and Cash on Delivery
              checkout. Optimized for scalability and deployed for
              production use. <br />

              <br />Skills Used: Django, React.js, REST APIs, Bootstrap, E-
              commerce Functionality, User Authentication, SPA
              Development, Admin Interface, Full-Stack Development
              </p>
            </div>
          </div>


          <div className="video-description">
            <div className="video-container section1">
              <video src={portfolioVideo2} controls autoPlay muted loop></video>
            </div>
            <div className="description-container">
              <h3>Thumbnail Portfolio Website</h3>
              <p>
              Self-initiated project | [2024] <br />
              <br />Developed a visually engaging portfolio website for a
              thumbnail creator, allowing users to browse, filter, and
              view a diverse gallery of professional thumbnails. When you go to contact page enter email and your message, 
              click send message button then that data is sent to my email<br />

              <br />Used Django for backend functionality to manage
              thumbnail data, categories, and contact forms,
              enabling easy addition and categorization of portfolio
              items. <br />

              <br />Skills Used: Django, HTML, CSS, JavaScript, Python,
              JavaScript Animations, Responsive Design, Problem-
              Solving & Debugging
              </p>
            </div>
          </div>

          <section className="project-links-section">
            <h2 className="section-title">🚀 Live Projects</h2>
            <ul className="project-links">
              {projects.map((project, index) => (
                <li key={index} className="project-item">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>


          
          <div className="social-links">
            <h3>Connect with Me</h3>
            <div className="icons">
              <a
                href="https://www.instagram.com/rajmakwana008?igsh=ejR6dGx2ampza3gy"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram className="social-icon instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajmakwana08"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin className="social-icon linkedin" />
              </a>
              <a
                href="https://github.com/Rajmakwana08"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub className="social-icon github" />
              </a>
              <div className="whatsapp-container">
                <button
                  className="social-icon-button whatsapp"
                  title="WhatsApp: 7359731464"
                >
                  <FaWhatsapp className="social-icon" />
                </button>
                <div className="whatsapp-tooltip">
                  WhatsApp: 7359731464
                </div>
              </div>
            </div>
          </div>


        </>
      )}
    </div>
  );
}

export default App;
