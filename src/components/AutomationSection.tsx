import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Smartphone, Wifi, Lock } from "lucide-react";
import automationImage from "@/assets/home-automation.jpg";

const AutomationSection = () => {
  const features = [
    { icon: Shield, label: "Smart Security", desc: "Advanced alarm & monitoring systems" },
    { icon: Smartphone, label: "Remote Control", desc: "Manage your home from anywhere" },
    { icon: Wifi, label: "Connected Sensors", desc: "Motion, smoke, and water detection" },
    { icon: Lock, label: "Access Control", desc: "Smart locks & video doorbells" },
  ];

  return (
    <section id="automation" className="section-padding bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden">
              <img
                src={automationImage}
                alt="Smart Home Automation Panel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-semibold mb-6">
              HOME AUTOMATION
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              INTELLIGENT
              <br />
              <span className="text-primary">LIVING</span>
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Transform your home into a smart, secure, and energy-efficient space. 
              Our automation systems integrate seamlessly with your existing infrastructure 
              to provide complete control at your fingertips.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{feature.label}</div>
                    <div className="text-sm opacity-70">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
