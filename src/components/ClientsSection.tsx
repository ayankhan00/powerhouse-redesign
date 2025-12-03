import { useEffect, useState } from "react";

const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Client logos - using placeholder corporate logos
  const clients = [
    { name: "Pakistan State Oil", initials: "PSO" },
    { name: "Engro Corporation", initials: "ENGRO" },
    { name: "Lucky Cement", initials: "LUCKY" },
    { name: "Nishat Mills", initials: "NISHAT" },
    { name: "Packages Limited", initials: "PKG" },
    { name: "Gul Ahmed", initials: "GA" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold mb-4">
            OUR CLIENTS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            TRUSTED BY <span className="text-primary">INDUSTRY LEADERS</span>
          </h2>
        </div>

        {/* Client Logos Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 mx-6 flex items-center justify-center bg-secondary border border-border hover:border-primary transition-colors"
              >
                <div className="text-center">
                  <div className="font-display text-2xl text-primary">{client.initials}</div>
                  <div className="text-xs text-muted-foreground mt-1">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 2) === index ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
