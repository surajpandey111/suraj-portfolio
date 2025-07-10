import React from "react";
import Slider from "react-slick";

function FeaturedProjectsCarousel() {
  const projects = [
    {
      name: "Gyanm: The DeepAI",
      description: "India’s first homegrown AI platform for text and image generation, automation, and productivity tools.",
      image: "/gyanm.jpg",  // place this image in public/gyanm.jpg
      github: "",
      youtube: "https://youtu.be/2VCIfdPtp6w",
      live: "https://researchai-gpt.onrender.com/"
    },
    {
      name: "Mineral Targeting 2025",
      description: "AI-driven solution for mineral exploration, identifying 501 high-potential mineral zones using ensemble models.",
      image: "/mineral.jpg",
      github: "https://github.com/surajpandey111/mineral-targeting-2025",
      youtube: "https://youtu.be/AAd4PiICbAI",
      live: "https://mineral-targeting-2025.onrender.com/"
    },
    {
      name: "Alexander AI Assistant",
      description: "Voice-driven Django assistant capable of complex queries, coding, and image detection tasks.",
      image: "/alexander.jpg",
      github: "https://github.com/surajpandey111/alaxander-ai-voice-assiatsmt",
      youtube: "https://youtu.be/HCcHAhpkELo"
    },
    {
      name: "SHL Recommendation Engine",
      description: "RAG-based SHL assessments recommender using Streamlit + LangChain + Gemini API.",
      image: "/shl.jpg",
      github: "https://github.com/surajpandey111/shl-recommendation-engine",
      live: "https://shl-recommendation-engine-rag-suraj.streamlit.app/"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary fw-bold mb-4">🚀 Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div className="card shadow p-3" key={idx}>
            <img
              src={project.image}
              className="img-fluid rounded"
              alt={project.name}
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h4 className="fw-bold">{project.name}</h4>
              <p>{project.description}</p>
              <div>
                {project.github && (
                  <a className="btn btn-dark m-1" target="_blank" rel="noreferrer" href={project.github}>
                    GitHub
                  </a>
                )}
                {project.youtube && (
                  <a className="btn btn-danger m-1" target="_blank" rel="noreferrer" href={project.youtube}>
                    YouTube
                  </a>
                )}
                {project.live && (
                  <a className="btn btn-success m-1" target="_blank" rel="noreferrer" href={project.live}>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedProjectsCarousel;
