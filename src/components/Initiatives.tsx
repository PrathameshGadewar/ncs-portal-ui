import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import digitalIndia from "@/assets/digital-india.png";
import makeInIndia from "@/assets/make-in-india.png";
import skillIndia from "@/assets/skill-india.png";

const Initiatives = () => {
  const initiatives = [
    {
      name: "Digital India",
      image: digitalIndia,
      description: "Transforming India into a digitally empowered society",
      link: "#",
    },
    {
      name: "Make in India",
      image: makeInIndia,
      description: "Promoting manufacturing and entrepreneurship",
      link: "#",
    },
    {
      name: "Skill India",
      image: skillIndia,
      description: "Enhancing employability through skill training",
      link: "#",
    },
    {
      name: "PMKVY",
      image: skillIndia,
      description: "Pradhan Mantri Kaushal Vikas Yojana",
      link: "#",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background border-y-2 border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Government Initiatives
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gov-saffron mx-auto mb-4 sm:mb-6"></div>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Flagship programs driving India's economic growth and workforce development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/30 bg-card"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary via-background to-secondary p-6 sm:p-8 flex items-center justify-center border-b-2 border-border">
                <img
                  src={initiative.image}
                  alt={`${initiative.name} - Government of India Initiative`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  {initiative.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
                  {initiative.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-200 py-2 sm:py-2.5"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
