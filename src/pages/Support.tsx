import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, ChevronDown, Send } from 'lucide-react';

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const faqs = [
    {
      question: 'How do I file a health insurance claim?',
      answer: 'You can file a claim through our website, mobile app, or by calling our helpline. For cashless claims, inform the network hospital at admission. For reimbursement, submit documents within 30 days of discharge. Our AI agent can guide you through the entire process step-by-step.'
    },
    {
      question: 'What is the claim settlement time?',
      answer: 'Cashless claims are pre-authorized within 24 hours. Reimbursement claims are settled within 7 working days once all documents are submitted. You can track your claim status in real-time through our portal or AI agent.'
    },
    {
      question: 'Can I port my existing policy to Insurance Plus?',
      answer: 'Yes! We accept policy portability. You can transfer your existing health insurance policy without losing accumulated benefits. Contact our AI agent or support team 45-60 days before your current policy renewal to initiate the process.'
    },
    {
      question: 'Are pre-existing diseases covered?',
      answer: 'Pre-existing diseases are covered after a waiting period of 2-4 years, depending on your chosen plan. Some plans offer reduced waiting periods. Our AI agent can help you find plans with the best coverage for your specific conditions.'
    },
    {
      question: 'How do I add or remove family members?',
      answer: 'You can add family members during policy renewal or within 30 days of a life event (marriage, childbirth). To remove members, contact us before renewal. Changes in coverage will affect your premium accordingly.'
    },
    {
      question: 'What documents are required for policy purchase?',
      answer: 'You need: Age proof (Birth certificate/PAN card), ID proof (Aadhaar/Passport), Address proof, Recent photographs, and Medical reports (if applicable). Our AI agent can provide a detailed checklist based on your specific requirements.'
    },
    {
      question: 'How can I check my policy details?',
      answer: 'Login to your account on our website or app to view complete policy details, coverage, premium, and renewal dates. You can also ask our AI agent for instant policy information.'
    },
    {
      question: 'What is the claim rejection rate?',
      answer: 'Our claim approval rate is 98%, one of the highest in the industry. Claims are rejected only for policy violations, incomplete documentation, or non-disclosure of information. Our AI agent helps ensure your claim is filed correctly to avoid rejections.'
    }
  ];

  const contactChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      info: '1800-XXX-XXXX',
      description: 'Toll-free | 24/7 Available',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      info: 'support@insuranceplus.com',
      description: 'Response within 24 hours',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+91-XXXXX-XXXXX',
      description: 'Quick assistance via chat',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      info: 'Mumbai, Maharashtra',
      description: 'Visit us Mon-Sat, 9 AM - 6 PM',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Support & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Contact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out through any channel, and our team will assist you promptly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactChannels.map((channel, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${channel.color}`}></div>
              <div className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{channel.info}</p>
                <p className="text-gray-600 text-sm">{channel.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            {formStatus === 'success' ? (
              <div className="py-12 text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="policy">Policy Inquiry</option>
                    <option value="claim">Claim Assistance</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">AI Agent</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    expandedFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Need additional support?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
