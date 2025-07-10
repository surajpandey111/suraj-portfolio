import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import db from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });

  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project: formData.project,
        budget: formData.budget,
        message: formData.message,
        timestamp: new Date(),
      });
      alert("✅ Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit");
    }
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
          move: { enable: true, speed: 2.5, direction: "none", random: true },
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 120, duration: 0.5 } },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="contact-container">
        <div id="particles-js" className="parallax-background"></div>
        <div className="contact-card">
          <h2>Contact Suraj Kumar Pandey</h2>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/suraj-kumar-pandey-gyanmaifounder"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <FaGithub className="icon" />
            <a href="https://github.com/surajpandey111" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="contact-item">
            <FaInstagram className="icon" />
            <a href="https://www.instagram.com/suraipandey6758/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>+91 7488723028</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>worldforensic@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>24f2000281@ds.study.iitm.ac.in</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>2207360130061@gecazamgarh.ac.in</span>
          </div>
        </div>
        <div className="contact-card contact-right">
          <h2>Hire me / Project Contact</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              name="project"
              placeholder="Project / Task"
              value={formData.project}
              onChange={handleChange}
              required
            />
            <input
              name="budget"
              placeholder="Estimated Payment (₹)"
              value={formData.budget}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Additional Details"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="posts-container">
        <h2>📢 Latest Updates & Posts</h2>
        <div className="posts-grid">
          {posts.length === 0 && <p>No posts yet. Stay tuned!</p>}
          {posts.map((post) => (
            <div className="post-card" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", borderRadius: "10px", marginTop: "0.5rem" }}
                />
              )}
              <small>{new Date(post.date?.seconds * 1000).toLocaleDateString()}</small>
              {Array.isArray(post.tags) && (
                <div className="tags">
                  {post.tags.map((tag) => (
                    <span className="tag" key={tag}>
                       {tag}
                     </span>
                    ))}
                 </div>
                )}

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;
