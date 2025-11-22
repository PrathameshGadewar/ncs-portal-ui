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
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Employers
          </h2>
          <p className="text-muted-foreground text-lg">
            Top companies hiring through NCS portal
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / 6}%)`,
            }}
          >
            {employers.map((employer, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 px-4"
              >
                <div className="bg-background rounded-lg p-8 h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-border group">
                  <div
                    className="text-2xl font-bold group-hover:scale-110 transition-transform"
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
        <div className="flex justify-center gap-2 mt-8">
          {employers.slice(0, Math.ceil(employers.length / 6)).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 6)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / 6) === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employers;
