import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border border-primary-foreground" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-primary-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
            READY TO POWER
            <br />
            YOUR FUTURE?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get a customized power solution for your home or business. Our engineers 
            will assess your requirements and provide a detailed proposal within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Calculator className="w-5 h-5" />
              Free Load Calculation
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <a 
              href="tel:+923001234567" 
              className="flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm opacity-70">24/7 Helpline</div>
                <div className="font-display text-xl">0307-4440347</div>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-primary-foreground/20" />
            <div className="text-primary-foreground text-center sm:text-left">
              <div className="text-sm opacity-70">Visit Our Office</div>
              <div className="font-semibold">3-A1, Off Airport Road, Opposite Toyota Airport Motors,<br /> Lahore Cantt, Pakistan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
