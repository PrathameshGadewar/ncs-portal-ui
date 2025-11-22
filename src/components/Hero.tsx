import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gov-blue via-gov-navy to-primary text-primary-foreground overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Youth Employment and Digital India"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gov-blue/90 to-gov-navy/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Connecting Talent
            <span className="block text-accent mt-2">With Opportunity</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 animate-fade-in">
            Empowering India's workforce through job placement, skill development, and career guidance
          </p>

          {/* Search Box */}
          <div className="bg-background/95 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-xl animate-scale-in">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Find Your Dream Job</h3>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="pl-10 h-12 border-border"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="City, state, or pin code"
                  className="pl-10 h-12 border-border"
                />
              </div>
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-accent">10L+</p>
              <p className="text-sm text-primary-foreground/80">Active Jobs</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-accent">5Cr+</p>
              <p className="text-sm text-primary-foreground/80">Registered Users</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-4 rounded-lg text-center col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-accent">50K+</p>
              <p className="text-sm text-primary-foreground/80">Employers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
