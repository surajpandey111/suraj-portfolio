import React, { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      // Existing particles for background
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#00ddeb" },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 4, random: true },
          line_linked: { enable: true, distance: 150, color: "#007bff", opacity: 0.5 },
          move: { enable: true, speed: 2.5, direction: "none", random: true }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 120, duration: 0.5 } }
        },
        retina_detect: true
      });

      // Tech particles for AI focus
      window.particlesJS("tech-particles", {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 1000 } },
          color: { value: "#00ffcc" },
          shape: { type: "triangle" },
          opacity: { value: 0.4, random: true },
          size: { value: 3, random: true },
          line_linked: { enable: false },
          move: { enable: true, speed: 1.5, direction: "top", random: true }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: false }, onclick: { enable: false } }
        },
        retina_detect: true
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="about-container">
      <div id="particles-js" className="parallax-background"></div>
      <div id="tech-particles" className="tech-particles"></div>
      <div className="about-content">
        <div className="about-grid">
          <div className="about-image-container">
            <img
              src="/suraj.jpg"
              alt="Suraj Kumar Pandey"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h1 className="about-title">Hi, I’m Suraj Kumar Pandey</h1>
            <p className="about-subtitle">
              Polymathic AI/ML & Full-Stack Developer, founder (CEO & CTO) of <span className="text-success">Gyanm: The DeepAI</span>, India’s first AI productivity platform (prototype, patent pending).
            </p>
            <h2 className="about-section-title">My Mission</h2>
            <p className="about-description">
              I am driven to create scalable, human-centered technology that solves real-world problems. By blending AI innovation with robust engineering, I aim to empower individuals and organizations with tools that enhance productivity and inspire progress.
            </p>
            <h2 className="about-section-title">Key Projects</h2>
            <ul className="about-list">
              <li><b>Alexander AI</b>: Voice-driven assistant built with Django and WolframAlpha for task automation and coding support.</li>
              <li><b>Real-Time Object Detection</b>: YOLOv3 + OpenCV for real-time webcam-based bounding box detection.</li>
              <li><b>Natural Disaster Prediction</b>: Tkinter app with Random Forest and live weather/geolocation APIs.</li>
              <li><b>Diabetes Prediction</b>: ML-powered Tkinter app for risk analysis and classification.</li>
              <li><b>Mineral Exploration AI</b>: 7 ensemble ML models identifying 501 high-potential mineral zones for the Govt. of India.</li>
              <li><b>Mineral RFR</b>: Random Forest Regressor models on NGCM datasets for copper, iron, and gold concentrations.</li>
              <li><b>PDF-to-Excel Converter</b>: Windows .exe tool with AI-powered Streamlit parser.</li>
              <li><b>AI-Powered Schemes Chatbot</b>: Streamlit + RAG chatbot with multilingual support for government scheme applications.</li>
              <li><b>AI-Powered Resume Builder</b>: Streamlit app generating ATS-friendly resumes.</li>
              <li><b>AI-Powered Job Portal</b>: Streamlit app for candidate-job matching.</li>
              <li><b>REC Azamgarh Chatbot</b>: Streamlit, HuggingFace, FAISS for student query support.</li>
              <li><b>Gyanm: The DeepAI</b>: AI SaaS platform for text/image tasks and workflow automation.</li>
            </ul>
            <h2 className="about-section-title">Featured Achievements</h2>
            <div className="about-achievements">
              <ul>
                <li>TechFest Medalist, IIT Bombay (2022-2023) for innovative tech solutions.</li>
                <li>Invited to Google AI Gatherings 2024 for AI productivity innovations.</li>
                <li>DM Officials Award, Azamgarh, for AI contributions.</li>
                <li>3-Time E-CELL Awards Winner, GEC Azamgarh (2023-2025) for entrepreneurship.</li>
                <li>Led TechXplore 2024 Hackathon, mentoring 50+ frontend developers.</li>
              </ul>
            </div>
            <h2 className="about-section-title">Technical Expertise</h2>
            <p className="about-description">
              Proficient in AI/ML (TensorFlow, PyTorch, HuggingFace), Full-Stack (React, Django, Flask), Cloud (AWS, Google Cloud), and Data Science (Pandas, Scikit-learn). Passionate about geospatial analysis and DevOps.
            </p>
            <div className="collaboration-section">
              <h2>Let’s Collaborate</h2>
              <p>Ready to build groundbreaking AI or software solutions? I’m open to remote/onsite roles, freelancing ($30-$50/hour), or partnerships with Gyanm.</p>
              <Link to="/contact" className="btn btn-primary btn-lg">Hire Me</Link>
              <a href="https://github.com/surajpandey111/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">View GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;