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
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-gov-blue text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>भारत सरकार | Government of India</span>
          </div>
          <button
            onClick={() => setLanguage(language === "EN" ? "HI" : "EN")}
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Globe size={16} />
            <span>{language === "EN" ? "हिंदी" : "English"}</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src={emblem} alt="Government of India Emblem" className="h-16 w-16 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-gov-blue">
                National Career Service
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Ministry of Labour & Employment
              </p>
            </div>
          </div>

          {/* PM Photo - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">Hon'ble Prime Minister</p>
              <p className="text-xs text-muted-foreground">Shri Narendra Modi</p>
            </div>
            <img
              src={pmModi}
              alt="Prime Minister Narendra Modi"
              className="h-20 w-16 object-cover rounded border-2 border-gov-saffron shadow-md"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 mt-4 border-t border-border pt-3">
          {navLinks.map((link) => (
            <Button
              key={link}
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              {link}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-2 mt-4 border-t border-border pt-3">
            {navLinks.map((link) => (
              <Button
                key={link}
                variant="ghost"
                className="w-full justify-start text-foreground hover:text-primary hover:bg-secondary"
              >
                {link}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
