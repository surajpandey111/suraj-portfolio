import React, { useState } from "react";

function PortfolioChatFaiss() {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! I am Suraj's AI chatbot. Ask me *anything*!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    

    try {
      const res = await fetch("https://faiss-portfolio-chatbot.onrender.com/search", {
      //const res = await fetch("https://ai-chatbot-465020.el.r.appspot.com/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input })
      });
      const data = await res.json();
      const botMsg = { text: data.answer, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { text: "❌ Error connecting to AI server.", sender: "bot" }
      ]);
    }
  };

  return (
    <div>
      {/* Floating button on right */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#28a745",
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

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 350,
            maxHeight: 500,
            background: "#f8f9fa",
            border: "1px solid #ccc",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            zIndex: 999
          }}
        >
          <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  textAlign: m.sender === "bot" ? "left" : "right",
                  marginBottom: 8
                }}
              >
                <span
                  style={{
                    background: m.sender === "bot" ? "#e3f2fd" : "#d1ffd6",
                    borderRadius: 10,
                    padding: "5px 10px",
                    display: "inline-block"
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
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="btn btn-success">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioChatFaiss;
