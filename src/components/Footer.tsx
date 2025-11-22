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
    <footer className="bg-gradient-to-br from-gov-navy to-gov-blue text-primary-foreground border-t-4 border-gov-saffron">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <img src={emblem} alt="Government of India Emblem" className="h-12 w-12 sm:h-14 sm:w-14" />
              <div>
                <h3 className="font-bold text-lg sm:text-xl">NCS Portal</h3>
                <p className="text-xs sm:text-sm text-primary-foreground/90 font-medium">Government of India</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/90 mb-5 sm:mb-6 leading-relaxed">
              National Career Service is a Mission Mode Project under the Digital India initiative, offering comprehensive career-related services to all citizens.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  className="bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground p-2.5 rounded-lg transition-all duration-200 hover:scale-110 shadow-md"
                  aria-label={`Social media ${['Facebook', 'Twitter', 'YouTube', 'Instagram'][index]}`}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-5 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-primary-foreground/90 hover:text-accent transition-all duration-200 hover:translate-x-2 inline-block font-medium"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-5 text-primary-foreground">Government Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {governmentLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-primary-foreground/90 hover:text-accent transition-all duration-200 hover:translate-x-2 inline-block font-medium"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-5 text-primary-foreground">Contact Us</h3>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-start gap-3 sm:gap-4">
                <Phone size={20} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base font-bold text-primary-foreground">Toll-Free Helpline</p>
                  <p className="text-base sm:text-lg text-accent font-bold">1800-425-1514</p>
                  <p className="text-xs sm:text-sm text-primary-foreground/80 mt-1">Monday - Friday</p>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail size={20} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base font-bold text-primary-foreground">Email Support</p>
                  <p className="text-sm sm:text-base text-primary-foreground/90 break-all">support@ncs.gov.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-primary-foreground/20 bg-gov-navy/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-primary-foreground/90">
            <p className="font-medium">© {new Date().getFullYear()} National Career Service, Ministry of Labour & Employment. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-accent transition-all duration-200 font-medium hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-all duration-200 font-medium hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:text-accent transition-all duration-200 font-medium hover:underline">
                Disclaimer
              </a>
              <a href="#" className="hover:text-accent transition-all duration-200 font-medium hover:underline">
                Accessibility
              </a>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-primary-foreground/10">
            <p className="text-center text-xs sm:text-sm text-primary-foreground/80 leading-relaxed">
              This is the official website of <strong>National Career Service</strong>, Ministry of Labour & Employment, Government of India.<br className="hidden sm:block" />
              Content owned, updated, and maintained by the Ministry of Labour & Employment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
