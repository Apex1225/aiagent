import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Minimize2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FloatingChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingChat({ isOpen, onClose }: FloatingChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you with your insurance needs today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    'hello': 'Hello! How can I assist you today with your insurance needs?',
    'policy': "I can help you with policy information! What would you like to know about your policy?",
    'claim': "I'm here to help with your claim. Do you want to file a new claim or track an existing one?",
    'premium': "I can help you with premium-related queries. Would you like to know about payment options or calculate a premium?",
    'coverage': "I'd be happy to explain coverage details. Which type of insurance are you interested in - Health or Life?",
    'contact': "You can reach us at:\n📞 1800-XXX-XXXX\n✉️ support@insuranceplus.com\n💬 WhatsApp: +91-XXXXX-XXXXX",
    'default': "I understand. Let me help you with that. Could you provide more details so I can assist you better?"
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      let responseText = botResponses.default;

      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        responseText = botResponses.hello;
      } else if (lowerInput.includes('policy')) {
        responseText = botResponses.policy;
      } else if (lowerInput.includes('claim')) {
        responseText = botResponses.claim;
      } else if (lowerInput.includes('premium') || lowerInput.includes('payment')) {
        responseText = botResponses.premium;
      } else if (lowerInput.includes('coverage') || lowerInput.includes('cover')) {
        responseText = botResponses.coverage;
      } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('email')) {
        responseText = botResponses.contact;
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed right-6 z-50 transition-all duration-500 ${
      isMinimized ? 'bottom-6' : 'bottom-6'
    }`}>
      <div className={`bg-white rounded-2xl shadow-2xl transition-all duration-500 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}>
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600"></div>
            </div>
            <div className="text-white">
              <p className="font-semibold">AI Agent</p>
              <p className="text-xs opacity-90">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Minimize2 className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="h-[440px] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                    }`}
                  >
                    {message.isBot && (
                      <div className="flex items-center gap-1 mb-1">
                        <Bot className="w-3 h-3" />
                        <span className="text-xs font-semibold">AI</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-3 flex justify-start">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
