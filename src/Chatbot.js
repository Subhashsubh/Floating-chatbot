import React from "react";
import "./Chatbot.css";

export default function Chatbot() {
  return (
    <div className="chatbot-container">
      <div className="chat-header">💬 Assistant</div>

      <div className="chat-body">
        <p>Hello 👋</p>
        <p>How can I help you?</p>
      </div>

      <input
        className="chat-input"
        placeholder="Type a message..."
      />
    </div>
  );
}
