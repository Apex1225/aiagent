import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import Claims from './pages/Claims';
import ClaimsGuide from './pages/ClaimsGuide';
import Support from './pages/Support';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const titles: { [key: string]: string } = {
      home: 'Insurance Plus - Smart AI Insurance Agent',
      products: 'Insurance Products - Insurance Plus',
      claims: 'Claims Assistance - Insurance Plus',
      guide: 'Health Insurance Claim Filing Guide - Insurance Plus',
      support: 'Support & Contact - Insurance Plus'
    };
    document.title = titles[currentPage] || 'Insurance Plus';
  }, [currentPage]);


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'claims':
        return <Claims />;
      case 'guide':
        return <ClaimsGuide />;
      case 'support':
        return <Support />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      <main>
        {renderPage()}
      </main>


      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Insurance Plus</h3>
              <p className="text-gray-400 text-sm">
                Your trusted AI-powered insurance partner for health and life coverage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => setCurrentPage('products')} className="hover:text-white transition-colors">
                    Insurance Products
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('claims')} className="hover:text-white transition-colors">
                    File a Claim
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('guide')} className="hover:text-white transition-colors">
                    Claims Guide
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('support')} className="hover:text-white transition-colors">
                    Support
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Health Insurance</li>
                <li>Life Insurance</li>
                <li>Critical Illness</li>
                <li>Family Floater</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 1800-XXX-XXXX</li>
                <li>✉️ support@insuranceplus.com</li>
                <li>📍 Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Insurance Plus. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
