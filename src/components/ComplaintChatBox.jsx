import { useState } from "react";
import { getComplaintResponse } from "../utils/complaintResponses";

const ComplaintBot = () => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I’m Support Bot. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    const botReply = {
      role: "bot",
      text: getComplaintResponse(input)
    };

    setMessages(prev => [...prev, userMsg, botReply]);
    setInput("");
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-4">
      <div className="h-72 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-[80%] ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Describe your issue..."
          className="flex-1 border rounded-xl p-2 outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ComplaintBot;
