import React, { useState } from 'react';
import { 
  Calendar, 
  Shield, 
  Users, 
  Settings, 
  BarChart3, 
  Search, 
  Menu, 
  X,
  ChevronRight,
  Check,
  Building,
  UserCheck,
  ShieldCheck,
  Headphones
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

interface PricingTier {
  name: string;
  basePrice: number;
  features: string[];
  popular?: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userLicenses, setUserLicenses] = useState(5);

  const features: Feature[] = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Client Appointment Scheduling",
      description: "Streamlined client meeting scheduling with instant persistence and validation",
      details: "Dedicated appointment form that captures client information, validates requests, and writes to the case database with comprehensive test coverage for legal consultations."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Legal Dashboard",
      description: "Comprehensive case oversight and management interface",
      details: "Protected dashboard view for legal professionals with case tracking, deadline monitoring, and secure route protection for sensitive legal data."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Secure Account Management", 
      description: "Complete attorney and staff account lifecycle with enhanced security",
      details: "Registration, password resets, profile updates, and password changes with comprehensive test coverage designed for legal practice security requirements."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Two-Factor Authentication",
      description: "Attorney-grade security with 2FA and recovery codes",
      details: "Active 2FA with confirmation and recovery codes, tested enabling/disabling flows and code regeneration to protect sensitive client information."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Law Firm Collaboration",
      description: "Complete legal team management and case collaboration",
      details: "Full team management with attorney and staff invitations, tested team creation, member invitation, and cancellation workflows for law firm operations."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Legal Workflow UI",
      description: "Case search, deadline notifications, and quick-access legal tools",
      details: "Integrated top bar with global case search, theme toggling, deadline notifications, and quick-access menus for enhanced legal workflow efficiency."
    }
  ];

  const targetAudiences = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Solo Practitioners & Small Law Firms",
      description: "Lightweight case and client management with streamlined appointment forms and instant persistence designed for independent legal practices."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Managing Partners & Legal Coordinators",
      description: "Built-in team creation and invitation workflows to quickly onboard attorneys, paralegals, and support staff for collaborative case management."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Compliance-Focused Law Firms",
      description: "Enforced 2FA, strong password management, and auditable account deletion flows meeting legal industry compliance and client confidentiality requirements."
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Legal Operations & Support Staff",
      description: "At-a-glance case awareness with dashboard, global search, and deadline notification menus to monitor court dates, client commitments, and legal tasks."
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      basePrice: 15,
      features: [
        "Client Appointment Scheduling",
        "Basic Legal Dashboard",
        "Secure Account Management",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      basePrice: 35,
      popular: true,
      features: [
        "All Starter Features",
        "Two-Factor Authentication",
        "Law Firm Collaboration (up to 10 members)",
        "Case Analytics & Reporting",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      basePrice: 65,
      features: [
        "All Professional Features",
        "Unlimited Attorneys & Staff",
        "Court System Integrations",
        "Advanced Legal Security Features",
        "Dedicated Account Manager",
        "24/7 Phone Support"
      ]
    }
  ];

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://app.legistant.com/img/largeLogobothv.png" 
              alt="Legistant Logo" 
              className="h-16 w-auto mx-auto mb-8"
            />
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Streamline Your Legal
              <span className="text-yellow-400 block">Practice</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
              Complete legal case management and law firm collaboration solution with attorney-grade security
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://app.legistant.com/login"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </a>
              <button 
                onClick={() => setCurrentPage('features')}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                View Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage cases, clients, and law firm operations in one comprehensive legal platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-yellow-500 mb-6 group-hover:text-yellow-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500">{feature.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Built For Legal Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to meet the unique needs of different legal practices and law firm structures
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-yellow-500 mb-6">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already using Legistant to streamline their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://app.legistant.com/login"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </a>
            <button 
              onClick={() => setCurrentPage('pricing')}
              className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </>
  );

  const renderFeatures = () => (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Complete Legal Management Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal practice management tools designed for modern law firms
          </p>
        </div>
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-12 text-center">
                  <div className="text-yellow-500 mb-6 flex justify-center">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-16 h-16" })}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-black mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                <p className="text-gray-500 leading-relaxed">{feature.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderPricing = () => (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team size and requirements
          </p>
          
          {/* License Calculator */}
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto mb-12 shadow-lg">
            <h3 className="text-xl font-bold text-black mb-6">Calculate Your Cost</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of User Licenses: {userLicenses}
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={userLicenses}
                onChange={(e) => setUserLicenses(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #FFC107 0%, #FFC107 ${(userLicenses - 1) * 100 / 99}%, #e5e7eb ${(userLicenses - 1) * 100 / 99}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg relative ${tier.popular ? 'ring-4 ring-yellow-400 transform scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-black mb-2">
                  ${(tier.basePrice * userLicenses).toLocaleString()}
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-500">
                  ${tier.basePrice}/user/month × {userLicenses} users
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://app.legistant.com/login"
                className={`block w-full text-center font-semibold px-6 py-3 rounded-xl transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-yellow-400 hover:bg-yellow-300 text-black' 
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img 
                src="https://app.legistant.com/img/largeLogobothv.png" 
                alt="Legistant" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`hover:text-yellow-400 transition-colors ${currentPage === 'home' ? 'text-yellow-400' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('features')}
                className={`hover:text-yellow-400 transition-colors ${currentPage === 'features' ? 'text-yellow-400' : ''}`}
              >
                Features
              </button>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className={`hover:text-yellow-400 transition-colors ${currentPage === 'pricing' ? 'text-yellow-400' : ''}`}
              >
                Pricing
              </button>
              <a 
                href="https://app.legistant.com/login"
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Login
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-700 py-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                  className={`text-left hover:text-yellow-400 transition-colors ${currentPage === 'home' ? 'text-yellow-400' : ''}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => { setCurrentPage('features'); setMobileMenuOpen(false); }}
                  className={`text-left hover:text-yellow-400 transition-colors ${currentPage === 'features' ? 'text-yellow-400' : ''}`}
                >
                  Features
                </button>
                <button 
                  onClick={() => { setCurrentPage('pricing'); setMobileMenuOpen(false); }}
                  className={`text-left hover:text-yellow-400 transition-colors ${currentPage === 'pricing' ? 'text-yellow-400' : ''}`}
                >
                  Pricing
                </button>
                <a 
                  href="https://app.legistant.com/login"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && renderHome()}
      {currentPage === 'features' && renderFeatures()}
      {currentPage === 'pricing' && renderPricing()}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://app.legistant.com/img/largeLogobothv.png" 
                alt="Legistant" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Streamline your legal practice with our comprehensive case management and law firm collaboration solution.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('features')} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><a href="https://app.legistant.com/login" className="hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Legistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;