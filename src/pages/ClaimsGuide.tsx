import { useState } from 'react';
import { FileText, CheckCircle, AlertCircle, Clock, Download, ChevronDown, Building2, CreditCard, File, Home } from 'lucide-react';

interface TabProps {
  activeTab: 'cashless' | 'reimbursement';
  setActiveTab: (tab: 'cashless' | 'reimbursement') => void;
}

function TabSelector({ activeTab, setActiveTab }: TabProps) {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <button
        onClick={() => setActiveTab('cashless')}
        className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 ${
          activeTab === 'cashless'
            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
        }`}
      >
        <Building2 className="w-5 h-5 inline-block mr-2" />
        Cashless Claims
      </button>
      <button
        onClick={() => setActiveTab('reimbursement')}
        className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 ${
          activeTab === 'reimbursement'
            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
        }`}
      >
        <CreditCard className="w-5 h-5 inline-block mr-2" />
        Reimbursement Claims
      </button>
    </div>
  );
}

function CashlessClaimsContent() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'Choose a Network Hospital',
      description: 'Visit an insurer-approved network hospital.',
      details: [
        'Carry your Health Insurance ID Card',
        'Carry Photo ID proof',
        'Verify hospital network status beforehand'
      ]
    },
    {
      title: 'Inform the Insurer/TPA',
      description: 'Notify about your hospitalization in time.',
      details: [
        'Planned hospitalization: 48–72 hours in advance',
        'Emergency hospitalization: Within 24 hours of admission'
      ]
    },
    {
      title: 'Submit Pre-Authorization Request',
      description: 'Hospital submits pre-authorization form to insurer.',
      details: [
        'Hospital submits Cashless Form to insurer/TPA',
        'Include doctor\'s admission note and diagnosis',
        'Provide estimated treatment cost'
      ]
    },
    {
      title: 'Authorization Review',
      description: 'Insurer reviews medical details and policy coverage.',
      details: [
        'Approval, partial approval, or rejection communicated',
        'Hospital receives approval status',
        'Additional documents may be requested'
      ]
    },
    {
      title: 'Treatment & Monitoring',
      description: 'Proceed with treatment as per approval.',
      details: [
        'Investigation reports may be submitted',
        'Medical progress notes documented',
        'Additional approvals if treatment extends'
      ]
    },
    {
      title: 'Discharge & Settlement',
      description: 'Final billing and claim settlement.',
      details: [
        'Hospital submits final bills to insurer',
        'Insurer settles approved expenses with hospital',
        'Patient pays only non-covered expenses'
      ]
    }
  ];

  const requiredDocs = {
    admission: ['Health Insurance ID Card copy', 'Photo ID proof', 'Duly filled Pre-Authorization Form', 'Doctor\'s admission note', 'Estimated treatment cost'],
    discharge: ['Final discharge summary', 'Final hospital bill', 'Approved cashless authorization letter']
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-blue-600" />
            Step-by-Step Process
          </h3>
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                className="group cursor-pointer bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{step.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedStep === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {expandedStep === idx && (
                  <div className="px-4 pb-4 border-t border-gray-200 bg-blue-50 animate-fade-in-up">
                    <ul className="space-y-2">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              Documents at Admission
            </h4>
            <ul className="space-y-3">
              {requiredDocs.admission.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <File className="w-6 h-6 text-cyan-600" />
              Documents at Discharge
            </h4>
            <ul className="space-y-3">
              {requiredDocs.discharge.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
            <p className="text-sm text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              Non-payable or excluded expenses must be paid by the patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReimbursementClaimsContent() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      title: 'Pay Hospital Bills',
      description: 'Settle all expenses at discharge.',
      details: [
        'Pay the full hospital bill at discharge',
        'Collect all original documents',
        'Keep receipts and bills safe'
      ]
    },
    {
      title: 'Inform the Insurer',
      description: 'Notify within policy timelines.',
      details: [
        'Contact insurer/TPA within 7-30 days of discharge',
        'Follow timeline specified in your policy',
        'Provide basic claim information'
      ]
    },
    {
      title: 'Fill Claim Form',
      description: 'Complete the reimbursement form.',
      details: [
        'Duly fill and sign the Reimbursement Claim Form',
        'Provide accurate information',
        'Be clear about claim amount'
      ]
    },
    {
      title: 'Submit Claim Documents',
      description: 'Submit all required documents.',
      details: [
        'Submit online through portal or mobile app',
        'Or mail/visit office with documents',
        'Keep copies for your records'
      ]
    },
    {
      title: 'Claim Processing',
      description: 'Insurer verifies and processes.',
      details: [
        'Insurer verifies documents and coverage',
        'Additional documents may be requested',
        'Processing typically takes 7-10 days'
      ]
    },
    {
      title: 'Claim Decision & Payment',
      description: 'Receive approval and reimbursement.',
      details: [
        'Claim approved, partially approved, or rejected',
        'Approved amount credited to bank account',
        'Decision communicated via email/SMS'
      ]
    }
  ];

  const mandatoryDocs = [
    'Duly filled and signed claim form',
    'Health Insurance ID Card copy',
    'Photo ID proof',
    'Original hospital bills and receipts',
    'Itemized hospital bill',
    'Discharge summary',
    'Doctor\'s consultation notes',
    'Prescriptions'
  ];

  const medicalDocs = [
    'Diagnostic test reports (lab, X-ray, MRI, etc.)',
    'Pharmacy bills with prescriptions',
    'Implant / consumables invoices (if applicable)'
  ];

  const additionalDocs = [
    'FIR / Medico-Legal Certificate (for accident cases)',
    'Employer certificate (for group insurance)',
    'Cancelled cheque or bank account details',
    'Fitness certificate (if requested)'
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-cyan-600" />
            Step-by-Step Process
          </h3>
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                className="group cursor-pointer bg-white rounded-xl border-2 border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{step.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedStep === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {expandedStep === idx && (
                  <div className="px-4 pb-4 border-t border-gray-200 bg-cyan-50 animate-fade-in-up">
                    <ul className="space-y-2">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <File className="w-6 h-6 text-blue-600" />
              Mandatory Documents
            </h4>
            <ul className="space-y-2">
              {mandatoryDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-purple-600" />
              Medical Documents
            </h4>
            <ul className="space-y-2">
              {medicalDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Home className="w-6 h-6 text-green-600" />
              Additional Documents
            </h4>
            <ul className="space-y-2">
              {additionalDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClaimsGuide() {
  const [activeTab, setActiveTab] = useState<'cashless' | 'reimbursement'>('cashless');
  const [expandedReason, setExpandedReason] = useState<number | null>(null);

  const commonReasons = [
    { title: 'Missing or Unclear Documents', description: 'Ensure all documents are legible and complete' },
    { title: 'Policy Exclusions', description: 'Check if the treatment is covered under your policy' },
    { title: 'Waiting Periods', description: 'Some conditions have waiting periods before coverage' },
    { title: 'Late Submission', description: 'Submit claims within the timeline specified in policy' },
    { title: 'Non-Network Hospital', description: 'For cashless claims, hospital must be in network' }
  ];

  const bestPractices = [
    'Always keep copies of all documents',
    'Verify hospital network status before admission',
    'Submit claims within timelines',
    'Ensure documents are complete and legible',
    'Contact insurer immediately for pre-authorization',
    'Keep your Health Insurance ID Card safe'
  ];

  const timelines = [
    { period: 'Claim Submission', time: '7–30 days from discharge' },
    { period: 'Document Clarification', time: 'Within insurer-specified timeframe' },
    { period: 'Settlement', time: '7-10 working days (after approval)' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Health Insurance Claim <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Filing Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete step-by-step process for filing health insurance claims with all required documents
          </p>
        </div>

        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-fade-in-up">
          {activeTab === 'cashless' ? <CashlessClaimsContent /> : <ReimbursementClaimsContent />}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              Common Rejection Reasons
            </h3>
            <div className="space-y-3">
              {commonReasons.map((reason, idx) => (
                <div
                  key={idx}
                  onClick={() => setExpandedReason(expandedReason === idx ? null : idx)}
                  className="cursor-pointer bg-gray-50 hover:bg-red-50 rounded-xl p-4 transition-all duration-300 border border-gray-200 hover:border-red-300"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">{reason.title}</h4>
                    <ChevronDown
                      className={`w-5 h-5 text-red-600 transition-transform duration-300 ${
                        expandedReason === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedReason === idx && (
                    <p className="text-gray-700 text-sm mt-3 animate-fade-in-up">{reason.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Best Practices
            </h3>
            <ul className="space-y-3">
              {bestPractices.map((practice, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 transform hover:translate-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl p-8 text-white mb-12 animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-8 text-center">Important Timelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelines.map((timeline, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">{timeline.period}</h4>
                <p className="text-lg opacity-90">{timeline.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 animate-fade-in-up">
          <div className="flex items-start gap-4">
            <Download className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h4>
              <p className="text-gray-700 mb-6">
                Download our comprehensive claim filing guide or contact our support team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Download PDF Guide
                </button>
                <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-300 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
