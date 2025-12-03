import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Building2, Home, Shield } from "lucide-react";
import generatorImage from "@/assets/generator-industrial.jpg";

const GeneratorsSection = () => {
  const features = [
    { icon: Factory, label: "Industrial", desc: "High-capacity power plants" },
    { icon: Building2, label: "Commercial", desc: "Office & retail solutions" },
    { icon: Home, label: "Residential", desc: "Home backup power" },
    { icon: Shield, label: "Warranty", desc: "Premium protection plans" },
  ];

  const specs = [
    { value: "10,000+", label: "Generators Installed" },
    { value: "5kVA", label: "To 2500kVA Range" },
    { value: "99.9%", label: "Reliability Rate" },
  ];

  return (
    <section id="generators" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold mb-6">
            GENERATORS DIVISION
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            POWER YOU CAN <span className="text-primary">TRUST</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genuine Perkins (UK) and Cummins (USA) diesel generators for every scale — 
            from small homes to large industrial complexes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={generatorImage}
                alt="Industrial Diesel Generator"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6">
              <div className="font-display text-3xl">PERKINS</div>
              <div className="text-sm opacity-80">& CUMMINS POWERED</div>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {specs.map((spec, index) => (
                <div key={index} className="text-center p-4 bg-background border border-border">
                  <div className="font-display text-2xl sm:text-3xl text-primary">{spec.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{spec.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background border border-border hover:border-primary transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">{feature.label}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground mb-8">
              Every generator comes with comprehensive installation, commissioning, 
              and our industry-leading after-sales support. We maintain the largest 
              spare parts inventory in Pakistan for immediate availability.
            </p>

            <Button size="lg" className="group">
              Explore Generators
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorsSection;
