import { Briefcase, GraduationCap, Award, MessageCircle, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Job Search",
      description: "Browse thousands of job opportunities across India",
      color: "text-gov-blue",
      bgColor: "bg-gov-blue/10",
    },
    {
      icon: GraduationCap,
      title: "Skill Development",
      description: "Access free training programs to enhance your skills",
      color: "text-gov-green",
      bgColor: "bg-gov-green/10",
    },
    {
      icon: Award,
      title: "Government Schemes",
      description: "Learn about employment and welfare schemes",
      color: "text-gov-saffron",
      bgColor: "bg-gov-saffron/10",
    },
    {
      icon: MessageCircle,
      title: "Career Counselling",
      description: "Get expert guidance for your career path",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Calendar,
      title: "Online Job Fairs",
      description: "Participate in virtual recruitment events",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Users,
      title: "Youth Employment",
      description: "Special programs for youth empowerment",
      color: "text-gov-green",
      bgColor: "bg-gov-green/10",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Important Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gov-saffron mx-auto mb-4 sm:mb-6"></div>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive services designed to support your career development and employment journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-border hover:border-primary/30 bg-card"
            >
              <div className={`${service.bgColor} ${service.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                <service.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
