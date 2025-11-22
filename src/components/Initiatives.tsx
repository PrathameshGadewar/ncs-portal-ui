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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Government Initiatives
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flagship programs driving India's growth and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
            >
              <div className="aspect-square bg-gradient-to-br from-secondary to-background p-8 flex items-center justify-center">
                <img
                  src={initiative.image}
                  alt={initiative.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {initiative.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {initiative.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
