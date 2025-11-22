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
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Important Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive services to support your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border"
            >
              <div className={`${service.bgColor} ${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
