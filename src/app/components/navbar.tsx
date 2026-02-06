import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import tasknovaLogo from "../assets/tasknova-logo-2.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const productLinks = [
    { name: "Products Overview", path: "/products" },
    { name: "Tasknova Insight", path: "/products/insight", description: "AI conversation intelligence" },
    { name: "Tasknova Engage", path: "/products/engage", description: "Omnichannel engagement" },
    { name: "Tasknova Coach", path: "/products/coach", description: "AI sales coaching" }
  ];

  const solutionLinks = [
    { name: "By Team", path: "/solutions", description: "Sales Leaders, RevOps, CS" },
    { name: "By Industry", path: "/solutions/industry", description: "SaaS, Real Estate, HR" }
  ];

  const resourceLinks = [
    { name: "Resource Hub", path: "/resources" },
    { name: "Guides & Ebooks", path: "/resources#guides" },
    { name: "Webinars", path: "/resources#webinars" },
    { name: "Case Studies", path: "/resources#case-studies" }
  ];

  const handleNavClick = (path: string, closeDropdown: () => void) => {
    closeDropdown();
    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={tasknovaLogo} 
              alt="Tasknova Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {/* Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <button 
                  onClick={() => navigate('/products')}
                  className="flex items-center gap-1 text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2 cursor-pointer"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-[100]">
                    <div className="w-72 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {productLinks.map((link, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavClick(link.path, () => setProductsDropdownOpen(false))}
                          className="block w-full text-left px-4 py-3 hover:bg-cyan-50 transition-colors cursor-pointer"
                        >
                          <div className="font-semibold text-slate-900 hover:text-cyan-600">{link.name}</div>
                          {link.description && (
                            <div className="text-sm text-slate-500">{link.description}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button 
                  onClick={() => navigate('/solutions')}
                  className="flex items-center gap-1 text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2 cursor-pointer"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-[100]">
                    <div className="w-64 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {solutionLinks.map((link, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavClick(link.path, () => setSolutionsDropdownOpen(false))}
                          className="block w-full text-left px-4 py-3 hover:bg-cyan-50 transition-colors cursor-pointer"
                        >
                          <div className="font-semibold text-slate-900 hover:text-cyan-600">{link.name}</div>
                          <div className="text-sm text-slate-500">{link.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/integrations" 
                className="text-slate-700 hover:text-cyan-600 font-medium transition-colors cursor-pointer py-2"
              >
                Integrations
              </Link>
              
              <Link 
                to="/pricing" 
                className="text-slate-700 hover:text-cyan-600 font-medium transition-colors cursor-pointer py-2"
              >
                Pricing
              </Link>

              {/* Resources Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button 
                  onClick={() => navigate('/resources')}
                  className="flex items-center gap-1 text-slate-700 hover:text-cyan-600 font-medium transition-colors py-2 cursor-pointer"
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 z-[100]">
                    <div className="w-56 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {resourceLinks.map((link, index) => (
                        <button
                          key={index}
                          onClick={() => handleNavClick(link.path, () => setResourcesDropdownOpen(false))}
                          className="block w-full text-left px-4 py-3 hover:bg-cyan-50 transition-colors font-medium text-slate-700 hover:text-cyan-600 cursor-pointer"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-slate-700 hover:text-cyan-600">
                Sign In
              </Button>
              <Link to="/book-demo">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white cursor-pointer">
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {/* Products */}
              <div>
                <div className="font-semibold text-slate-900 mb-2">Products</div>
                <div className="flex flex-col gap-2 pl-4">
                  {productLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.path, () => setMobileMenuOpen(false))}
                      className="text-left text-slate-600 hover:text-cyan-600 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="font-semibold text-slate-900 mb-2">Solutions</div>
                <div className="flex flex-col gap-2 pl-4">
                  {solutionLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.path, () => setMobileMenuOpen(false))}
                      className="text-left text-slate-600 hover:text-cyan-600 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => handleNavClick('/integrations', () => setMobileMenuOpen(false))}
                className="text-left font-semibold text-slate-900 hover:text-cyan-600 cursor-pointer"
              >
                Integrations
              </button>

              <button 
                onClick={() => handleNavClick('/pricing', () => setMobileMenuOpen(false))}
                className="text-left font-semibold text-slate-900 hover:text-cyan-600 cursor-pointer"
              >
                Pricing
              </button>

              {/* Resources */}
              <div>
                <div className="font-semibold text-slate-900 mb-2">Resources</div>
                <div className="flex flex-col gap-2 pl-4">
                  {resourceLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.path, () => setMobileMenuOpen(false))}
                      className="text-left text-slate-600 hover:text-cyan-600 cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <Button variant="outline" className="w-full cursor-pointer">
                  Sign In
                </Button>
                <Link to="/book-demo" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white cursor-pointer">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}