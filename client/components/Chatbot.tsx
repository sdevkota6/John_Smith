import { useState } from "react";

interface Message {
  type: "bot" | "user";
  text: string;
}

const botResponses: Record<string, string> = {
  hello: "Hi there! 👋 I'm the virtual assistant. How can I help you today?",
  hours: "Our clinic is open:\nMon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
  services: "We offer a wide range of services including:\n• General Dentistry\n• Cosmetic Dentistry\n• Teeth Whitening\n• Dental Implants\n• Clear Aligners\n• Emergency Dental Care",
  booking: "I can help you book an appointment! Please provide your name and preferred date.",
  insurance: "Yes, we accept direct insurance billing! We work with most major providers.",
  price: "Our pricing is transparent and varies by service. Please contact us for specific quotes.",
  default: "I'm here to help! You can ask me about our services, hours, booking appointments, insurance, or pricing.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi 👋 I'm the virtual assistant. I can help you book appointments, answer questions about treatments, pricing, or insurance.",
    },
  ]);
  const [input, setInput] = useState("");

  const getResponse = (userText: string): string => {
    const text = userText.toLowerCase();
    
    if (text.includes("hello") || text.includes("hi")) return botResponses.hello;
    if (text.includes("hours") || text.includes("open")) return botResponses.hours;
    if (text.includes("service")) return botResponses.services;
    if (text.includes("book") || text.includes("appointment")) return botResponses.booking;
    if (text.includes("insurance")) return botResponses.insurance;
    if (text.includes("price") || text.includes("cost")) return botResponses.price;
    return botResponses.default;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response with delay
    setTimeout(() => {
      const botMessage: Message = {
        type: "bot",
        text: getResponse(input),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 300);

    setInput("");
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-32px)] bg-gradient-to-br from-card to-background border border-white/20 rounded-2xl shadow-2xl flex flex-col h-96 animate-in fade-in slide-in-from-bottom-5 z-40">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-background">Virtual Assistant</h3>
              <p className="text-sm text-background/80">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-background hover:bg-background/20 p-1 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-background"
                      : "bg-white/10 text-foreground border border-white/10"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t border-white/10 p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background p-2 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-9m0 0l-9-9m9 9H3" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-background hover:shadow-2xl hover:shadow-cyan-500/50 transition-all z-50 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </>
  );
}
