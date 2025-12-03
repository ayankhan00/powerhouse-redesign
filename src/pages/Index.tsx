import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GeneratorsSection from "@/components/GeneratorsSection";
import SolarSection from "@/components/SolarSection";
import AutomationSection from "@/components/AutomationSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <GeneratorsSection />
        <SolarSection />
        <AutomationSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
