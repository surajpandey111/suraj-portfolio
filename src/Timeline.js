import React, { useEffect } from "react";
import "./Timeline.css";

function Timeline() {
  const timelineItems = [
    {
      year: "2022–Present",
      title: "B.Tech in Information Technology",
      place: "Government Engineering College Azamgarh",
      details: "JEE Qualified (90.89%), CGPA 7.5"
    },
    {
      year: "2023–Present",
      title: "BS Data Science and Applications",
      place: "IIT Madras",
      details: "Enrolled via JEE Advanced, ongoing"
    },
    {
      year: "2022–2023",
      title: "Campus Ambassador",
      place: "IIT Bombay Techfest",
      details: "Promoted student engagement and technical events"
    },
    {
      year: "2022–2023",
      title: "<S.D(Software Development), Game Theory, Mech. Design, E&P ML (Xarray, Plotly)",
      place: "IIT Bombay",
      details: "Attended workshops on advanced software development and machine learning"
    },
    {
      year: "2023–2025",
      title: "T&P Coordinator",
      place: "GEC Azamgarh",
      details: "Organized placement and training activities"
    },
    {
      year: "2025",
      title: "IBM Hackathon Participation",
      place: "Govt. Collaboration",
      details: "Worked on social-impact data problem statements"
    },
    {
      year: "2025",
      title: "Govt. of India Mineral Targeting AI Contribution",
      place: "IndiaAI Hackathon",
      details: "Developed ensemble ML models for mineral prediction"
    },
    {
      year: "2025–26",
      title: "Technical General Secretary (T&P & College)",
      place: "GEC Azamgarh",
      details: "Leadership role driving technical activities"
    },
    {
      year: "2024",
      title: "Google AI Gatherings",
      place: "India AI Community",
      details: "Project selected in Hackathon discussions on generative AI"
    },
    {
      year: "2023–2025",
      title: "International Entrepreneurship Cell Awards",
      place: "GEC Azamgarh",
      details: "3 consecutive years of recognition"
    },
    {
      year: "2024–2025",
      title: "District Magistrate Officials Award",
      place: "Azamgarh",
      details: "Honored for contributions in technology and social innovation"
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
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
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="timeline-container">
      <div id="particles-js" className="parallax-background"></div>
      <h2 className="timeline-title">🚀 My Education & Achievements</h2>
      <div className="timeline-grid">
        {timelineItems.map((item, index) => (
          <div
            className="timeline-card"
            key={index}
          >
            <div className="timeline-front">
              <div className="timeline-body">
                <h5 className="timeline-title-text">{item.title}</h5>
                <h6 className="timeline-subtitle">{item.place}</h6>
                <p className="timeline-year"><strong>{item.year}</strong></p>
                <p className="timeline-details">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;