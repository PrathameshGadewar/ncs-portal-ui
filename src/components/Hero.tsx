import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gov-blue via-gov-navy to-gov-blue text-primary-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="National Career Service - Youth Employment and Digital India Initiative"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gov-blue/95 via-gov-navy/90 to-gov-blue/95" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            Connecting Talent
            <span className="block text-accent mt-2 sm:mt-3">With Opportunity</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-primary-foreground/95 animate-fade-in max-w-2xl leading-relaxed font-medium">
            Empowering India's workforce through job placement, skill development, and career guidance
          </p>

          {/* Search Box */}
          <div className="bg-background/98 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-lg shadow-2xl animate-scale-in border border-border/20">
            <h3 className="text-foreground font-bold mb-5 sm:mb-6 text-lg sm:text-xl md:text-2xl">Find Your Dream Job</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10" size={20} />
                  <Input
                    type="text"
                    placeholder="Job title, keywords, or company name"
                    className="pl-10 sm:pl-12 h-12 sm:h-14 border-2 border-border hover:border-primary/30 focus:border-primary transition-colors text-sm sm:text-base font-medium"
                    aria-label="Job search"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10" size={20} />
                  <Input
                    type="text"
                    placeholder="City, state, or pin code"
                    className="pl-10 sm:pl-12 h-12 sm:h-14 border-2 border-border hover:border-primary/30 focus:border-primary transition-colors text-sm sm:text-base font-medium"
                    aria-label="Location search"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="h-12 sm:h-14 px-6 sm:px-10 bg-gov-saffron hover:bg-gov-saffron/90 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                >
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
            <div className="bg-background/15 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-lg text-center border border-white/10 hover:bg-background/20 transition-all duration-300 hover:scale-105">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">10L+</p>
              <p className="text-xs sm:text-sm md:text-base text-primary-foreground/90 font-medium">Active Job Listings</p>
            </div>
            <div className="bg-background/15 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-lg text-center border border-white/10 hover:bg-background/20 transition-all duration-300 hover:scale-105">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">5Cr+</p>
              <p className="text-xs sm:text-sm md:text-base text-primary-foreground/90 font-medium">Registered Job Seekers</p>
            </div>
            <div className="bg-background/15 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-lg text-center col-span-2 md:col-span-1 border border-white/10 hover:bg-background/20 transition-all duration-300 hover:scale-105">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-1 sm:mb-2">50K+</p>
              <p className="text-xs sm:text-sm md:text-base text-primary-foreground/90 font-medium">Verified Employers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
