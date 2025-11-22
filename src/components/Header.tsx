import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import emblem from "@/assets/emblem.png";
import pmModi from "@/assets/pm-modi.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navLinks = [
    "Home",
    "Job Seekers",
    "Employers",
    "Career Guidance",
    "Skill Training",
    "About NCS",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-gov-saffron shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gov-blue to-gov-navy text-primary-foreground py-2.5 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="font-medium tracking-wide">भारत सरकार | Government of India</span>
            </div>
            <button
              onClick={() => setLanguage(language === "EN" ? "HI" : "EN")}
              className="flex items-center gap-1.5 px-3 py-1 rounded hover:bg-white/10 transition-all duration-200 font-medium"
              aria-label="Change language"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{language === "EN" ? "हिंदी में पढ़ें" : "Read in English"}</span>
              <span className="sm:hidden">{language === "EN" ? "हिं" : "EN"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-4">
              <img 
                src={emblem} 
                alt="Government of India National Emblem" 
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain flex-shrink-0" 
              />
              <div className="flex flex-col">
                <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gov-blue leading-tight">
                  National Career Service
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                  Ministry of Labour & Employment
                </p>
              </div>
            </div>

            {/* PM Photo - Hidden on mobile */}
            <div className="hidden xl:flex items-center gap-3 lg:gap-4">
              <div className="text-right">
                <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">Hon'ble Prime Minister</p>
                <p className="text-xs text-muted-foreground mt-0.5">Shri Narendra Modi</p>
              </div>
              <img
                src={pmModi}
                alt="Prime Minister Shri Narendra Modi"
                className="h-16 w-14 sm:h-20 sm:w-16 object-cover rounded border-2 border-gov-saffron shadow-lg flex-shrink-0"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary/80 rounded-md transition-all duration-200 border border-transparent hover:border-border"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5 mt-4 border-t-2 border-border pt-4" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Button
                key={link}
                variant="ghost"
                className="text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/60 transition-all duration-200 px-4 py-2 rounded-sm"
              >
                {link}
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden flex flex-col gap-1 mt-4 border-t-2 border-border pt-3 pb-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Button
                  key={link}
                  variant="ghost"
                  className="w-full justify-start text-sm font-medium text-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200 py-2.5"
                >
                  {link}
                </Button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
