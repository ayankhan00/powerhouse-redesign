import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Banknote, Leaf, BadgeCheck } from "lucide-react";
import solarImage from "@/assets/solar-installation.jpg";

const SolarSection = () => {
  const benefits = [
    {
      icon: Banknote,
      title: "Reduce Bills by 90%",
      description: "Net metering allows you to sell excess power back to the grid",
    },
    {
      icon: Sun,
      title: "On-Grid Systems",
      description: "Seamless integration with your existing power supply",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Clean, renewable energy for a sustainable future",
    },
    {
      icon: BadgeCheck,
      title: "AEDB Licensed",
      description: "One of fewer than 30 licensed solar companies in Pakistan",
    },
  ];

  return (
    <section id="solar" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold mb-6">
              SOLAR ENERGY SOLUTIONS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              HARNESS THE
              <br />
              <span className="text-primary">SUN&apos;S POWER</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of Pakistani homeowners and businesses who have switched 
              to solar with Multiline. Our AEDB-licensed team handles everything from 
              system design to net metering approval.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 border-l-4 border-primary bg-secondary"
                >
                  <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">{benefit.title}</div>
                    <div className="text-sm text-muted-foreground">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Solar for Home
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Solar for Business
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={solarImage}
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-6">
              <div className="grid grid-cols-3 gap-4 text-primary-foreground">
                <div>
                  <div className="font-display text-2xl">90%</div>
                  <div className="text-xs opacity-80">Bill Reduction</div>
                </div>
                <div>
                  <div className="font-display text-2xl">25yr</div>
                  <div className="text-xs opacity-80">Panel Warranty</div>
                </div>
                <div>
                  <div className="font-display text-2xl">AEDB</div>
                  <div className="text-xs opacity-80">Licensed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
