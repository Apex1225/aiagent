import { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, Heart } from 'lucide-react';

interface HomeProps {
  onNavigate?: (page: string) => void;
  onOpenChat?: () => void;
}

export default function Home({ onNavigate, onOpenChat }: HomeProps) {
  const [counters, setCounters] = useState({ policies: 0, claims: 0, customers: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { policies: 50000, claims: 45000, customers: 100000 };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        policies: Math.floor(targets.policies * progress),
        claims: Math.floor(targets.claims * progress),
        customers: Math.floor(targets.customers * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Powered by AI Intelligence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Smart AI Insurance Agent for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Health & Life Insurance
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience the future of insurance with our AI-powered platform. Get instant policy recommendations,
              file claims seamlessly, and receive 24/7 support tailored to your needs.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, label: 'Policies Sold', value: counters.policies.toLocaleString(), suffix: '+' },
              { icon: FileCheck, label: 'Claims Processed', value: counters.claims.toLocaleString(), suffix: '+' },
              { icon: Users, label: 'Happy Customers', value: counters.customers.toLocaleString(), suffix: '+' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Insurance Plus?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with personalized service to deliver the best insurance experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Comprehensive Coverage',
                description: 'Wide range of health and life insurance plans tailored to your unique needs'
              },
              {
                icon: MessageSquare,
                title: '24/7 AI Support',
                description: 'Get instant answers and guidance from our intelligent AI agent anytime, anywhere'
              },
              {
                icon: FileCheck,
                title: 'Quick Claim Settlement',
                description: 'Hassle-free claim processing with cashless and reimbursement options'
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our priority with dedicated support and transparent policies'
              },
              {
                icon: TrendingUp,
                title: 'Best Rates',
                description: 'Competitive premiums with maximum coverage and no hidden charges'
              },
              {
                icon: Users,
                title: 'Trusted by Thousands',
                description: 'Join over 100,000 satisfied customers who trust us with their insurance needs'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
