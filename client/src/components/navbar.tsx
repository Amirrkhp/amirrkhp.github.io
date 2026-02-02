import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-sm font-heading font-bold text-xl group-hover:bg-primary/90 transition-colors">
              AK
            </div>
            <div className={`flex flex-col ${isScrolled ? "text-primary" : "text-white drop-shadow-md"}`}>
              <span className="font-heading font-bold text-lg leading-none">AMIR K.</span>
              <span className="text-[10px] uppercase tracking-widest font-medium opacity-90">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Services", "Areas", "Testimonials"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-accent-foreground ${
                  isScrolled ? "text-gray-600" : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              variant={isScrolled ? "default" : "secondary"}
              className="font-semibold shadow-md"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-primary" : "text-white"}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden flex flex-col p-4 space-y-4 animate-in slide-in-from-top-5">
          {["About", "Services", "Areas", "Testimonials", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left py-2 px-4 hover:bg-slate-50 rounded-lg text-primary font-medium"
            >
              {item}
            </button>
          ))}
          <div className="pt-4 border-t flex flex-col gap-3">
             <a href="tel:+19493719679" className="flex items-center gap-2 text-sm text-gray-600 px-4">
                <Phone className="h-4 w-4" /> (949) 371-9679
             </a>
             <a href="mailto:contact@amirkrealestate.com" className="flex items-center gap-2 text-sm text-gray-600 px-4">
                <Mail className="h-4 w-4" /> contact@amirkrealestate.com
             </a>
          </div>
        </div>
      )}
    </nav>
  );
}
