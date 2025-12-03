import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            50+ Years of Engineering Excellence
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 ml-4 bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            ISO 9001:2015
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 ml-4 bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            AEDB Licensed
          </div>
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Perkins Authorized
          </div> */}

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-none mb-6 animate-fade-in animation-delay-200">
            POWERING PAKISTAN
            <br />
            <span className="text-primary">SINCE 1975</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mb-10 animate-fade-in animation-delay-400">
            Industry-leading diesel generators powered by Perkins & Cummins engines, 
            cutting-edge solar energy solutions, and smart home automation systems. 
            Trusted by 10,000+ installations across Pakistan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
            <Button variant="hero" size="xl" className="group">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Calculator className="w-5 h-5" />
              Free Load Calculation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in animation-delay-600">
            <div>
              <div className="font-display text-4xl sm:text-5xl text-primary">10,000+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Installations</div>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl text-primary">50+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl sm:text-5xl text-primary">24/7</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
