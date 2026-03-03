import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdsLanding.css";

function AdsLanding() {
  const [showAd, setShowAd] = useState(true); // ✅ Always show on load
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/suraj1.jpg",
    "/suraj2.jpg",
    "/suraj3.jpg",
    "/suraj4.jpg",
    "/suraj5.jpg",
    "/nielit-cert.jpg",
    "/award.jpg"
  ];

  // Image Slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto close after 20 sec
  useEffect(() => {
    if (secondsLeft <= 0) {
      setShowAd(false);
    }
  }, [secondsLeft]);

  const closeAd = () => {
    setShowAd(false);
  };

  if (!showAd) return null;

  return (
    <div className="ads-overlay">
      <div className="ads-glow-bg"></div>

      <button className="close-btn" onClick={closeAd}>✖</button>

      <div className="ads-content">

        <div className="limited-banner">
          🔥 Limited AI Development Slots Available
        </div>

        <h1 className="ads-title">
          🚀 AI Solutions Trusted by Government & Enterprises
        </h1>

        <p className="ads-subtitle">
          🇮🇳 Government of India Certified AI Researcher (NIELIT) <br />
          Government Engineer – IT Domain <br />
          IndiaAI Summit Participant
        </p>

        <div className="countdown">
          Closing In: {secondsLeft}s
        </div>

        <div className="ads-slider">
          <img src={images[currentSlide]} alt="AI Event" />
        </div>

        <div className="cert-highlight">
          Govt of India/Govt of UP Scientist – AI Researcher from NIELIT
        </div>

        <div className="ads-projects">

          <a href="https://smart-cook-ai.streamlit.app/" target="_blank" rel="noreferrer">
            <img src="/cooking-ai.jpg" alt="India AI Portal" />
            <span>Agentic AI Cooking Assistant</span>
          </a>

          <a href="https://gyanmaipdf-to-excel-super-smart.streamlit.app/" target="_blank" rel="noreferrer">
            <img src="/pdf2excel.jpg" alt="AI PDF to Excel" />
            <span>AI PDF to Excel</span>
          </a>

          <a href="https://ai-hub-multidomain.onrender.com/" target="_blank" rel="noreferrer">
            <img src="/gyanm.jpg" alt="AI Hub Platform" />
            <span>AI Hub Platform</span>
          </a>

        </div>

        <Link to="/booking" className="ads-cta-btn" onClick={closeAd}>
          🚀 Book Your Project Now
        </Link>

      </div>
    </div>
  );
}

export default AdsLanding;