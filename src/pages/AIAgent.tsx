import { useState, useEffect, useRef } from 'react';
import { Bot, Send, Sparkles, FileText, CheckCircle, TrendingUp, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function AIAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Insurance Agent. I can help you with policy recommendations, claim assistance, document verification, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { icon: FileText, text: 'Check Policy Details', query: 'Can you help me understand my policy coverage?' },
    { icon: CheckCircle, text: 'Claim Status', query: 'I want to check my claim status' },
    { icon: TrendingUp, text: 'Compare Plans', query: 'Help me compare health insurance plans' },
    { icon: User, text: 'Update Profile', query: 'I need to update my personal information' }
  ];

  const botResponses: { [key: string]: string } = {
    'policy': "I'd be happy to help you with your policy! I can explain coverage details, premium information, benefits, and exclusions. Could you please share your policy number or tell me which aspect you'd like to know more about?",
    'claim': "I can assist you with your claim. To track your claim status, I'll need your claim reference number. You can also file a new claim - would you like help with cashless or reimbursement claim process?",
    'compare': "Great! I can help you compare our health insurance plans. To provide the best recommendations, could you tell me:\n\n1. Are you looking for individual or family coverage?\n2. What's your age group?\n3. Any specific coverage needs (critical illness, maternity, etc.)?",
    'update': "I can help you update your profile information. You can update:\n\n• Contact details (phone, email, address)\n• Nominee information\n• Bank account details\n• Medical history\n\nWhich information would you like to update?",
    'default': "I understand you need assistance. I can help you with:\n\n• Policy information and recommendations\n• Claim filing and tracking\n• Document requirements\n• Premium payments\n• Coverage details\n\nCould you please provide more details about what you need help with?"
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

      if (lowerInput.includes('policy') || lowerInput.includes('coverage')) {
        responseText = botResponses.policy;
      } else if (lowerInput.includes('claim')) {
        responseText = botResponses.claim;
      } else if (lowerInput.includes('compare') || lowerInput.includes('plan')) {
        responseText = botResponses.compare;
      } else if (lowerInput.includes('update') || lowerInput.includes('profile')) {
        responseText = botResponses.update;
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (query: string) => {
    setInputText(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Bot className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-white">
                    <h2 className="text-2xl font-bold">AI Insurance Agent</h2>
                    <p className="opacity-90">Always here to help • Responds instantly</p>
                  </div>
                </div>
              </div>

              <div className="h-[500px] overflow-y-auto p-6 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                        message.isBot
                          ? 'bg-white text-gray-800 shadow-md'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      }`}
                    >
                      {message.isBot && (
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-4 h-4" />
                          <span className="text-xs font-semibold">AI Agent</span>
                        </div>
                      )}
                      <p className="whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-2 ${message.isBot ? 'text-gray-500' : 'text-white/70'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="mb-4 flex justify-start">
                    <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-400"></div>
                        </div>
                        <span className="text-sm text-gray-500">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickAction(action.query)}
                    className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 text-left group"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <action.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      {action.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">AI Agent Capabilities</h3>
              <ul className="space-y-3">
                {[
                  'Policy explanation & comparison',
                  'Claim eligibility verification',
                  'Real-time claim tracking',
                  'Document checklist generation',
                  'Premium calculation',
                  'Escalation to human agent'
                ].map((capability, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Human Support?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our AI agent handles most queries instantly. For complex cases, we can connect you with our expert team.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Talk to Human Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
