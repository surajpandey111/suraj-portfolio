import React, { useEffect } from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Artificial Intelligence", level: 95, desc: "Expert in AI systems" },
    { name: "Machine Learning", level: 95, desc: "Advanced ML models" },
    { name: "Deep Learning", level: 90, desc: "Neural network optimization (CNN, RNN, Transformers)" },
    { name: "Python", level: 95, desc: "Core scripting & automation" },
    { name: "JavaScript", level: 90, desc: "Dynamic web development" },
    { name: "C", level: 85, desc: "System-level programming" },
    { name: "HTML", level: 90, desc: "Structural web design" },
    { name: "CSS", level: 90, desc: "Stylish web interfaces" },
    { name: "SQL", level: 80, desc: "Database management" },
    { name: "React", level: 90, desc: "Component-based UI" },
    { name: "Django", level: 85, desc: "Robust backend frameworks" },
    { name: "Streamlit", level: 85, desc: "Data app deployment" },
    { name: "TensorFlow", level: 80, desc: "ML framework mastery" },
    { name: "PyTorch", level: 80, desc: "Deep learning research" },
    { name: "FAISS", level: 80, desc: "Efficient similarity search" },
    { name: "LangChain", level: 80, desc: "AI-driven workflows" },
    { name: "HuggingFace Transformers", level: 75, desc: "NLP model integration" },
    { name: "OpenCV", level: 85, desc: "Computer vision processing" },
    { name: "Satellite (ASTER) & Raster Image Processing", level: 80, desc: "Geospatial data analysis" },
    { name: "Image Segmentation", level: 80, desc: "Advanced image processing" },
    { name: "Object Detection", level: 85, desc: "Real-time detection systems" },
    { name: "Geospatial Analysis (GDAL, QGIS, Rasterio)", level: 75, desc: "Spatial data handling" },
    { name: "Pandas", level: 85, desc: "Data manipulation" },
    { name: "NumPy", level: 85, desc: "Numerical computing" },
    { name: "Matplotlib", level: 80, desc: "Data visualization" },
    { name: "Seaborn", level: 80, desc: "Statistical plotting" },
    { name: "Scikit-learn", level: 85, desc: "Machine learning tools" },
    { name: "Time Series", level: 75, desc: "Temporal data analysis" },
    { name: "Exploratory Data Analysis (EDA)", level: 80, desc: "Data insight generation" },
    { name: "Flask", level: 80, desc: "Lightweight web apps" },
    { name: "C++", level: 85, desc: "High-performance coding" },
    { name: "Full Stack Development", level: 90, desc: "End-to-end solutions" },
    { name: "Data Structures & Algorithms", level: 90, desc: "Optimized problem-solving" },
    { name: "Cloud Platforms (AWS/Render)", level: 80, desc: "Scalable deployments" },
    { name: "Tailwind CSS", level: 80, desc: "Utility-first styling" },
    { name: "OAuth", level: 75, desc: "Secure authentication" },
    { name: "Firebase", level: 75, desc: "Real-time database" },
    { name: "WebSockets", level: 75, desc: "Real-time communication" },
    { name: "Custom AI Dashboards", level: 80, desc: "Interactive analytics" },
    { name: "Git & GitHub", level: 85, desc: "Version control" },
    { name: "CI/CD", level: 75, desc: "Continuous integration" },
    { name: "Docker", level: 75, desc: "Containerization" },
    { name: "AWS", level: 80, desc: "Cloud services" },
    { name: "Google Cloud", level: 75, desc: "Cloud platform expertise" },
    { name: "Render", level: 80, desc: "Deployment platform" },
    { name: "Vercel", level: 75, desc: "Frontend deployment" },
    { name: "Basic Kubernetes", level: 70, desc: "Container orchestration" },
    { name: "STGNN", level: 80, desc: "Spatial-temporal graph networks" },
    { name: "QIENN", level: 75, desc: "Quantum-inspired neural networks" },
    { name: "Transfer Learning", level: 80, desc: "Model adaptation" },
    { name: "Genetic Algorithms", level: 75, desc: "Evolutionary optimization" },
    { name: "Generative AI", level: 80, desc: "Creative AI models" },
    { name: "LLMs (OpenAI, Grok)", level: 75, desc: "Large language models" },
    { name: "AI Chatbots", level: 85, desc: "Conversational AI" },
    { name: "AI Automation Systems", level: 80, desc: "Workflow automation" },
    { name: "Semantic Search", level: 75, desc: "Intelligent search" },
    { name: "Text Summarization", level: 75, desc: "NLP summarization" },
    { name: "Text-to-Image Models", level: 70, desc: "Generative image creation" }
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
    <div className="skills-container">
      <div id="particles-js" className="parallax-background"></div>
      <h2 className="skills-title">My Technical Universe</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-front">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div
                  className="skill-bar-level"
                  style={{ width: `${skill.level}%` }}
                  data-percent={skill.level}
                ></div>
              </div>
              <div className="skill-percent">{skill.level}%</div>
            </div>
            <div className="skill-back">
              <div className="skill-desc">{skill.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;