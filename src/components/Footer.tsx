import { Facebook, Twitter, Youtube, Instagram, Phone, Mail } from "lucide-react";
import emblem from "@/assets/emblem.png";

const Footer = () => {
  const quickLinks = [
    "About NCS",
    "Job Seekers",
    "Employers",
    "Career Counselling",
    "Skill Development",
    "Job Fairs",
  ];

  const governmentLinks = [
    "Ministry of Labour & Employment",
    "Digital India",
    "MyGov",
    "India.gov.in",
    "Data Portal",
    "RTI",
  ];

  return (
    <footer className="bg-gov-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={emblem} alt="Emblem" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg">NCS Portal</h3>
                <p className="text-xs text-primary-foreground/80">Govt. of India</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              National Career Service is a Mission Mode Project under the Digital India initiative, offering career-related services to citizens.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-primary-foreground/10 hover:bg-accent p-2 rounded transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Government Links</h3>
            <ul className="space-y-2">
              {governmentLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Helpline</p>
                  <p className="text-sm text-primary-foreground/80">1800-425-1514</p>
                  <p className="text-xs text-primary-foreground/60">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-primary-foreground/80">support@ncs.gov.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© {new Date().getFullYear()} National Career Service. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Disclaimer
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
          <p className="text-center md:text-left text-xs text-primary-foreground/60 mt-4">
            This is the official website of National Career Service, Ministry of Labour & Employment, Government of India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
