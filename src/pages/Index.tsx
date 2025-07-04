
import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp, TrendingDown, Menu, X, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [email, setEmail] = useState("");
  const [btcPrice, setBtcPrice] = useState({ price: 43250.75, change: 2.45 });

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice(prev => ({
        price: prev.price + (Math.random() - 0.5) * 100,
        change: prev.change + (Math.random() - 0.5) * 0.5
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: "Trading", href: "#trading" },
    { name: "Futures", href: "#futures" },
    { name: "Tools", href: "#tools" },
    { name: "Earn", href: "#earn" },
    { name: "Documentation", href: "#docs" },
    { name: "Our card", href: "#card" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-800/95 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                CryptoEx
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 ml-8">
                <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-700">
                  Login
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full border-gray-600 text-black hover:bg-gray-700">
                    Login
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Buy, trade and invest in
                <br />
                <span className="text-blue-400">over 150 cryptocurrencies!</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                Join millions of users worldwide and start your crypto journey with the most trusted exchange platform.
              </p>
              
              {/* Email Signup */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Regulated & Secure
                </div>
                <div>10M+ Users Worldwide</div>
              </div>
            </div>

            {/* Right Content - 3D Crypto Icon */}
            <div className="relative flex flex-col items-center">
              {/* 3D Ethereum-like Diamond */}
              <div className="relative mb-8">
                <div className="crypto-diamond animate-float">
                  <div className="diamond-face diamond-top"></div>
                  <div className="diamond-face diamond-left"></div>
                  <div className="diamond-face diamond-right"></div>
                  <div className="diamond-face diamond-bottom"></div>
                </div>
              </div>

              {/* Price Display */}
              <Card className="bg-gray-800 border-gray-700 w-full max-w-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        ₿
                      </div>
                      <div>
                        <div className="font-semibold text-white">Bitcoin</div>
                        <div className="text-sm text-gray-400">BTC</div>
                      </div>
                    </div>
                    <div className={`flex items-center ${btcPrice.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {btcPrice.change >= 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                      {btcPrice.change.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-4">
                    ${btcPrice.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                    All assets
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CryptoEx?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry-leading security, unmatched liquidity, and tools for every trader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Security",
                description: "Multi-layer security with cold storage, 2FA, and insurance coverage for your digital assets.",
                icon: "🔒"
              },
              {
                title: "Low Trading Fees",
                description: "Competitive fees starting from 0.1% with volume discounts for frequent traders.",
                icon: "💰"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support to help you with any questions or issues.",
                icon: "🎧"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-40">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-300">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
              <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-black hover:bg-gray-700"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Live support
              </Button>
              <Button
                size="sm"
                onClick={() => setShowCookieConsent(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                I agree
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">
            CryptoEx
          </div>
          <p className="text-gray-400 mb-6">
            The world's leading cryptocurrency exchange platform
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/support" className="hover:text-gray-300">Support</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 CryptoEx. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
