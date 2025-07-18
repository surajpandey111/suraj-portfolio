import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCode,
  faCloud,
  faDatabase,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 1200 } },
            color: { value: "#00ddeb" },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 100, color: "#007bff", opacity: 0.3 },
            move: { enable: true, speed: 1.5, direction: "none", random: true },
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
            modes: { repulse: { distance: 80, duration: 0.3 } },
          },
          retina_detect: true,
        });
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="home-container">
      <div id="particles-js" className="parallax-background" aria-hidden="true"></div>
      <main className="home-content">
        <header className="hero-section">
          <img
            src="/avatar.jpg"
            srcSet="/avatar-small.jpg 480w, /avatar.jpg 800w"
            sizes="(max-width: 600px) 480px, 800w"
            alt="Suraj Kumar Pandey, AI and Full-Stack Developer"
            className="hero-avatar"
            loading="lazy"
          />
          <h1 className="home-title">Suraj Kumar Pandey: Crafting AI-Powered Solutions for Global Impact</h1>
          <p className="home-subtitle">
            Full-Stack Developer & AI/ML Engineer | Founder of Gyanm - The DeepAI (Patent Pending) & SurajTechLabs(AI Software Development/Reserch Labs) | Actively Seeking Collaborations & Software Engineering Opportunities
          </p>
          <nav className="home-buttons" aria-label="Main navigation">
            <Link className="btn btn-contact m-2 btn-lg" to="/contact" aria-label="Hire or collaborate with Suraj">
              Hire Me / Collaborate
            </Link>
            <Link className="btn btn-projects m-2 btn-lg" to="/projects" aria-label="Explore Suraj's projects">
              Explore Projects
            </Link>
            <Link className="btn btn-skills m-2 btn-lg" to="/skills" aria-label="View Suraj's skills">
              My Skills
            </Link>
            <Link className="btn btn-about m-2 btn-lg" to="/about" aria-label="Learn more about Suraj">
              About Me
            </Link>
            <Link className="btn btn-achievements m-2 btn-lg" to="/timeline" aria-label="View Suraj's achievements">
              Achievements
            </Link>
            <Link className="btn btn-admin-posts m-2 btn-lg" to="/admin-posts" aria-label="Admin posts">
              Admin Posts
            </Link>
          </nav>
          <p className="collaboration-pitch">
            Ready to build groundbreaking AI or software solutions? Let’s connect!
          </p>
        </header>

        <section className="projects-section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Featured Projects</h2>
          <div className="home-grid">
            <article className="home-card">
              <img
                src="/alexander.jpg"
                srcSet="/alexander-small.jpg 480w, /alexander.jpg 800w"
                sizes="(max-width: 600px) 480px, 800w"
                alt="Alexander AI voice assistant demo"
                className="project-image"
                loading="lazy"
              />
              <div className="home-body">
                <h3 className="home-card-title">Alexander for Everything</h3>
                <p className="home-card-text">
                  Voice-driven AI assistant for coding and data retrieval. (Built with Django, Python, OpenCV)
                </p>
                <p className="impact-text">Featured in Google AI Gatherings 2024.</p>
                <Link
                  to="/projects"
                  className="btn btn-primary btn-highlight"
                  aria-label="Watch Alexander AI demo and try it"
                >
                  Watch & Try Now
                </Link>
              </div>
            </article>
            <article className="home-card">
              <img
                src="/mineral.jpg"
                srcSet="/mineral-small.jpg 480w, /mineral.jpg 800w"
                sizes="(max-width: 600px) 480px, 800w"
                alt="AI-driven mineral exploration heatmap"
                className="project-image"
                loading="lazy"
              />
              <div className="home-body">
                <h3 className="home-card-title">AI-Driven Mineral Exploration</h3>
                <p className="home-card-text">
                  7 AI/ML models predicting mineral zones with 4x accuracy. (Built with Flask, React, Scikit-learn)
                </p>
                <p className="impact-text">Identified 501 high-potential zones for Govt. of India.</p>
                <Link
                  to="/projects"
                  className="btn btn-primary btn-highlight"
                  aria-label="View mineral targeting project on GitHub and try it"
                >
                  View & Try Now
                </Link>
              </div>
            </article>
            <article className="home-card">
              <img
                src="/schemes.jpg"
                srcSet="/schemes-small.jpg 480w, /schemes.jpg 800w"
                sizes="(max-width: 600px) 480px, 800w"
                alt="AI-powered schemes chatbot interface"
                className="project-image"
                loading="lazy"
              />
              <div className="home-body">
                <h3 className="home-card-title">AI-Powered Schemes Chatbot</h3>
                <p className="home-card-text">
                  RAG-powered chatbot for scholarship queries. (Built with Streamlit, FAISS, HuggingFace)
                </p>
                <p className="impact-text">Serving 5000+ students in UP.</p>
                <Link
                  to="/projects"
                  className="btn btn-primary btn-highlight"
                  aria-label="Try AI-powered schemes chatbot now"
                >
                  Try It Now
                </Link>
              </div>
            </article>
          </div>
          <Link to="/projects" className="btn btn-projects btn-lg view-all-btn btn-highlight" aria-label="View all projects">
            View All Projects
          </Link>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="section-title">Skills Snapshot</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <FontAwesomeIcon icon={faBrain} className="skill-icon" aria-hidden="true" />
              <h3>AI/ML</h3>
              <p>Deep Learning, LLMs, NLP, Computer Vision (TensorFlow, PyTorch, HuggingFace, OpenCV)</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCode} className="skill-icon" aria-hidden="true" />
              <h3>Full-Stack</h3>
              <p>Python, JavaScript, React.js, Django, Flask, REST APIs, Tailwind CSS</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faCloud} className="skill-icon" aria-hidden="true" />
              <h3>DevOps & Cloud</h3>
              <p>Git, Docker, AWS, Google Cloud, Render, Vercel</p>
            </div>
            <div className="skill-item">
              <FontAwesomeIcon icon={faDatabase} className="skill-icon" aria-hidden="true" />
              <h3>Data Science</h3>
              <p>Pandas, NumPy, Scikit-learn, Geospatial Analysis (GDAL, QGIS)</p>
            </div>
          </div>
          <Link to="/skills" className="btn btn-skills btn-lg" aria-label="View full skillset">
            See Full Skillset
          </Link>
        </section>

        <section className="achievements-section" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="section-title">Achievements & Recognition</h2>
          <div className="achievements-timeline">
            <div className="achievement-item">
              <FontAwesomeIcon icon={faAward} className="achievement-icon" aria-hidden="true" />
              <h3>TechFest Medalist, IIT Bombay (2022-2023)</h3>
              <p>Recognized for innovative tech solutions.</p>
            </div>
            <div className="achievement-item">
              <FontAwesomeIcon icon={faAward} className="achievement-icon" aria-hidden="true" />
              <h3>Google AI Gatherings Invitation (2024)</h3>
              <p>Invited to discuss AI innovations.</p>
            </div>
            <div className="achievement-item">
              <FontAwesomeIcon icon={faAward} className="achievement-icon" aria-hidden="true" />
              <h3>DM Officials Award, Azamgarh</h3>
              <p>Honored for contributions to AI solutions.</p>
            </div>
            <div className="achievement-item">
              <FontAwesomeIcon icon={faAward} className="achievement-icon" aria-hidden="true" />
              <h3>E-CELL Awards, GEC Azamgarh (2023-2025)</h3>
              <p>3 consecutive years of entrepreneurship excellence.</p>
            </div>
          </div>
          <Link to="/timeline" className="btn btn-achievements btn-lg" aria-label="View full achievements timeline">
            View Full Timeline
          </Link>
        </section>

        <section className="collaboration-section" aria-labelledby="collaboration-title">
          <h2 id="collaboration-title" className="section-title">Let’s Build the Future Together</h2>
          <p className="collaboration-text">
            I’m a passionate AI/ML and full-stack developer ready to tackle your next software engineering project. Open to remote/onsite roles, freelancing ($30–$50/hour), or collaborative ventures with Gyanm.
          </p>
          <div className="collaboration-buttons">
            <Link to="/contact" className="btn btn-contact btn-lg" aria-label="Hire Suraj">
              Hire Me
            </Link>
            <a
              href="https://github.com/surajpandey111/"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Suraj's GitHub"
            >
              View My GitHub
            </a>
            <Link to="/projects" className="btn btn-primary btn-lg" aria-label="Explore Gyanm - The DeepAI">
              Explore All Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
