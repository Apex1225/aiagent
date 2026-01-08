import { useState } from 'react';
import { Building2, FileText, CheckCircle, Clock, Upload, MessageSquare, CreditCard, File } from 'lucide-react';

export default function Claims() {
  const [activeClaimType, setActiveClaimType] = useState<'cashless' | 'reimbursement'>('cashless');
  const [currentStep, setCurrentStep] = useState(0);

  const cashlessSteps = [
    {
      icon: Building2,
      title: 'Choose Network Hospital',
      description: 'Select a hospital from our 10,000+ network hospitals',
      action: 'Find Hospital'
    },
    {
      icon: CreditCard,
      title: 'Show Insurance Card',
      description: 'Present your health card at hospital admission desk',
      action: 'View Card'
    },
    {
      icon: CheckCircle,
      title: 'Get Pre-Authorization',
      description: 'Hospital coordinates with us for approval',
      action: 'Track Status'
    },
    {
      icon: FileText,
      title: 'Receive Treatment',
      description: 'Get treated without paying from your pocket',
      action: 'Complete'
    }
  ];

  const reimbursementSteps = [
    {
      icon: Building2,
      title: 'Get Treatment',
      description: 'Visit any hospital and complete your treatment',
      action: 'Start Process'
    },
    {
      icon: File,
      title: 'Collect Documents',
      description: 'Gather discharge summary, bills, and prescriptions',
      action: 'View Checklist'
    },
    {
      icon: Upload,
      title: 'Submit Claim',
      description: 'Upload documents through our portal or app',
      action: 'Upload Now'
    },
    {
      icon: CheckCircle,
      title: 'Get Reimbursed',
      description: 'Receive settlement in your bank within 7 days',
      action: 'Track Claim'
    }
  ];

  const steps = activeClaimType === 'cashless' ? cashlessSteps : reimbursementSteps;

  const requiredDocuments = [
    'Policy Copy',
    'Claim Form (Duly Filled)',
    'Hospital Discharge Summary',
    'Original Bills & Receipts',
    'Diagnostic Reports',
    'Doctor Prescription',
    'KYC Documents (ID & Address Proof)',
    'Bank Account Details'
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Claims <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Assistance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Filing a claim is now easier than ever. Choose your claim type and follow our simple step-by-step process
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setActiveClaimType('cashless');
              setCurrentStep(0);
            }}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeClaimType === 'cashless'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
            }`}
          >
            <Building2 className="w-5 h-5 inline-block mr-2" />
            Cashless Claims
          </button>
          <button
            onClick={() => {
              setActiveClaimType('reimbursement');
              setCurrentStep(0);
            }}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              activeClaimType === 'reimbursement'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
            }`}
          >
            <CreditCard className="w-5 h-5 inline-block mr-2" />
            Reimbursement Claims
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((_, idx) => (
                <div key={idx} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                      idx <= currentStep
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white scale-110'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex-1 h-1 mx-2">
                      <div className={`h-full rounded transition-all duration-500 ${
                        idx < currentStep ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gray-200'
                      }`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`relative p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
                  idx === currentStep
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  idx === currentStep
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg'
                    : 'bg-white'
                }`}>
                  <step.icon className={`w-7 h-7 ${idx === currentStep ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <button
                  className={`w-full py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    idx === currentStep
                      ? 'bg-white text-blue-600 shadow-md hover:shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {step.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <File className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {requiredDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
            <button
              className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Document Checklist
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Need Help with Your Claim?</h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Our AI agent is here to assist you 24/7 with:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Claim eligibility check',
                'Document verification',
                'Claim status tracking',
                'Settlement timeline',
                'Escalation support'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="w-full py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 inline-block mr-2" />
              Contact Support
            </button>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Clock className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Claim Processing Timeline</h4>
              <p className="text-gray-700 mb-4">
                We are committed to processing your claims quickly and efficiently:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-600">24 Hours</p>
                  <p className="text-gray-600 text-sm">Cashless Pre-Authorization</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-600">7 Days</p>
                  <p className="text-gray-600 text-sm">Reimbursement Settlement</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-600">98%</p>
                  <p className="text-gray-600 text-sm">Claim Approval Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
