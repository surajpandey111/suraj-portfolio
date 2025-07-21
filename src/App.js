import React from "react";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  import PortfolioChat from "./PortfolioChat";
  import PortfolioChatFaiss from "./PortfolioChatFaiss";
  import AdminPosts from "./AdminPosts";
  import About from "./About";
  import Timeline from "./Timeline";
  import Contact from "./Contact";
  import Skills from "./Skills";
  import Projects from "./Projects";
  import Home from "./Home";
  import NotFound from "./NotFound";
  import "./App.css";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';

  function App() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <PortfolioChat />
        <PortfolioChatFaiss />

        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c3e50', minHeight: '60px' }}>
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">Suraj Home</Link>
            <span className="navbar-text mx-3" style={{ color: '#00ddeb', backgroundColor: 'rgba(0, 221, 235, 0.2)', padding: '5px 10px', borderRadius: '5px' }}>
            SurajTechLabs - portfolio platform
          </span>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/timeline">Timeline</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admin-posts">Admin Posts</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="scrolling-slit">
          <div className="scrolling-text">
            Service of AI Development Start, Full Stack Website Development, LLMs Development, Custom AI Models Development, SaaS Model etc at Large Discount Contact Me
          </div>
        </div>

        <button
          onClick={() => window.open("https://portfolio-suraj-ai.streamlit.app/", "_blank")}
          style={{
            position: "fixed",
            top: 50,
            left: 20,
            background: "#007bff",
            color: "#fff",
            borderRadius: "50%",
            width: 60,
            height: 60,
            border: "none",
            fontSize: "24px",
            zIndex: 999
          }}
        >
          🤖
        </button>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-posts" element={<AdminPosts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <footer className="app-footer">
          <div className="footer-content">
            <p className="footer-text">© 2025 <strong>Suraj Kumar Pandey</strong> — Government Engineer. All rights reserved.</p>
            <p className="footer-text"> Made with ❤️ by Suraj Kumar Pandey</p>
            <div className="footer-social">
              <a href="https://github.com/surajpandey111/" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src="/github-icon.jpg" alt="GitHub" className="social-icon" loading="lazy" />
              </a>
              <a href="https://www.linkedin.com/in/suraj-kumar-pandey-gyanmaifounder/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src="/linkedin-icon.jpg" alt="LinkedIn" className="social-icon" loading="lazy" />
              </a>
              <a href="mailto:worldforensic@gmail.com" title="Email">
                <img src="/email-icon.jpg" alt="Email" className="social-icon" loading="lazy" />
              </a>
            </div>
          </div>
        </footer>
      </Router>
    );
  }

  export default App;