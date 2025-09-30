import React, { useState, useRef, useEffect } from "react";
import {
  FaTimes,
  FaPaperPlane,
  FaRobot,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

export const HubGPT = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Load chat history from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("hub-gpt-messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Add welcome message
      setMessages([
        {
          id: 1,
          type: "bot",
          content:
            "Hello! I'm HUB-GPT, your virtual assistant. I can help you with:\n\n• Information about the HUB Mobile App\n• Details about the developer (Md Nayeem)\n• Download links and app features\n• Hamdard University Bangladesh info\n\nWhat would you like to know?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("hub-gpt-messages", JSON.stringify(messages));
    }
  }, [messages]);

  // Copy message function
  const copyMessage = async (content, messageId) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = content;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    }
  };

  // Function to convert URLs in text to clickable links
  const renderTextWithLinks = (text) => {
    // URL regex pattern
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline break-all"
            style={{ wordBreak: "break-all", overflowWrap: "anywhere" }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const suggestedQuestions = [
    "What is the HUB Mobile App?",
    "Is the app safe to use?",
    "Who developed this app?",
    "How can I download the app?",
    "Tell me about Hamdard University Bangladesh",
  ];

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Pass conversation history for context
      const response = await sendToGroq(currentInput, [
        ...messages,
        userMessage,
      ]);
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error details:", error);

      let errorContent =
        "I'm having trouble connecting right now. Please try again after some time. ";

      errorContent +=
        "Or Please contact the developer at mdnayeem14916@gmail.com for assistance.";

      const errorMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: errorContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const sendToGroq = async (message, conversationHistory) => {
    const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

    console.log("🚀 Making API request to Groq...");
    console.log("Groq API Key:", API_KEY?.substring(0, 15) + "...");

    if (!API_KEY) {
      throw new Error("Groq API key not configured in environment variables");
    }

    const systemPrompt = `You are HUB-GPT, a virtual assistant. You can ONLY answer questions about these specific topics:

1. The HUB Mobile App (Hamdard University Bangladesh Mobile App):
   - It's a webview app that provides easy access to the university portal
   - Features include checking grades, schedules, announcements etc
   - It's free to download for Android
   - Mobile-optimized interface
   - Download link (This app downloading website is hosted by the developer on his own server, not in the official website of the university. But it is safe): https://hamdarduniversitybangladesh.netlify.app/
   - APK file: HamdardUniversityBangladesh.apk

2. The app is safe to use:
   - No ads, no tracking, no data collection
   - It's a simple webview wrapper around the official university portal. It's more like a browser app that only loads the official website within the app
   - The developer is a student of the university and created this as a student project to help fellow students
   - The app does not require any special permissions on the device
   - It does not store any personal data locally
   - It only accesses the internet to load the official university website within the app
   - The developer is not affiliated with Hamdard University Bangladesh, this is an independent student project

3. The Developer (Md Nayeem):
   - Name: Md Nayeem
   - BA Student at Hamdard University Bangladesh (27th Batch, Dept of English)
   - Email: mdnayeem14916@gmail.com
   - Facebook: https://www.facebook.com/md.nayeem.2004
   - Twitter: https://twitter.com/usernayeem
   - This is a student project, not officially affiliated with the university. But it loads the official website of the university.

4. Download Information:
   - Available for Android devices
   - Free download
   - Website(developer own this domain): https://hamdarduniversitybangladesh.netlify.app/
   - APK file size(720 bytes) and requirements as appropriate

5. Hamdard University Bangladesh:

Overview and Philosophy

Official university website url: https://www.hamdarduniversity.edu.bd/
For admission: https://www.admission.hamdarduniversity.edu.bd/

Hamdard University Bangladesh (HUB) is a private university established in 2012 under the Private University Act 2010. It is situated in Hamdard City of Science, Education & Culture in Gazaria, Munshiganj, Bangladesh. The university was founded by Dr. Hakim Mohammad Yousuf Harun Bhuiyan and is funded by Hamdard Laboratories (Waqf) Bangladesh. As a non-profit and non-political institution, its core values are rooted in philanthropy, love for humanity, and the promotion of education and culture. The university is officially recognized by the University Grants Commission (UGC) of Bangladesh and commenced its academic journey on November 29, 2012. HUB aims to provide a holistic education that fosters the intellectual, social, and personal growth of its students in an environment that encourages open discussion and intellectual freedom.

Academic Structure and Programs

Hamdard University Bangladesh offers a range of undergraduate and graduate programs across five faculties.

Faculties:
 - Faculty of Science, Engineering & Technology (FSET)
 - Faculty of Business Administration (FBA)
 - Faculty of Arts & Social Science (FASS)
 - Faculty of Unani and Ayurvedic Medicine (FAUM)
 - Faculty of Health Sciences

Undergraduate Programs:
 - Bachelor of Science (BSc) in Computer Science & Engineering (CSE)
 - Bachelor of Science (BSc) in Electrical & Electronic Engineering (EEE)
 - Bachelor of Science (BSc) in Mathematics
 - Bachelor of Business Administration (BBA)
 - Bachelor of Arts (BA) in English
 - Bachelor of Social Science (BSS) in Economics
 - Bachelor of Arts (BA) in Islamic Studies
 - Bachelor of Unani Medicine and Surgery (BUMS)
 - Bachelor of Ayurvedic Medicine and Surgery (BAMS)

Graduate Programs:
 - Master of Business Administration (MBA) & Executive MBA (EMBA)
 - Master of Arts (MA) in English Language Teaching (ELT)
 - Master of Public Health (MPH)
 - Master of Science (MSc) in Mathematics

Campus Life and Facilities

HUB offers a comprehensive campus experience with various facilities and extracurricular opportunities.

Facilities:
 - Library:** A central library serving students and faculty.
 - Laboratories:** Modern and well-equipped labs for practical learning.
 - Hostels:** On-campus residential facilities for students.
 - Cafeterias:** On-campus dining options.
 - Transportation:** Bus services for students and staff.

Extracurricular Activities:
The university encourages student engagement through various clubs, including a Photography Club, Cultural Club, Sports Club, Computer Programming and Skill Development Club, HEEE Robotics Club, and the Voice of Business club.

Research and Quality Assurance

HUB is committed to fostering a culture of research and academic excellence. It has an Internal Quality Assurance Cell (IQAC) to ensure high standards in education. The university's research focus is aligned with the mission of its parent organization, Hamdard, which includes the scientific advancement and promotion of the Eastern System of Medicine.

IMPORTANT RULES:
- If asked about anything outside these topics, politely redirect to the approved topics
- Be helpful, friendly, and Brief
- Always mention this is a student project when relevant
- For technical issues, suggest contacting the developer directly
- Don't make up information - stick to what you know about these topics
- Use conversation history to provide better contextual responses

RESPONSE STYLE: Keep all responses SHORT (4-5 sentences max). Be direct and to the point. Avoid long explanations unless specifically asked for details.`;

    // Convert conversation history to API format (last 10 messages for context)
    const recentMessages = conversationHistory.slice(-10).map((msg) => ({
      role: msg.type === "user" ? "user" : "assistant",
      content: msg.content,
    }));

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: systemPrompt },
              ...recentMessages,
            ],
            max_tokens: 200,
            temperature: 0.7,
          }),
        }
      );

      console.log("📡 Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ API Error Response:", errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("✅ API Response successful!");

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error("❌ Invalid response structure:", data);
        throw new Error("Invalid response format from API");
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error("💥 Fetch error:", error);
      throw error;
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInputValue(question);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content:
          "Hello! I'm HUB-GPT, your virtual assistant. I can help you with:\n\n• Information about the HUB Mobile App\n• Details about the developer (Md Nayeem)\n• Download links and app features\n• Hamdard University Bangladesh info\n\nWhat would you like to know?",
        timestamp: new Date(),
      },
    ]);
    localStorage.removeItem("hub-gpt-messages");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className={`${
            isOpen ? "hidden" : "flex"
          } flex-col items-center justify-center transition-all duration-300 group`}
          title="Chat with HUB-GPT"
          aria-label="Open HUB-GPT chatbot"
        >
          {/* Chatbot name */}
          <span className="text-xs font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 px-2 py-1 rounded-full shadow-lg mb-1 border border-gray-200 dark:border-gray-600 z-10">
            HUB-GPT
          </span>

          {/* Logo and Chat Icon Container */}
          <div className="relative">
            {/* Animated pulse for attention - behind logo */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
            <div className="absolute inset-0 bg-green-300 rounded-full animate-pulse opacity-20"></div>

            <img
              src="/images/logo.webp"
              loading="lazy"
              alt="HUB Logo"
              className="relative z-10 w-12 h-12 rounded-full shadow-lg border-2 border-white hover:shadow-xl transition-shadow duration-300 opacity-100"
            />
            {/* Chat bubble indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-20">
              <svg
                className="w-3 h-3 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden chat-animate-in">
          {/* Header */}
          <div className="bg-green-600 dark:bg-green-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.webp"
                loading="lazy"
                alt="HUB Logo"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold">HUB-GPT</h3>
                <p className="text-xs text-green-100">Virtual Assistant</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-green-100 hover:text-white p-1 rounded"
                title="Clear chat"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-green-100 hover:text-white p-1 rounded"
                title="Close chat"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg break-words ${
                    message.type === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  }`}
                  style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                >
                  {/* Bot title */}
                  {message.type === "bot" && (
                    <div className="flex items-center gap-2 mb-2 text-xs opacity-70">
                      <FaRobot />
                      HUB-GPT
                    </div>
                  )}

                  <div
                    className="text-sm whitespace-pre-wrap break-words"
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {message.type === "bot"
                      ? renderTextWithLinks(message.content)
                      : message.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-xs opacity-70 mb-2">
                    <FaRobot />
                    HUB-GPT
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Suggested Questions (only show if no user messages yet) */}
            {messages.filter((m) => m.type === "user").length === 0 &&
              !isLoading && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Quick questions:
                  </p>
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="block w-full text-left text-xs bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-2 rounded transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about HUB app..."
                className="flex-1 text-base px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          .chat-animate-in {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
          }
        }

        .chat-animate-in {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};
