import { useState } from 'react';
import { Heart, Shield, CheckCircle, ArrowRight, Users, Briefcase, Home, Baby } from 'lucide-react';

export default function Products() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const healthInsuranceTypes = [
    {
      icon: Users,
      title: 'Family Floater',
      description: 'Single policy covering your entire family',
      features: ['Coverage for 4-6 members', 'Shared sum insured', 'Cost-effective solution']
    },
    {
      icon: Shield,
      title: 'Individual Health',
      description: 'Personalized coverage for your health needs',
      features: ['Individual sum insured', 'Customizable coverage', 'Wide hospital network']
    },
    {
      icon: Briefcase,
      title: 'Critical Illness',
      description: 'Protection against major health conditions',
      features: ['Lump sum payout', '30+ critical illnesses', 'Financial security']
    },
    {
      icon: Home,
      title: 'Senior Citizen',
      description: 'Specialized plans for elderly parents',
      features: ['No medical check-up', 'Pre-existing disease cover', 'Lifetime renewability']
    }
  ];

  const lifeInsuranceTypes = [
    {
      icon: Shield,
      title: 'Term Life',
      description: 'Pure protection for your loved ones',
      features: ['High coverage at low cost', 'Flexible tenure options', 'Tax benefits']
    },
    {
      icon: Heart,
      title: 'Whole Life',
      description: 'Lifetime coverage with savings',
      features: ['Coverage till 99 years', 'Maturity benefits', 'Wealth creation']
    },
    {
      icon: Baby,
      title: 'Child Plans',
      description: 'Secure your child\'s future dreams',
      features: ['Education planning', 'Milestone benefits', 'Waiver of premium']
    },
    {
      icon: Briefcase,
      title: 'Retirement Plans',
      description: 'Build a pension for golden years',
      features: ['Regular income post-retirement', 'Flexible payout options', 'Tax advantages']
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Insurance <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage solutions designed to protect what matters most to you and your family
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Health Insurance</h2>
              <p className="text-gray-600">Protection for your health and well-being</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthInsuranceTypes.map((product, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedProduct === `health-${idx}` ? 'md:col-span-2' : ''
                }`}
                onClick={() => setExpandedProduct(expandedProduct === `health-${idx}` ? null : `health-${idx}`)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      expandedProduct === `health-${idx}` ? 'rotate-90' : ''
                    }`} />
                  </div>

                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedProduct === `health-${idx}` ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Life Insurance</h2>
              <p className="text-gray-600">Financial security for your loved ones</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lifeInsuranceTypes.map((product, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedProduct === `life-${idx}` ? 'md:col-span-2' : ''
                }`}
                onClick={() => setExpandedProduct(expandedProduct === `life-${idx}` ? null : `life-${idx}`)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-cyan-600 transition-transform duration-300 ${
                      expandedProduct === `life-${idx}` ? 'rotate-90' : ''
                    }`} />
                  </div>

                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedProduct === `life-${idx}` ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h3>
          <p className="text-xl mb-8 opacity-90">Explore our comprehensive insurance products or contact our support team</p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Plans
          </button>
        </div>
      </div>
    </div>
  );
}
