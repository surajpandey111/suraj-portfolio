import React, { useState } from "react";

function PortfolioChat() {
  const [messages, setMessages] = useState([
    {
      text: "Hi! I am Suraj's portfolio assistant. Ask me anything about Suraj's projects, skills, or education!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    const lowerInput = input.toLowerCase().trim();

    let matchedAnswer = null;

    // Expanded keyword semantic match
    if (lowerInput.includes("give answer")) {
      matchedAnswer = "OK";
    } else if (
      lowerInput.includes("who") ||
      lowerInput.includes("your name") ||
      lowerInput.includes("about you")
    ) {
      matchedAnswer =
        "I am Suraj Kumar Pandey, an AI/ML & full-stack developer, founder of Gyanm: The DeepAI, India's first AI productivity platform for text, code, and image generation.";
    } else if (lowerInput.includes("gyanm")) {
      matchedAnswer =
        "Gyanm is India's first AI productivity platform for text, image, and code automation. Try it at https://researchai-qpt.onrender.com/.";
    } else if (
      lowerInput.includes("study") ||
      lowerInput.includes("college") ||
      lowerInput.includes("education") ||
      lowerInput.includes("educational")
    ) {
      matchedAnswer =
        "I am pursuing a B.Tech in Information Technology at Government Engineering College Azamgarh (4th Year, CGPA: 7.5, JEE Main Percentile: 90.89, JEE Advanced Qualified 2022) and a BS in Data Science at IIT Madras.";
    } else if (
      lowerInput.includes("mineral") ||
      lowerInput.includes("exploration")
    ) {
      matchedAnswer =
        "Mineral Targeting 2025 was an IndiaAI Hackathon project using seven ensemble ML models (STGNN, CNN, QIENN, Linear Regression, Tuned XGBoost, Stacking Ensemble, Weighted Ensemble) to identify 501 high-potential mineral zones. Best model: Tuned Stacking Ensemble with MSE 7.8744. See it at https://mineral-targeting-2025.onrender.com/.";
    } else if (
      lowerInput.includes("shl") ||
      lowerInput.includes("recommendation")
    ) {
      matchedAnswer =
        "SHL Recommendation Engine uses RAG architecture with LangChain + Gemini to recommend SHL assessments based on user queries, hosted on Streamlit.";
    } else if (lowerInput.includes("pdf") || lowerInput.includes("excel")) {
      matchedAnswer =
        "My AI-powered PDF to Excel parser extracts text and tables with semantic search, packaged as a 51 MB .exe for text and 201 MB for tables. Try it at https://gyanmaipdf-to-excel-super-smart.streamlit.app/.";
    } else if (
      lowerInput.includes("object") ||
      lowerInput.includes("detection") ||
      lowerInput.includes("yolo")
    ) {
      matchedAnswer =
        "My Real-Time Object Detection project uses YOLOv3 + OpenCV with non-max suppression for webcam detection. Check it out at https://youtu.be/L2bCl2OS-EU.";
    } else if (
      lowerInput.includes("alexander") ||
      lowerInput.includes("voice")
    ) {
      matchedAnswer =
        "Alexander AI is a Django-based voice assistant for coding help, real-time queries, and task automation. See demos at https://youtu.be/uVVOiayzgd0 and https://youtu.be/HCcHAhpkELo and https://youtu.be/_P1VxD1cGHs .";
    } else if (
      lowerInput.includes("disaster") ||
      lowerInput.includes("earthquake")
    ) {
      matchedAnswer =
        "The Natural Disaster Predictor uses Tkinter GUI, Random Forest, and weather APIs for earthquake forecasting. Watch it at https://youtu.be/_gpomZwuHgg.";
    } else if (lowerInput.includes("diabetes")) {
      matchedAnswer =
        "The Diabetes Prediction System uses Tkinter GUI and Random Forest for diabetes risk classification. See it at https://youtu.be/fMnnX1Pz4bc";
    } else if (lowerInput.includes("rec") || lowerInput.includes("azamgarh")) {
      matchedAnswer =
        "The REC Azamgarh Chatbot uses SLMs, HuggingFace, and FAISS on Streamlit to answer college queries. Try it at https://rec-azamgarh-chatbot.streamlit.app/.";
    } else if (
      lowerInput.includes("techxplore") ||
      lowerInput.includes("hackathon")
    ) {
      matchedAnswer =
        "TechXplore 2024 was a frontend-focused hackathon I organized at GEC Azamgarh. Visit https://techxplore.tiiny.site/.";
    } else if (
      lowerInput.includes("google ai") ||
      lowerInput.includes("productivity")
    ) {
      matchedAnswer =
        "I submitted a generative AI system for everyday productivity to Google AI's Productivity competition. See it at https://ai.google.dev/competition/projects/ai-for-everyday-work.";
    } else if (lowerInput.includes("library")) {
      matchedAnswer =
        "I built a static HTML/CSS college library website for frontend practice.";
    } else if (lowerInput.includes("it department")) {
      matchedAnswer =
        "I developed a static website for IT department workshops and events at GEC Azamgarh.";
    } else if (lowerInput.includes("federated")) {
      matchedAnswer =
        "My Federated Learning Platform enables privacy-preserving collaborative ML across organizations (research in progress).";
    } else if (lowerInput.includes("meme")) {
      matchedAnswer =
        "The AI Meme Generator is an in-progress text-to-image model for creating memes from prompts.";
    } else if (lowerInput.includes("health")) {
      matchedAnswer =
        "The Personalized Health Coach is an ML-powered app for diet, sleep, and mental health recommendations (in progress).";
    } else if (lowerInput.includes("crop") || lowerInput.includes("disease")) {
      matchedAnswer =
        "The AI Crop Disease Detector is an ML-based phone app to identify crop diseases from camera images (in progress).";
    } else if (lowerInput.includes("quantum")) {
      matchedAnswer =
        "I’m researching a Quantum-enhanced ML Framework to accelerate NP-hard problems (research in progress).";
    } else if (lowerInput.includes("neuro") || lowerInput.includes("symbolic")) {
      matchedAnswer =
        "My Neuro-symbolic AI research combines symbolic reasoning with neural models for explainable AI (in progress).";
    } else if (lowerInput.includes("resume") || lowerInput.includes("builder")) {
      matchedAnswer =
        "The AI-Powered Resume Builder is a Streamlit app generating ATS-friendly resumes using AI.";
    } else if (lowerInput.includes("job") || lowerInput.includes("portal")) {
      matchedAnswer =
        "The AI-Powered Job Portal is a Streamlit app matching candidates to jobs using AI.";
    } else if (
      lowerInput.includes("government") ||
      lowerInput.includes("schemes")
    ) {
      matchedAnswer =
        "The AI-Powered Government Schemes Chatbot uses LLMs and RAG on Streamlit for personalized government scheme recommendations. Try it at https://aipowered-govt-schemes.streamlit.app/.";
    } else if (
      lowerInput.includes("skill") ||
      lowerInput.includes("skills")
    ) {
      matchedAnswer =
        "My skills include AI, ML, Deep Learning, Python, JavaScript, React, Django, Streamlit, TensorFlow, PyTorch, FAISS, LangChain, Gemini API, MySQL, MongoDB, Flask, C++, C, full-stack development, DSA, and cloud platforms like AWS and Render.";
    } else if (
      lowerInput.includes("project") ||
      lowerInput.includes("projects")
    ) {
      matchedAnswer =
        "My projects include Mineral Targeting 2025, SHL Recommendation Engine, AI-powered PDF to Excel parser, Alexander AI Assistant, Real-Time Object Detection, Natural Disaster Predictor, Diabetes Prediction System, REC Azamgarh Chatbot, AI-Powered Government Schemes Chatbot, AI-Powered Resume Builder, AI-Powered Job Portal, and more. Ask about a specific project for details!";
    } else if (
      lowerInput.includes("award") ||
      lowerInput.includes("achievement") ||
      lowerInput.includes("awards") ||
      lowerInput.includes("achievements")
    ) {
      matchedAnswer =
        "I’ve received the District Magistrate Officials Award, Google AI Gatherings Hackathon invitation (2024), IIT Bombay Campus Ambassador (2022–2023), International Entrepreneurship Cell Certificate (2023–2025), IBM Hackathon participation (2025), GSI Mineral Targeting Hackathon (2025), and TechFest Medalist (2022–2023).";
    } else if (
      lowerInput.includes("contact") ||
      lowerInput.includes("email") ||
      lowerInput.includes("phone")
    ) {
      matchedAnswer =
        "You can contact me at worldforensic@gmail.com, +91 7488723028, or via LinkedIn: https://www.linkedin.com/in/suraj-kumar-pandey-gyanmaifounder/.";
    } else if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      matchedAnswer =
        "Hello! Feel free to ask me about my projects, skills, or education.";
    }

    const reply = matchedAnswer
      ? { text: matchedAnswer, sender: "bot" }
      : {
          text: "Sorry, I don't know that yet. Please ask me about my projects, skills, or education!",
          sender: "bot",
        };

    setMessages([...messages, userMsg, reply]);
    setInput("");
  };

  return (
    <div>
      {/* Floating chat button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          background: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          width: 60,
          height: 60,
          border: "none",
          fontSize: "24px",
          zIndex: 999,
        }}
      >
        💬
      </button>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            left: 20,
            width: 300,
            maxHeight: 400,
            background: "#f8f9fa",
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflow: "hidden",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.sender === "bot" ? "left" : "right",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    background: m.sender === "bot" ? "#e3f2fd" : "#d1ffd6",
                    borderRadius: 10,
                    padding: "5px 10px",
                    display: "inline-block",
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", borderTop: "1px solid #ccc" }}>
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="btn btn-primary">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioChat;