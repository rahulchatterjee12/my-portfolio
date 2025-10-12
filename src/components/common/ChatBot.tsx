"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ReactMarkdown from "react-markdown";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export default function ChatBotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, newMessage]; // ✅ include history

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }), // ✅ send full conversation
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.answer,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error during chat:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "⚠️ Sorry, there was an error connecting to the AI. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg backdrop-blur-lg hover:bg-blue-700 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] bg-[#111827]/90 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md">
              <h2 className="font-semibold text-lg tracking-wide">
                Chat with Rahul 🤖
              </h2>
              <button onClick={toggleChat}>
                <CloseIcon className="text-white hover:text-gray-200" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
              {messages.length === 0 && (
                <p className="text-center text-gray-400 mt-20">
                  👋 Ask me anything about Rahul’s profile or projects!
                </p>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white shadow-blue-500/30"
                        : "bg-gray-800 text-gray-100 border border-gray-700"
                    } shadow-md`}
                  >
                    <p className="font-semibold text-sm mb-1 opacity-80">
                      {msg.role === "user" ? "You" : "Rahul"}
                    </p>
                    <p className="text-sm leading-relaxed">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 border border-gray-700 text-gray-100 p-3 rounded-2xl shadow-md max-w-[75%]">
                    <p className="font-semibold text-sm mb-1 opacity-80">
                      Rahul
                    </p>
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{
                            opacity: [0.2, 1, 0.2],
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: dot * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-gray-700 flex items-center space-x-2 bg-[#0f172a]"
            >
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="flex-1 p-2 text-sm bg-gray-900 text-gray-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                disabled={isLoading || !input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm disabled:opacity-50 flex items-center justify-center"
              >
                <SendIcon fontSize="small" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #111827;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3b82f6;
          border-radius: 10px;
          border: 2px solid transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #60a5fa;
        }
      `}</style>
    </>
  );
}
