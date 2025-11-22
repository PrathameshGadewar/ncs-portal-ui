import { useEffect, useState } from "react";

const Employers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock employer logos - in production, these would be real company logos
  const employers = [
    { name: "TCS", color: "#0066B2" },
    { name: "Infosys", color: "#007BC0" },
    { name: "Wipro", color: "#6366F1" },
    { name: "Reliance", color: "#D62828" },
    { name: "Mahindra", color: "#DC2626" },
    { name: "Tata", color: "#1E40AF" },
    { name: "HCL", color: "#7C3AED" },
    { name: "Tech Mahindra", color: "#2563EB" },
    { name: "Cognizant", color: "#4338CA" },
    { name: "Accenture", color: "#A333C8" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % employers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [employers.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary/40 to-background border-y-2 border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Featured Employers
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gov-saffron mx-auto mb-4 sm:mb-6"></div>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Leading organizations actively recruiting through National Career Service
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 6}%)`,
            }}
          >
            {employers.map((employer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-2 sm:px-3 md:px-4"
              >
                <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 h-28 sm:h-32 md:h-36 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/30 group cursor-pointer">
                  <div
                    className="text-lg sm:text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform duration-300"
                    style={{ color: employer.color }}
                  >
                    {employer.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
          {employers.slice(0, Math.ceil(employers.length / 6)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 6)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 6) === index
                  ? "w-8 sm:w-10 bg-primary shadow-md"
                  : "w-2 sm:w-2.5 bg-border hover:bg-primary/60"
              }`}
              aria-label={`Go to employer group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employers;
