import { Award, Globe, Wrench, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Founder trained in UK, USA & Siemens Germany",
    },
    {
      icon: Award,
      title: "50+ Years",
      description: "Half a century of engineering excellence",
    },
    {
      icon: Wrench,
      title: "Premium Quality",
      description: "Only certified Perkins & Cummins engines",
    },
    {
      icon: Users,
      title: "After-Sales Support",
      description: "24/7 call center & rapid response team",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold mb-6">
              ABOUT MULTILINE
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              ENGINEERING
              <br />
              <span className="text-primary">EXCELLENCE</span>
            </h2>
            <div className="industrial-border">
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1975, Multiline Engineering Co. has been at the forefront of 
                Pakistan&apos;s power generation and energy solutions industry. Our founder, 
                with training from the UK, USA, and Siemens Germany, established a legacy 
                of precision engineering that continues to this day.
              </p>
              <p className="text-lg text-muted-foreground">
                We don&apos;t just sell equipment — we provide complete power solutions backed 
                by the strongest after-sales service network in the country. Our commitment 
                to quality has made us the trusted choice for industrial, commercial, and 
                residential clients across Pakistan.
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-industrial p-6 group hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
