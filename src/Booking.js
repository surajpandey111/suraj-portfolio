import React, { useState } from "react";
import db from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Booking.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: ""
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "bookings"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new"
      });

      setSuccess(true);
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        description: ""
      });

    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">

      {/* HERO SECTION */}
      <div className="hero-section-booking">
        <h1 className="booking-title">
          🚀 Build Enterprise AI & High-Performance Websites
        </h1>

        <p className="booking-subtitle">
          Trusted by Govt Officials • IIT TechFest Medalist • IndiaAI Summit Participant • Founder of SurajTechLabs
        </p>

        <div className="urgency-badge">
          ⚠ Only 5 New Projects Accepted Per Month
        </div>
      </div>

      {/* SERVICE SECTION */}
      <div className="service-section">
        <h2 className="section-heading">What I Can Build For You</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>🌐 Enterprise Business Website</h3>
            <p>High-performance, SEO-optimized, scalable architecture for serious businesses.</p>
          </div>

          <div className="service-card">
            <h3>🤖 AI-Powered Platform</h3>
            <p>LLM integration, automation systems, GPT-based tools & AI dashboards.</p>
          </div>

          <div className="service-card">
            <h3>📊 Admin Dashboard</h3>
            <p>Secure admin panels, analytics dashboards, real-time data systems.</p>
          </div>

          <div className="service-card">
            <h3>🧠 AI Chatbot (RAG)</h3>
            <p>Custom AI assistant trained on your business data & documents.</p>
          </div>

          <div className="service-card">
            <h3>🏢 Government / Institutional Portal</h3>
            <p>High-trust, secure, public-facing digital platforms for institutions.</p>
          </div>

          <div className="service-card">
            <h3>📱 SaaS Product Development</h3>
            <p>Build your startup idea into a scalable SaaS platform.</p>
          </div>

          <div className="service-card">
            <h3>🛒 E-Commerce System</h3>
            <p>Modern online stores with payment integration & analytics.</p>
          </div>

          <div className="service-card">
            <h3>🔥 Custom AI System</h3>
            <p>Advanced AI solutions tailored to your specific business needs.</p>
          </div>
          <div className="service-card">
            <h3>💻 Full-Stack Web & App Development</h3>
            <p>Complete frontend + backend systems using React, Flask, Django, Node, Firebase & Cloud deployment.</p>
          </div>
          <div className="service-card">
          <h3>🧮 AI / ML Model Development</h3>
          <p>Custom machine learning models, prediction systems, NLP, computer vision & production deployment pipelines.</p>
         </div>
         <div className="service-card">
          <h3>🚀 Startup MVP Development</h3>
          <p>Transform your idea into a working MVP with scalable architecture, investor-ready systems & cloud hosting.</p>
        </div>
        <div className="service-card">
         <h3>⚙ Enterprise Software & Automation</h3>
         <p>Process automation, internal tools, CRM systems, workflow engines & AI-driven enterprise solutions.</p>
        </div>

        </div>
      </div>

      {/* FORM SECTION */}
      <div className="form-section">
        <h2 className="section-heading">🚀 Schedule Your Project</h2>

        <form className="booking-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Professional Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone / WhatsApp Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select Project Type</option>
            <option>Enterprise Business Website</option>
            <option>AI-Powered Platform</option>
            <option>Admin Dashboard</option>
            <option>AI Chatbot (RAG)</option>
            <option>Government Portal</option>
            <option>SaaS Product</option>
            <option>E-Commerce System</option>
            <option>Custom AI System</option>
            <option>Full-Stack Web / App Development</option>
            <option>AI / ML Model Development</option>
            <option>Startup MVP Development</option>
            <option>Enterprise Automation Software</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select Estimated Budget</option>
            <option>₹25k - ₹50k</option>
            <option>₹50k - ₹1L</option>
            <option>₹1L - ₹3L</option>
            <option>₹3L+</option>
          </select>

          <textarea
            name="description"
            placeholder="Describe your project goals, timeline, and expectations..."
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />

          <button type="submit" className="booking-btn">
            {loading ? "Processing..." : "🚀 Schedule My Project"}
          </button>

          {success && (
            <p className="success-message">
              ✅ Booking Submitted Successfully! I will contact you within 24 hours.
            </p>
          )}

        </form>
      </div>

    </div>
  );
}

export default Booking;