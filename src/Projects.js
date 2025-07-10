import React, { useEffect } from "react";
import Slider from "react-slick";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Gyanm: The DeepAI",
      description: "India’s first homegrown AI platform for text, coding, research, and automation.",
      image: "/gyanm.jpg",
      live: "https://researchai-gpt.onrender.com/",
      youtube: "https://youtu.be/2VCIfdPtp6w"
    },
    {
      name: "AI-Powered PDF to Excel & Smart Search",
      description: "Streamlit-powered smart PDF to Excel parser with semantic search.",
      image: "/pdf2excel.jpg",
      live: "https://gyanmaipdf-to-excel-super-smart.streamlit.app/"
    },
    {
      name: "PDF to Excel Application .exe",
      description: "Smart PDF to Excel parser with semantic search, packaged as a Windows .exe, contact for zip files to try.",
      image: "/pdfexcel.jpg",
      live: "https://gyanmaipdf-to-excel-super-smart.streamlit.app/"
    },
    {
      name: "AI-Powered SHL Recommendation Engine (RAG)",
      description: "Recommends SHL assessments with AI + LangChain.",
      image: "/shl.jpg",
      github: "https://github.com/surajpandey111/shl-recommendation-engine",
      live: "https://shl-recommendation-engine-rag-suraj.streamlit.app/"
    },
    {
      name: "AI-Powered Schemes Chatbot",
      description: "RAG-powered chatbot for scholarships",
      image: "/schemes.jpg",
      github: "https://github.com/surajpandey111/AI_Powered_Schemes",
      live: "https://aipowered-govt-schemes.streamlit.app/"
    },
    {
      name: "REC Azamgarh AI Chatbot",
      description: "Streamlit chatbot with FAISS for college queries.",
      image: "/rec.jpg",
      live: "https://rec-azamgarh-chatbot.streamlit.app/"
    },
    {
      name: "Alexander AI Assistant",
      description: "Voice-driven Django-based assistant with advanced queries.",
      image: "/alexander.jpg",
      github: "https://github.com/surajpandey111/alaxander-ai-voice-assiatsmt",
      youtube: "https://youtu.be/_P1VxD1cGHs",
      youtube1: "https://youtu.be/HCcHAhpkELo"
    },
    {
      name: " AI/ML Mineral Targeting (Govt. of India)",
      description: "7 AI/ML{QIENN,STGNN,CNN,Esemble,XGboost models etc...} + 2(Special including RFR & DT ) Ensemble models for mineral exploration on Dyanamic Dataset(Govt. India Project), Flask + React deployment.",
      image: "/mineral.jpg",
      github: "https://github.com/surajpandey111/mineral-targeting-2025",
      live: "https://mineral-targeting-2025.onrender.com/",
      youtube: "https://youtu.be/AAd4PiICbAI"
    },
    {
      name: "Real-Time Object Detection",
      description: "YOLOv3 OpenCV-based webcam detection app.",
      image: "/objectdetection.jpg",
      github: "https://github.com/surajpandey111/object_detection",
      youtube: "https://youtu.be/L2bCl2OS-EU"
    },
    {
      name: "Natural Disaster Predictor",
      description: "Tkinter earthquake & weather prediction tool.",
      image: "/disaster.jpg",
      github: "https://github.com/surajpandey111/disaster_predictor.git",
      youtube: "https://youtu.be/_gpomZwuHgg"
    },
    {
      name: "Diabetes Prediction System",
      description: "Tkinter app to classify diabetes risk with user inputs.",
      image: "/diabetes.jpg",
      github: "https://github.com/surajpandey111/diabetes_prediction.git",
      youtube: "https://youtu.be/fMnnX1Pz4bc"
    },
    {
      name: "Google AI Productivity Submission",
      description: "Generative AI submission to improve productivity in daily work.",
      image: "/googleai.jpg",
      live: "https://ai.google.dev/competition/projects/ai-for-everyday-work"
    },
    {
      name: "TechXplore 2024 Hackathon",
      description: "Organized a frontend-focused developer event to foster innovation.",
      image: "/techxplore.jpg",
      live: "https://techxplore.tiiny.site/"
    },
    {
      name: "College Library Website",
      description: "Complete HTML/CSS library website built in 2nd year.",
      image: "/library.jpg",
      live: "https://collegelibrari-2nd.netlify.app/",
      github: "https://github.com/surajpandey111/college-library-website-2nd-yr"
    },
    // future projects
    {
      name: "Personalized Health Coach (developing)",
      description: "ML-powered health coach with diet and sleep analysis.",
      image: "/healthcoach.jpg"
    },
    {
      name: "Image-to-Image House Preview (GAN)",
      description: "Image-to-image preview for house painting transformations.",
      image: "/housegan.jpg"
    },
    {
      name: "Quantum-enhanced ML (research)",
      description: "Exploring quantum circuits with ML for complex tasks.",
      image: "/quantum.jpg"
    },
    {
      name: "Neuro-symbolic AI (research)",
      description: "Combines symbolic reasoning + neural networks.",
      image: "/neurosymbolic.jpg"
    },
    {
      name: "Federated Learning Platform (research)",
      description: "Secure collaborative ML without raw data sharing.",
      image: "/federated.jpg"
    },
    {
      name: "AI Meme Generator",
      description: "Creates memes from a text topic using generative models.",
      image: "/meme.jpg"
    },
    {
      name: "AI Voice & Personality Cloner",
      description: "Clones a person’s voice & personality for chatbots.",
      image: "/voiceclone.jpg"
    },
    {
      name: "AI Crop Disease Detector",
      description: "Predicts crop diseases from camera photos using ML.",
      image: "/crop.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

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
    <div className="projects-container">
      <div id="particles-js" className="parallax-background"></div>
      <h2 className="projects-title">🚀 Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-front">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-body">
                <h5 className="project-name">{project.name}</h5>
                <p className="project-description">{project.description}</p>
                <div className="project-links mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark m-1">
                      GitHub
                    </a>
                  )}
                  {project.youtube && (
                    <a href={project.youtube} target="_blank" rel="noreferrer" className="btn btn-danger m-1">
                      YouTube
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-success m-1">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-back">
              <div className="project-back-content">
                <h5>Links</h5>
                {project.github && <p><a href={project.github} target="_blank" rel="noreferrer">GitHub</a></p>}
                {project.youtube && <p><a href={project.youtube} target="_blank" rel="noreferrer">YouTube</a></p>}
                {project.live && <p><a href={project.live} target="_blank" rel="noreferrer">Live Demo</a></p>}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <h2 className="projects-title mt-5">All Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-front">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-body">
                <h5 className="project-name">{project.name}</h5>
                <p className="project-description">{project.description}</p>
                <div className="project-links mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark m-1">
                      GitHub
                    </a>
                  )}
                  {project.youtube && (
                    <a href={project.youtube} target="_blank" rel="noreferrer" className="btn btn-danger m-1">
                      YouTube
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-success m-1">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-back">
              <div className="project-back-content">
                <h5>Links</h5>
                {project.github && <p><a href={project.github} target="_blank" rel="noreferrer">GitHub</a></p>}
                {project.youtube && <p><a href={project.youtube} target="_blank" rel="noreferrer">YouTube</a></p>}
                {project.live && <p><a href={project.live} target="_blank" rel="noreferrer">Live Demo</a></p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;